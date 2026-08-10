// ===== ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function () {
  // Fade-in on scroll
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(function (el) { io.observe(el); });

  // Count-up
  function fmt(v, format, decimals) {
    if (format === 'compact') {
      if (v >= 1000000) return (v / 1000000).toFixed(v >= 10000000 ? 1 : 2).replace('.', ',') + ' mi';
      if (v >= 1000) return Math.round(v / 1000) + ' mil';
      return Math.round(v).toLocaleString('pt-BR');
    }
    return Number(v).toLocaleString('pt-BR', { minimumFractionDigits: decimals || 0, maximumFractionDigits: decimals || 0 });
  }
  const cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const format = el.dataset.format || 'standard';
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const dur = 1500; const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased, format, decimals);
        if (p < 1) requestAnimationFrame(tick); else el.textContent = fmt(target, format, decimals);
      }
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count-up').forEach(function (el) { cio.observe(el); });

  // Barras de participação
  const bio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      const el = e.target;
      setTimeout(function () { el.style.width = el.dataset.width || '0%'; }, 150);
      bio.unobserve(el);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.cb-fill').forEach(function (el) { bio.observe(el); });

  // Nav toggle
  const t = document.getElementById('navToggle');
  if (t) t.addEventListener('click', function () { document.getElementById('navLinks').classList.toggle('active'); });
});
