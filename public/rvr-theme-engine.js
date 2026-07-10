/**
 * RVR_THEME_ENGINE — Theme Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 02
 *
 * Mecanismo global de troca de tema (Premium Accent System).
 * Lê exclusivamente de window.RVR_TOKENS — nenhum valor duplicado.
 * Aplica o accent ativo via atributo [data-rvr-theme] no <html>,
 * consumido pelas variáveis CSS em rvr-tokens.css.
 *
 * NÃO faz: persistência (Pilar 11, etapa futura), não emite/consome
 * RVR_EVENTS, não depende de Orchestrator/Supabase/schemas.
 *
 * Requer: rvr-tokens.js carregado antes deste arquivo.
 *
 * Path sugerido no repo: /platform/rvrdesign/theme/rvr-theme-engine.js
 */
(function () {
  'use strict';

  if (typeof window === 'undefined' || !window.RVR_TOKENS) {
    console.error('[RVR_THEME_ENGINE] RVR_TOKENS não encontrado. Carregue rvr-tokens.js antes.');
    return;
  }

  // Mapa entre chave do token (camelCase) e valor do atributo data-rvr-theme (kebab-case)
  // RVRDESIGN-012 (09/07/2026): "vermelho" adicionado como 6ª cor
  var THEME_MAP = Object.freeze({
    'verde-petroleo': 'verdePetroleo',
    'electric-gold': 'electricGold',
    'titanium-cyan': 'titaniumCyan',
    'copper-charge': 'copperCharge',
    'amethyst-night': 'amethystNight',
    'vermelho': 'vermelho'
  });

  var DEFAULT_THEME = 'verde-petroleo';
  var currentTheme = DEFAULT_THEME;

  function isValidTheme(themeName) {
    return Object.prototype.hasOwnProperty.call(THEME_MAP, themeName);
  }

  function applyTheme(themeName) {
    document.documentElement.setAttribute('data-rvr-theme', themeName);
  }

  function setTheme(themeName) {
    if (!isValidTheme(themeName)) {
      console.warn('[RVR_THEME_ENGINE] Tema inválido: "' + themeName + '". Nenhuma alteração aplicada.');
      return false;
    }
    currentTheme = themeName;
    applyTheme(themeName);

    // Evento de DOM local (não é RVR_EVENTS) — permite que componentes
    // visuais reajam à troca sem tocar no barramento de negócio.
    document.dispatchEvent(new CustomEvent('rvrdesign:theme-changed', {
      detail: { theme: themeName }
    }));
    return true;
  }

  function getTheme() {
    return currentTheme;
  }

  function listThemes() {
    return Object.keys(THEME_MAP);
  }

  function init() {
    applyTheme(currentTheme);
  }

  var RVR_THEME_ENGINE = Object.freeze({
    setTheme: setTheme,
    getTheme: getTheme,
    listThemes: listThemes,
    init: init
  });

  if (window.RVR_THEME_ENGINE) {
    console.warn('[RVR_THEME_ENGINE] Já inicializado. Ignorando redeclaração.');
  } else {
    window.RVR_THEME_ENGINE = RVR_THEME_ENGINE;
    init();
  }
})();

