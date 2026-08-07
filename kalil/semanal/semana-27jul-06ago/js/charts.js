// ===== CHARTS — ALEXANDRE KALIL | PRÉ-CAMPANHA 2026 (27/07 a 06/08) =====
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyle = 'circle';
Chart.defaults.plugins.legend.labels.padding = 20;
Chart.defaults.animation.duration = 1300;
Chart.defaults.animation.easing = 'easeOutQuart';

const C = { accent: '#FF6A00', g900: '#171717', g700: '#3D3D3D', g500: '#6E6E6E', g300: '#B0B0B0', g100: '#E3E3E3', purple: '#7B2FBE' };
const TIP = {
  backgroundColor: '#0D0D0D', titleColor: '#FFFFFF', bodyColor: '#D0D0D0',
  borderColor: 'rgba(255,106,0,0.4)', borderWidth: 1, cornerRadius: 10, padding: 14,
  titleFont: { weight: '700', size: 13 }, bodyFont: { size: 12 }, displayColors: false,
};

const dataLabelsPlugin = {
  id: 'dataLabels',
  afterDatasetsDraw(chart) {
    if (!chart.config.options.plugins?.dataLabels?.enabled) return;
    const { ctx } = chart;
    const isH = chart.config.options.indexAxis === 'y';
    chart.data.datasets.forEach((ds, di) => {
      const meta = chart.getDatasetMeta(di);
      if (meta.hidden) return;
      meta.data.forEach((el, idx) => {
        const val = ds.data[idx];
        if (!val) return;
        const label = val >= 1000 ? Math.round(val / 1000) + 'K' : val.toLocaleString('pt-BR');
        ctx.save();
        ctx.font = '700 11px Inter, sans-serif';
        ctx.fillStyle = '#444';
        if (isH) { ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(label, el.x + 7, el.y); }
        else { ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; ctx.fillText(label, el.x, el.y - 5); }
        ctx.restore();
      });
    });
  }
};
Chart.register(dataLabelsPlugin);

// ── Doughnut — Investimento por Segmentação ──
const ctxInv = document.getElementById('chartInvest');
if (ctxInv) {
  new Chart(ctxInv, {
    type: 'doughnut',
    data: {
      labels: ['Estado de Minas Gerais', 'RMBH', 'Triângulo Mineiro', 'Público Cleitinho'],
      datasets: [{ data: [858.30, 499.44, 299.56, 58.60], backgroundColor: [C.accent, C.purple, C.g700, C.g300], borderColor: '#fff', borderWidth: 4, hoverOffset: 8 }]
    },
    options: {
      maintainAspectRatio: false, cutout: '62%',
      plugins: {
        legend: { position: 'bottom' },
        tooltip: { ...TIP, callbacks: { label: c => ' R$ ' + c.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + ' (' + (c.raw / 1715.90 * 100).toFixed(1).replace('.', ',') + '%)' } }
      }
    }
  });
}

// ── Barras horizontais — Impressões por Segmentação ──
const ctxPracas = document.getElementById('chartPracas');
if (ctxPracas) {
  new Chart(ctxPracas, {
    type: 'bar',
    data: {
      labels: ['Estado de Minas Gerais', 'Triângulo Mineiro', 'RMBH', 'Público Cleitinho'],
      datasets: [{ data: [178706, 117478, 95993, 12673], backgroundColor: [C.accent, C.g700, C.purple, C.g300], borderRadius: 6, barThickness: 34 }]
    },
    options: {
      indexAxis: 'y', maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { label: c => ' ' + c.raw.toLocaleString('pt-BR') + ' impressões' } }, dataLabels: { enabled: true } },
      scales: { x: { grid: { color: 'rgba(0,0,0,.06)' }, ticks: { callback: v => v / 1000 + 'K' } }, y: { grid: { display: false } } }
    }
  });
}

// ── Barras — Impressões por Anúncio (criativos) ──
const ctxAnuncios = document.getElementById('chartAnuncios');
if (ctxAnuncios) {
  new Chart(ctxAnuncios, {
    type: 'bar',
    data: {
      labels: ['Eu não faço promessa', 'Kalil Faz · carrossel', 'Aftermovie Convenção', 'VT Mulheres', 'Eu não faço promessa V2'],
      datasets: [{ data: [122194, 117478, 95993, 56512, 12563], backgroundColor: C.accent, borderRadius: 6, barThickness: 30 }]
    },
    options: {
      indexAxis: 'y', maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { label: c => ' ' + c.raw.toLocaleString('pt-BR') + ' impressões' } }, dataLabels: { enabled: true } },
      scales: { x: { grid: { color: 'rgba(0,0,0,.06)' }, ticks: { callback: v => v / 1000 + 'K' } }, y: { grid: { display: false } } }
    }
  });
}

// ── Barras verticais — Impressões por Faixa Etária ──
const ctxIdade = document.getElementById('chartIdade');
if (ctxIdade) {
  new Chart(ctxIdade, {
    type: 'bar',
    data: {
      labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
      datasets: [{ data: [4.7, 12.1, 15.3, 26.9, 37.4, 3.5], backgroundColor: C.accent, borderRadius: 6, barThickness: 36 }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { label: c => ' ' + c.raw.toString().replace('.', ',') + '% das impressões' } } },
      scales: { y: { grid: { color: 'rgba(0,0,0,.06)' }, ticks: { callback: v => v + '%' } }, x: { grid: { display: false } } }
    }
  });
}

// ── Doughnut — Distribuição por Gênero (entrega real) ──
const ctxGenero = document.getElementById('chartGenero');
if (ctxGenero) {
  new Chart(ctxGenero, {
    type: 'doughnut',
    data: {
      labels: ['Masculino', 'Feminino', 'Não informado'],
      datasets: [{ data: [68.7, 31.2, 0.1], backgroundColor: [C.g900, C.accent, C.g300], borderColor: '#fff', borderWidth: 4, hoverOffset: 8 }]
    },
    options: {
      maintainAspectRatio: false, cutout: '62%',
      plugins: { legend: { position: 'bottom' }, tooltip: { ...TIP, callbacks: { label: c => ' ' + c.raw.toString().replace('.', ',') + '% das impressões' } } }
    }
  });
}

// ── Doughnut — Impressões por Dispositivo ──
const ctxDisp = document.getElementById('chartDispositivo');
if (ctxDisp) {
  new Chart(ctxDisp, {
    type: 'doughnut',
    data: {
      labels: ['App mobile', 'Navegador mobile', 'Desktop'],
      datasets: [{ data: [99.8, 0.2, 0], backgroundColor: [C.accent, C.g500, C.g300], borderColor: '#fff', borderWidth: 4, hoverOffset: 8 }]
    },
    options: {
      maintainAspectRatio: false, cutout: '62%',
      plugins: { legend: { position: 'bottom' }, tooltip: { ...TIP, callbacks: { label: c => ' ' + c.raw.toString().replace('.', ',') + '% das impressões' } } }
    }
  });
}

// ── Barras horizontais — Impressões por Posição ──
const ctxPos = document.getElementById('chartPosicao');
if (ctxPos) {
  new Chart(ctxPos, {
    type: 'bar',
    data: {
      labels: ['Feed (Facebook + Instagram)', 'Reels do Instagram', 'Stories do Facebook', 'Stories do Instagram'],
      datasets: [{ data: [317443, 46443, 24399, 16524], backgroundColor: C.purple, borderRadius: 6, barThickness: 30 }]
    },
    options: {
      indexAxis: 'y', maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...TIP, callbacks: { label: c => ' ' + c.raw.toLocaleString('pt-BR') + ' impressões' } }, dataLabels: { enabled: true } },
      scales: { x: { grid: { color: 'rgba(0,0,0,.06)' }, ticks: { callback: v => v / 1000 + 'K' } }, y: { grid: { display: false } } }
    }
  });
}
