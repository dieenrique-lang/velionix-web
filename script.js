/**
 * VELIONIX - Enhanced Landing Page JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initRevealAnimations();
  initCounterAnimations();
  initSmoothScroll();
  initYear();
  initDemoModal();
});

/**
 * Header scroll effect
 */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', !isExpanded);
    toggle.classList.toggle('active');
    nav.classList.toggle('mobile-active');

    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking nav links
  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('active');
      nav.classList.remove('mobile-active');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('mobile-active')) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('active');
      nav.classList.remove('mobile-active');
      document.body.style.overflow = '';
    }
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('mobile-active')) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('active');
      nav.classList.remove('mobile-active');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Reveal animations on scroll using Intersection Observer
 */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${(index % 4) * 0.1}s`;
    revealObserver.observe(element);
  });
}

/**
 * Counter animations for metrics
 */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.counter');

  if (!counters.length) return;

  const observerOptions = {
    root: null,
    threshold: 0.5
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'), 10);
  const duration = 1500;
  const startTime = performance.now();
  const startValue = 0;

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.round(startValue + (target - startValue) * easeOutQuart);

    element.textContent = currentValue;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(updateCounter);
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (href === '#' || href === '#main-content') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const headerHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Set current year in footer
 */
function initYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Parallax effect for hero orbs (optional, respects reduced motion)
 */
function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const orbs = document.querySelectorAll('.hero-orb');
  if (!orbs.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;

        orbs.forEach((orb, index) => {
          const speed = 0.05 + (index * 0.02);
          orb.style.transform = `translateY(${scrollY * speed}px)`;
        });

        ticking = false;
      });

      ticking = true;
    }
  }, { passive: true });
}

// Initialize parallax after other animations
window.addEventListener('load', initParallax);

/**
 * Performance monitoring (development only)
 */
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('Page Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart), 'ms');
  });
}

/**
 * Demo Modal functionality
 */
function initDemoModal() {
  const modal = document.getElementById('demo-modal');
  const modalTitle = document.getElementById('demo-modal-title');
  const iframe = document.getElementById('demo-iframe');
  const closeBtn = document.querySelector('.demo-modal-close');
  const backdrop = document.querySelector('.demo-modal-backdrop');

  if (!modal) return;

  const demos = {
    'petshop-huellitas': {
      title: 'PetShop Huellitas',
      url: 'demos/petshop-huellitas/index.html'
    },
    'barbershop-elegance': {
      title: 'Barbershop Elegance',
      url: 'demos/barbershop-elegance/index.html'
    },
    'clinica-dental': {
      title: 'DentalCare Centro Odontológico',
      url: 'demos/clinica-dental/index.html'
    },
    'servicios-hogar': {
      title: 'VelioHome Servicios del Hogar',
      url: 'demos/servicios-hogar/index.html'
    }
  };

  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Prevent opening the modal preview if the click was on the "Ver Demo" button
      if (e.target.closest('.portfolio-btn')) {
        return;
      }

      const demoKey = card.getAttribute('data-demo');
      const demo = demos[demoKey];

      if (demo) {
        modalTitle.textContent = demo.title;
        iframe.src = demo.url;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      iframe.src = '';
    }, 300);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}