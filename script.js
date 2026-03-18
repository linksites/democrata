const header = document.getElementById("siteHeader");
const heroFrame = document.getElementById("heroFrame");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const revealItems = document.querySelectorAll("[data-reveal]");
const navLinks = document.querySelectorAll(".main-nav a");
const sectionNodes = document.querySelectorAll("main section[id], main article[id]");
const galleryCards = document.querySelectorAll(".gallery-card");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 20);
}

function updateActiveNav() {
  if (!navLinks.length || !sectionNodes.length) return;

  let currentId = "";
  const offset = 180;

  sectionNodes.forEach((section) => {
    const top = section.offsetTop - offset;
    if (window.scrollY >= top) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("is-active", isActive);
  });
}

function setupRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });
}

function setupHeroTilt() {
  if (!heroFrame || prefersReducedMotion) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  heroFrame.addEventListener("mousemove", (event) => {
    const rect = heroFrame.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    heroFrame.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  heroFrame.addEventListener("mouseleave", () => {
    heroFrame.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  });
}

function openLightbox(imageSrc, imageAlt) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  setTimeout(() => {
    lightboxImage.src = "";
    lightboxImage.alt = "";
  }, 200);
}

function setupLightbox() {
  galleryCards.forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(card.dataset.image, card.dataset.title || "");
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

updateHeaderState();
updateActiveNav();
setupRevealObserver();
setupSmoothScroll();
setupHeroTilt();
setupLightbox();

window.addEventListener("scroll", () => {
  updateHeaderState();
  updateActiveNav();
}, { passive: true });
