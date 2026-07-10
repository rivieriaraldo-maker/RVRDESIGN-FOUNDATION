/**
 * RVR_CHART_ENGINE — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 06 (aberta por RVRDESIGN-015)
 *
 * Infraestrutura visual pura. NÃO contém telemetria, analytics,
 * consultas, lógica de negócio, persistência ou eventos. NÃO decide
 * biblioteca/engine de gráfico — isso é decisão futura, posterior à
 * homologação estrutural (regra explícita da diretriz de abertura).
 *
 * Fornece apenas utilitários compartilhados para que nenhum
 * componente do Chart System hardcode cor ou reimplemente
 * redimensionamento responsivo:
 * - getSeriesColor(index) / getSeriesGlow(index): ciclam pelas 6 cores
 *   do Premium Accent System (RVR_TOKENS.color.accent)
 * - observeSize(el, callback): wrapper de ResizeObserver
 *
 * Requer: rvr-tokens.js carregado antes deste arquivo.
 * Path sugerido: /public/rvr-chart-engine.js
 */
(function () {
  'use strict';

  if (typeof window === 'undefined' || !window.RVR_TOKENS) {
    console.error('[RVR_CHART_ENGINE] RVR_TOKENS não encontrado. Carregue rvr-tokens.js antes.');
    return;
  }

  // Ordem estável de ciclagem — 6 cores do Premium Accent System (RVRDESIGN-012)
  var SERIES_ORDER = ['verdePetroleo', 'electricGold', 'titaniumCyan', 'copperCharge', 'amethystNight', 'vermelho'];

  function getSeriesColor(index) {
    var key = SERIES_ORDER[((index % SERIES_ORDER.length) + SERIES_ORDER.length) % SERIES_ORDER.length];
    var accent = window.RVR_TOKENS.color.accent[key];
    return accent ? accent.base : window.RVR_TOKENS.color.base.textSecondary;
  }

  function getSeriesGlow(index) {
    var key = SERIES_ORDER[((index % SERIES_ORDER.length) + SERIES_ORDER.length) % SERIES_ORDER.length];
    var accent = window.RVR_TOKENS.color.accent[key];
    return accent ? accent.glow : 'transparent';
  }

  function observeSize(el, callback) {
    if (!el || typeof ResizeObserver === 'undefined' || typeof callback !== 'function') {
      return function () {};
    }
    var ro = new ResizeObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var box = entries[i].contentRect;
        callback({ width: box.width, height: box.height });
      }
    });
    ro.observe(el);
    return function () { ro.disconnect(); };
  }

  var RVR_CHART_ENGINE = Object.freeze({
    getSeriesColor: getSeriesColor,
    getSeriesGlow: getSeriesGlow,
    observeSize: observeSize
  });

  if (window.RVR_CHART_ENGINE) {
    console.warn('[RVR_CHART_ENGINE] Já inicializado. Ignorando redeclaração.');
  } else {
    window.RVR_CHART_ENGINE = RVR_CHART_ENGINE;
  }
})();
