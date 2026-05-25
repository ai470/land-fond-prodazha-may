/* =========================================
   main.js — Interactivity for Landing
   ========================================= */

(function () {
  'use strict';

  // ── Header scroll state ──────────────────────────
  const header = document.getElementById('site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Burger / Mobile nav ──────────────────────────
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  burgerBtn.addEventListener('click', () => {
    const isOpen = burgerBtn.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on any link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('open');
      mobileNav.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // ── Scroll Reveal ────────────────────────────────
  const revealItems = document.querySelectorAll('.reveal-item');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealItems.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealItems.forEach(el => el.classList.add('is-visible'));
  }

  // ── FAQ — single open at a time ─────────────────
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  // ── Modules accordion — single open at a time ───
  const moduleItems = document.querySelectorAll('.module-item');
  moduleItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        moduleItems.forEach(other => {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  // ── Smooth scroll for anchor links ──────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerH = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Ticker pause on hover ────────────────────────
  const tickerWrap = document.querySelector('.ticker-wrap');
  const tickerTrack = document.querySelector('.ticker-track');
  if (tickerWrap && tickerTrack) {
    tickerWrap.addEventListener('mouseenter', () => {
      tickerTrack.style.animationPlayState = 'paused';
    });
    tickerWrap.addEventListener('mouseleave', () => {
      tickerTrack.style.animationPlayState = 'running';
    });
  }

  // ── Countdown / urgency timer ────────────────────
  // Set target date to June 8
  const urgencyBanner = document.querySelector('.urgency-banner strong');
  if (urgencyBanner) {
    const target = new Date('2026-06-08T09:00:00+03:00').getTime();

    function updateCountdown() {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      let text = 'Старт потока — 8 июня';
      if (days > 0) {
        text += ` · через ${days} дн. ${hours} ч. ${minutes} мин.`;
      }
      urgencyBanner.textContent = text;
    }

    updateCountdown();
    setInterval(updateCountdown, 60000);
  }

  // ── Tool items stagger on viewport entry ─────────
  const toolItems = document.querySelectorAll('.tool-item');
  if ('IntersectionObserver' in window) {
    const toolObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.04}s`;
            entry.target.classList.add('is-visible');
            toolObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    toolItems.forEach(el => toolObs.observe(el));
  }

})();
