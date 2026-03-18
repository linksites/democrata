const root = document.documentElement;
const header = document.getElementById("siteHeader");
const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
const heroFrame = document.getElementById("heroFrame");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mobileNavigation");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const revealItems = document.querySelectorAll("[data-reveal]");
const navLinks = document.querySelectorAll(".main-nav a");
const sectionNodes = document.querySelectorAll("main section[id], main article[id]");
const galleryCards = document.querySelectorAll(".gallery-card");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
const mobileViewport = window.matchMedia("(max-width: 860px)");

let scrollTicking = false;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 20);
}

function setMenuState(isOpen) {
  if (!header || !menuToggle) return;

  header.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");

  if (mobileViewport.matches) {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }
}

function closeMobileMenu() {
  setMenuState(false);
  document.body.classList.remove("menu-open");
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

function updateScrollEffects() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

  root.style.setProperty("--scroll-progress", progress.toFixed(2));

  if (!hero || prefersReducedMotion) return;

  const heroRect = hero.getBoundingClientRect();
  const heroShift = clamp(heroRect.top * -0.12, -44, 44);

  if (heroBg) {
    heroBg.style.transform = `scale(1.08) translate3d(0, ${heroShift}px, 0)`;
  }

  if (heroFrame) {
    heroFrame.style.setProperty("--hero-lift", `${heroShift * 0.22}px`);
  }
}

function requestScrollEffects() {
  if (scrollTicking) return;

  scrollTicking = true;
  window.requestAnimationFrame(() => {
    updateHeaderState();
    updateActiveNav();
    updateScrollEffects();
    scrollTicking = false;
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
      closeMobileMenu();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });
}

function setHeroTilt(rotateX, rotateY) {
  if (!heroFrame) return;
  heroFrame.style.setProperty("--hero-tilt-x", `${rotateX}deg`);
  heroFrame.style.setProperty("--hero-tilt-y", `${rotateY}deg`);
}

function setupHeroTilt() {
  if (!heroFrame || prefersReducedMotion || !hasFinePointer) return;

  heroFrame.addEventListener("mousemove", (event) => {
    const rect = heroFrame.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    setHeroTilt(rotateX, rotateY);
  });

  heroFrame.addEventListener("mouseleave", () => {
    setHeroTilt(0, 0);
  });
}

function setupHeroPointerGlow() {
  if (!hero || prefersReducedMotion || !hasFinePointer) return;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);

    hero.style.setProperty("--pointer-x", `${x}%`);
    hero.style.setProperty("--pointer-y", `${y}%`);
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--pointer-x", "68%");
    hero.style.setProperty("--pointer-y", "28%");
  });
}

function setupMobileMenu() {
  if (!menuToggle || !header || !mainNav) return;

  menuToggle.addEventListener("click", () => {
    const willOpen = !header.classList.contains("menu-open");
    setMenuState(willOpen);
  });

  document.addEventListener("click", (event) => {
    if (!mobileViewport.matches || !header.classList.contains("menu-open")) return;
    if (header.contains(event.target)) return;
    closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("menu-open")) {
      closeMobileMenu();
    }
  });

  mobileViewport.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMobileMenu();
    }
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

  window.setTimeout(() => {
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
updateScrollEffects();
setupRevealObserver();
setupSmoothScroll();
setupMobileMenu();
setupHeroTilt();
setupHeroPointerGlow();
setupLightbox();

window.addEventListener("scroll", requestScrollEffects, { passive: true });
window.addEventListener("resize", requestScrollEffects);
