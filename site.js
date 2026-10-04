/* brianthammond.com — shared behaviour: mobile menu, scroll reveal, booking link, legal modals. */
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile menu
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    header.querySelectorAll('.mobile-menu a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ============================================================
     Booking link
     ------------------------------------------------------------
     ONE place to change every "Book 30 minutes" link (class js-book).
     Google Calendar appointment schedule, 30-minute call. Leave it
     empty and those links fall back to a pre-filled email.
     ============================================================ */
  var BOOKING_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2x2UOY1HiXgtCNpeRgT25Pmspo53ceUt-b5jGzdFpDHTwY3f0j7XrsHwrDXonbtAaCrQRoGB13?gv=true';
  var fallback = 'mailto:brian@ble.training'
    + '?subject=' + encodeURIComponent('30-minute owner-to-owner call');
  document.querySelectorAll('a.js-book').forEach(function (a) {
    a.setAttribute('href', BOOKING_URL || fallback);
    if (BOOKING_URL) { a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener noreferrer'); }
    a.addEventListener('click', function () {
      if (typeof gtag === 'function') gtag('event', 'book_call_click', { event_category: 'cta' });
    });
  });

  // "Start a Conversation" email links
  document.querySelectorAll('a.js-talk').forEach(function (a) {
    a.addEventListener('click', function () {
      if (typeof gtag === 'function') gtag('event', 'start_conversation_click', { event_category: 'cta' });
    });
  });

  // Close legal modals when clicking the backdrop
  document.querySelectorAll('.legal-modal').forEach(function (m) {
    m.addEventListener('click', function (e) {
      if (e.target === m) location.hash = 'close';
    });
  });
})();
