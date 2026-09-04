// ===== ONE-PAGE · GRÁFICOS (semana 27/08 a 03/09) =====
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.fade-in').forEach(function (el) { el.classList.add('visible'); });

  document.querySelectorAll('.count-up').forEach(function (el) {
    var t = parseInt(el.getAttribute('data-target'), 10);
    var f = el.getAttribute('data-format');
    if (f === 'compact') {
      el.textContent = t >= 1000000 ? (t / 1000000).toFixed(2).replace('.', ',') + ' mi'
                                    : (t / 1000).toFixed(1).replace('.', ',') + ' mil';
    } else { el.textContent = t.toLocaleString('pt-BR'); }
  });

  var nt = document.getElementById('navToggle'), nl = document.getElementById('navLinks');
  if (nt && nl) nt.addEventListener('click', function () { nl.classList.toggle('open'); });

  if (typeof Chart === 'undefined') return;
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.color = '#8C8C8C';
  var TIP = { backgroundColor: '#171717', padding: 12, titleFont: { size: 12, weight: '700' }, bodyFont: { size: 12 } };

  // ── Novos seguidores por dia (Meta Business Insights) ──
  var ctxSeg = document.getElementById('chartSeguidoresOP');
  if (ctxSeg) {
    var g = ctxSeg.getContext('2d').createLinearGradient(0, 0, 0, 300);
    g.addColorStop(0, 'rgba(255,106,0,0.22)'); g.addColorStop(1, 'rgba(255,106,0,0)');
    new Chart(ctxSeg, {
      type: 'line',
      data: { labels: ['27 ago', '28 ago', '29 ago', '30 ago', '31 ago', '1 set', '2 set'],
        datasets: [{ data: [153, 275, 328, 418, 379, 371, 323],
          borderColor: '#3D3D3D', backgroundColor: g, borderWidth: 2, fill: true, tension: 0.4,
          pointBackgroundColor: '#3D3D3D', pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6 }] },
      options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: Object.assign({}, TIP, { callbacks: {
          title: function (c) { return c[0].label; },
          label: function (c) { return '  ' + c.parsed.y.toLocaleString('pt-BR') + ' novos seguidores'; } } }) },
        scales: { x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 11, weight: '600' }, color: '#888', maxRotation: 0 } },
          y: { grid: { color: 'rgba(0,0,0,0.05)', drawTicks: false }, border: { display: false }, min: 0, max: 500,
               ticks: { font: { size: 11 }, color: '#AAA', padding: 6, stepSize: 100 } } } }
    });
  }

  // ── Investimento por objetivo ──
  var el = document.getElementById('chartInvestOP');
  if (el) {
    new Chart(el, {
      type: 'doughnut',
      data: { labels: ['Visitas ao Perfil', 'Engajamento', 'Visualizações', 'Clusters'],
        datasets: [{ data: [22720.26, 17617.73, 15038.43, 129.74],
          backgroundColor: ['#FF6A00', '#3D3D3D', '#6E6E6E', '#B0B0B0'],
          borderColor: '#FFFFFF', borderWidth: 3, hoverOffset: 8 }] },
      options: { responsive: true, maintainAspectRatio: false, cutout: '62%',
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 12, weight: '600' }, color: '#525252', usePointStyle: true, pointStyle: 'circle' } },
          tooltip: Object.assign({}, TIP, { callbacks: { label: function (c) {
            var t = c.dataset.data.reduce(function (a, b) { return a + b; }, 0);
            return '  R$ ' + c.parsed.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' · ' + (c.parsed / t * 100).toFixed(1).replace('.', ',') + '%'; } } }) } }
    });
  }

  // ── Investimento por região ──
  var geo = document.getElementById('chartGeoOP');
  if (geo) {
    new Chart(geo, {
      type: 'bar',
      data: { labels: ['Grande BH', 'Norte, Jequitinhonha\ne Mucuri', 'Vale do Rio Doce\ne Zona da Mata', 'Sul de Minas', 'Uberlândia\ne Uberaba', 'Demais cidades\ndo Triângulo', 'Incidência\ncriminal', 'Segurança\nGrande BH'],
        datasets: [
          { label: '27 a 30/08', data: [4039.41, 3489.44, 3121.72, 3045.34, 3086.91, 2175.00, 575.49, 634.93], backgroundColor: '#B0B0B0', borderRadius: 4, maxBarThickness: 34 },
          { label: '31/08 a 03/09', data: [6790.40, 6347.60, 5896.15, 5445.07, 4301.30, 4414.31, 1194.46, 819.44], backgroundColor: '#FF6A00', borderRadius: 4, maxBarThickness: 34 }] },
      options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 12, weight: '600' }, color: '#525252', usePointStyle: true, pointStyle: 'circle' } },
          tooltip: Object.assign({}, TIP, { callbacks: { label: function (c) { return '  R$ ' + c.parsed.y.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); } } }) },
        scales: { x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 10.5, weight: '600' }, color: '#888', maxRotation: 0 } },
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)', drawTicks: false }, border: { display: false },
               ticks: { font: { size: 11 }, color: '#AAA', padding: 6, callback: function (v) { return 'R$ ' + (v / 1000) + ' mil'; } } } } }
    });
  }

  // ── Faixa etária ──
  var id = document.getElementById('chartIdadeOP');
  if (id) {
    new Chart(id, {
      type: 'bar',
      data: { labels: ['18 a 24', '25 a 34', '35 a 44', '45 a 54', '55 a 64', '65+'],
        datasets: [
          { label: 'Exibições', data: [339058, 847888, 1686160, 1519056, 1476862, 1287677], backgroundColor: '#B0B0B0', borderRadius: 4, maxBarThickness: 44, yAxisID: 'y' },
          { label: 'Interações', type: 'line', data: [2198, 7361, 10378, 13118, 14074, 11320], borderColor: '#FF6A00', backgroundColor: '#FF6A00', borderWidth: 2.5, tension: 0.35, pointRadius: 4, pointBackgroundColor: '#FF6A00', pointBorderColor: '#fff', pointBorderWidth: 2, yAxisID: 'y1' }] },
      options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 12, weight: '600' }, color: '#525252', usePointStyle: true, pointStyle: 'circle' } },
          tooltip: Object.assign({}, TIP, { callbacks: { label: function (c) { return '  ' + c.dataset.label + ': ' + c.parsed.y.toLocaleString('pt-BR'); } } }) },
        scales: { x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 11, weight: '600' }, color: '#888' } },
          y: { beginAtZero: true, position: 'left', grid: { color: 'rgba(0,0,0,0.05)', drawTicks: false }, border: { display: false }, ticks: { font: { size: 11 }, color: '#AAA', padding: 6, callback: function (v) { return (v / 1000000).toFixed(1).replace('.', ',') + ' mi'; } } },
          y1: { beginAtZero: true, position: 'right', grid: { display: false }, border: { display: false }, ticks: { font: { size: 11 }, color: '#AAA', padding: 6, callback: function (v) { return (v / 1000) + ' mil'; } } } } }
    });
  }
});
