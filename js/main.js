/**
 * Psychologist Website - Main JavaScript
 * Adelina Vildanova
 */

(function() {
  'use strict';

  // =============================================
  // 1. Navbar Scroll Behavior
  // =============================================
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    if (!navbar) return;
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    // Initial check
    handleScroll();
    
    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // =============================================
  // 2. Mobile Menu Toggle
  // =============================================
  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!toggle || !menu) return;
    
    const closeMenu = () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    
    const openMenu = () => {
      menu.classList.add('open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    
    toggle.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
      }
    });
    
    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && menu.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // =============================================
  // 3. Smooth Scroll for Navigation Links
  // =============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const navbar = document.getElementById('navbar');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // =============================================
  // 4. Scroll Reveal Animations
  // =============================================
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (!reveals.length) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    reveals.forEach(el => observer.observe(el));
  }

  // =============================================
  // 5. Statistics Counter Animation
  // =============================================
  function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    if (!statNumbers.length) return;
    
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        
        if (current < target) {
          element.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target;
        }
      };
      
      updateCounter();
    };
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    statNumbers.forEach(el => observer.observe(el));
  }

  // =============================================
  // 6. Active Navigation Link Highlight
  // =============================================
  function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!sections.length || !navLinks.length) return;
    
    const highlightNav = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };
    
    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          highlightNav();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // =============================================
  // 7. Form Handling
  // =============================================
  function initFormHandling() {
    const form = document.querySelector('.cta-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const message = formData.get('message');
      
      // Basic validation
      if (!name || !phone) {
        showNotification('Пожалуйста, заполните все обязательные поля.', 'error');
        return;
      }
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Отправка...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        showNotification('Спасибо! Я свяжусь с вами в ближайшее время.', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // =============================================
  // 8. Notification System
  // =============================================
  function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <button class="notification-close" aria-label="Закрыть">&times;</button>
    `;
    
    // Add styles dynamically
    notification.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      max-width: 400px;
      padding: 16px 24px;
      background: ${type === 'success' ? '#10B981' : '#EF4444'};
      color: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.95rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes if not exists
    if (!document.querySelector('#notification-styles')) {
      const style = document.createElement('style');
      style.id = 'notification-styles';
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
        .notification-close {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          line-height: 1;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .notification-close:hover {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);
  }

  // =============================================
  // 9. Initialize Lucide Icons
  // =============================================
  function initIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // =============================================
  // 10. Parallax Effect for Orbs (Optional)
  // =============================================
  function initParallax() {
    const orbs = document.querySelectorAll('.orb');
    
    if (!orbs.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          orbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            orb.style.transform = `translateY(${scrollY * speed}px)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // =============================================
  // Initialize All Functions
  // =============================================
  function init() {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initStatsCounter();
    initActiveNavLink();
    initFormHandling();
    initIcons();
    // initParallax(); // Uncomment if you want parallax effect
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
