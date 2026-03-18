// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// NAVIGATION ACTIVE STATE
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// LAZY LOADING FOR IMAGES
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.onload = () => {
                img.style.transition = 'opacity 0.5s ease-in-out';
                img.style.opacity = '1';
            };
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// ANIMATE ON SCROLL
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.barbearia-content, .foodtruck-content, .galeria-grid img, .horario-item, .contato-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

// WHATSAPP SHARE FUNCTION
function shareOnWhatsApp(message) {
    const text = encodeURIComponent(message);
    const url = `https://wa.me/5591981783159?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

// IFOOD REDIRECT
function redirectToIFood() {
    window.open('https://www.ifood.com.br', '_blank', 'noopener,noreferrer');
}

// PHONE CALL
function makePhoneCall() {
    window.location.href = 'tel:+5591981783159';
}

// GALLERY LIGHTBOX
const galleryImages = document.querySelectorAll('.galeria-grid img');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img src="" alt="" class="lightbox-image">
    </div>
`;
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ESC KEY TO CLOSE LIGHTBOX
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// FLOATING BUTTONS ANIMATION
const floatingButtons = document.querySelectorAll('.floating-buttons a');
floatingButtons.forEach((button, index) => {
    button.style.animationDelay = `${index * 0.1}s`;
    button.classList.add('float-in');
});

// COPY TO CLIPBOARD FUNCTION
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiado para a área de transferência!');
    }).catch(() => {
        showNotification('Erro ao copiar texto');
    });
}

// NOTIFICATION SYSTEM
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #25D366, #128C7E);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-family: 'Bebas Neue', cursive;
        font-size: 1.1rem;
        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ADD CSS ANIMATIONS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes floatIn {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .float-in {
        animation: floatIn 0.6s ease-out forwards;
        opacity: 0;
    }
    
    .lightbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 9999;
        justify-content: center;
        align-items: center;
    }
    
    .lightbox.active {
        display: flex;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        background: none;
        border: none;
    }
    
    .lightbox-image {
        width: 100%;
        height: auto;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.8);
    }
    
    .animate {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav a.active {
        background: rgba(255,255,255,0.2);
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add loading animation to hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        setTimeout(() => {
            hero.style.transition = 'opacity 1s ease-in-out';
            hero.style.opacity = '1';
        }, 100);
    }
});

// PERFORMANCE OPTIMIZATION
let ticking = false;
function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

function updateAnimations() {
    animateOnScroll();
    ticking = false;
}

window.addEventListener('scroll', requestTick);