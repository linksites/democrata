// ============================================
// DEMOCRATA - JAVASCRIPT PREMIUM
// Animações, interações e efeitos sofisticados
// ============================================

// LOADING SCREEN
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Inicia animações de entrada após loading
        setTimeout(() => {
            initRevealAnimations();
            animateHeroElements();
        }, 300);
    }, 2000);
});

// CURSOR PERSONALIZADO
function initCustomCursor() {
    // Só ativa em dispositivos com mouse
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('cursorDot');
    
    if (!cursor || !cursorDot) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animação suave do cursor
    function animateCursor() {
        // Cursor principal com delay
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Dot segue instantaneamente
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Efeito hover em links e botões
    const interactiveElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .item-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// PARALLAX SCROLL EFFECT
function initParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.5;
                heroBg.style.transform = `translateY(${rate}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// SCROLL REVEAL ANIMATIONS
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('section:not(.hero) h2, .item-card, .horario-item, .contato-item');
    
    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => observer.observe(el));
}

// ANIMAÇÃO ELEMENTOS DO HERO
function animateHeroElements() {
    const heroLogo = document.querySelector('.hero-logo');
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const heroActions = document.querySelector('.hero-actions');
    
    const elements = [heroLogo, heroTitle, heroSubtitle, heroActions];
    
    elements.forEach((el, index) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        }
    });
}

// EFEITO RIPPLE NOS BOTÕES
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-ifood, .btn-pedir, .btn-agendar');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// NAVEGAÇÃO STICKY COM DETECÇÃO DE SCROLL
function initStickyNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// TABS DO CARDÁPIO COM ANIMAÇÃO
function initCardapioTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            
            // Remove active de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => {
                c.classList.remove('active');
                c.style.opacity = '0';
            });
            
            // Adiciona active ao clicado
            btn.classList.add('active');
            
            // Anima entrada do conteúdo
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Anima os cards
                const cards = targetContent.querySelectorAll('.item-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    });
}

// EFEITO DE TILT NOS CARDS
function initCardTilt() {
    const cards = document.querySelectorAll('.item-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// CONTADOR ANIMADO
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// SMOOTH SCROLL PARA LINKS INTERNOS
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// DETECÇÃO DE VISIBILIDADE PARA PERFORMANCE
function initVisibilityObserver() {
    const animatedElements = document.querySelectorAll('.item-card, .horario-item');
    
    const visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.willChange = 'transform, opacity';
            } else {
                entry.target.style.willChange = 'auto';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => visibilityObserver.observe(el));
}

// TEMA ESCURO/CLARO (PREPARAÇÃO PARA FUTURO)
function initThemeToggle() {
    // Verifica preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // Poderia alternar para tema claro no futuro
        console.log('Tema claro detectado, mas site mantém tema escuro premium');
    }
}

// INICIALIZAÇÃO GERAL
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initParallax();
    initRippleEffect();
    initStickyNav();
    initCardapioTabs();
    initCardTilt();
    initSmoothScroll();
    initVisibilityObserver();
    initThemeToggle();
    
    console.log('🎩 Democrata Premium - Inicializado com sucesso!');
});

// PERFORMANCE: LIMPEZA AO SAIR DA PÁGINA
window.addEventListener('beforeunload', () => {
    // Remove will-change para liberar recursos
    document.querySelectorAll('[style*="will-change"]').forEach(el => {
        el.style.willChange = 'auto';
    });
});

// ACESSIBILIDADE: REDUÇÃO DE MOVIMENTO
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-smooth', 'none');
    console.log('⚠️ Modo de redução de movimento ativado');
}
