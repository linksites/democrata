Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

function Get-LocalReferences {
    param(
        [Parameter(Mandatory = $true)]
        [string]$FilePath
    )

    $content = Get-Content $FilePath -Raw -Encoding UTF8
    $references = New-Object System.Collections.Generic.List[string]

    if ($FilePath.EndsWith(".css")) {
        [regex]::Matches($content, 'url\((["'']?)(?<path>[^)"'']+)\1\)') | ForEach-Object {
            $path = $_.Groups["path"].Value.Trim()
            if (-not [string]::IsNullOrWhiteSpace($path)) {
                $references.Add($path)
            }
        }
    } else {
        [regex]::Matches($content, '(src|href|data-image)=["''](?<path>[^"'']+)["'']') | ForEach-Object {
            $path = $_.Groups["path"].Value.Trim()
            if (-not [string]::IsNullOrWhiteSpace($path)) {
                $references.Add($path)
            }
        }
    }

    return $references
}

function Test-IsLocalReference {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Reference
    )

    if ([string]::IsNullOrWhiteSpace($Reference)) {
        return $false
    }

    return -not (
        $Reference.StartsWith("http://") -or
        $Reference.StartsWith("https://") -or
        $Reference.StartsWith("//") -or
        $Reference.StartsWith("data:") -or
        $Reference.StartsWith("#") -or
        $Reference.StartsWith("tel:") -or
        $Reference.StartsWith("mailto:") -or
        $Reference.StartsWith("javascript:")
    )
}

function Resolve-ReferencePath {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourceFile,
        [Parameter(Mandatory = $true)]
        [string]$Reference
    )

    $absoluteSourceFile = [System.IO.Path]::GetFullPath($SourceFile)
    $baseDirectory = Split-Path $absoluteSourceFile -Parent
    $candidate = Join-Path $baseDirectory $Reference
    return [System.IO.Path]::GetFullPath($candidate)
}

$filesToCheck = @(
    "index.html",
    "style.css",
    "script.js"
) | Where-Object { Test-Path $_ }

$missingReferences = New-Object System.Collections.Generic.List[pscustomobject]
$encodingWarnings = New-Object System.Collections.Generic.List[pscustomobject]

foreach ($file in $filesToCheck) {
    $content = Get-Content $file -Raw -Encoding UTF8

    if ($content -match "Ãƒ|Ã¢|Ã°Å¸|ï¿½") {
        $encodingWarnings.Add([pscustomobject]@{
            File = $file
            Hint = "Possible text encoding issue detected"
        })
    }

    foreach ($reference in Get-LocalReferences -FilePath $file) {
        if (-not (Test-IsLocalReference -Reference $reference)) {
            continue
        }

        $resolvedPath = Resolve-ReferencePath -SourceFile $file -Reference $reference
        if (-not (Test-Path $resolvedPath)) {
            $missingReferences.Add([pscustomobject]@{
                Source = $file
                Reference = $reference
            })
        }
    }
}

Write-Host ""
Write-Host "Democrata site validation"
Write-Host "Root: $root"
Write-Host ""

if ($missingReferences.Count -eq 0) {
    Write-Host "[OK] No broken local references found."
} else {
    Write-Host "[ERROR] Broken local references:"
    $missingReferences |
        Sort-Object Source, Reference -Unique |
        ForEach-Object { Write-Host " - $($_.Source) -> $($_.Reference)" }
}

Write-Host ""

if ($encodingWarnings.Count -eq 0) {
    Write-Host "[OK] No obvious encoding issues found."
} else {
    Write-Host "[WARN] Possible encoding issues:"
    $encodingWarnings |
        Sort-Object File -Unique |
        ForEach-Object { Write-Host " - $($_.File): $($_.Hint)" }
}

Write-Host ""

if ($missingReferences.Count -gt 0) {
    exit 1
}

exit 0
