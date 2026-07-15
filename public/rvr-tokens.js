/**
 * RVR_TOKENS — Token Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 01 (base) + Etapa 03 (tipografia) + RVRDESIGN-012 (paleta revisada)
 * Homologado com Registro RVRDESIGN-001 (spacing/radius/shadow/transition/
 * breakpoint pendentes de validação visual) e RVRDESIGN-009 (escala
 * tipográfica pendente de validação visual). RVRDESIGN-002 (accent Verde
 * Petróleo) RESOLVIDO — #004D4D é o valor oficial.
 * RVRDESIGN-012 (09/07/2026, revisado): electricGold, titaniumCyan e
 * amethystNight tiveram o `base`/`glow` atualizados. Copper Charge
 * mantido no valor original (#D76B00) — a divergência de nomenclatura
 * foi resolvida como uma 6ª cor nova: `vermelho` (#580305), e não como
 * substituição do Copper Charge. Premium Accent System passa de 5 para
 * 6 temas.
 * Ver RVRDESIGN-REGISTRO-HOMOLOGACAO.md.
 *
 * Fonte única da verdade para cores, tipografia, espaçamento,
 * bordas, sombras, transições e breakpoints.
 *
 * REGRA: nenhum componente (vanilla ou React) declara cor,
 * fonte ou espaçamento fora deste arquivo. Consumo via
 * window.RVR_TOKENS (mesmo padrão de acesso dos demais engines).
 *
 * Camada exclusivamente visual — não emite/consome RVR_EVENTS,
 * não possui dependência de Orchestrator, Supabase ou schemas.
 *
 * Path sugerido no repo: /platform/rvrdesign/tokens/rvr-tokens.js
 */
(function () {
  'use strict';

  var RVR_TOKENS = Object.freeze({
    version: '1.3.0',

    // ---- Identidade base (Dark Premium) — fixa, nunca alterada por tema ----
    color: Object.freeze({
      base: Object.freeze({
        bgPrimary: '#000000',
        bgSecondary: '#0D0D0D',
        bgTertiary: '#1A1A1A',
        textPrimary: '#FFFFFF',
        textSecondary: '#A7A7A7',
        border: 'rgba(255,255,255,0.08)'
      }),

      // ---- Premium Accent System — 6 temas (RVRDESIGN-012: Vermelho adicionado 09/07/2026) ----
      accent: Object.freeze({
        verdePetroleo: Object.freeze({ base: '#004D4D', glow: 'rgba(0,77,77,.35)' }),
        electricGold: Object.freeze({ base: '#7A7539', glow: 'rgba(122,117,57,.35)' }),
        titaniumCyan: Object.freeze({ base: '#065E9E', glow: 'rgba(6,94,158,.35)' }),
        copperCharge: Object.freeze({ base: '#D76B00', glow: 'rgba(215,107,0,.35)' }),
        amethystNight: Object.freeze({ base: '#1F083C', glow: 'rgba(31,8,60,.35)' }),
        vermelho: Object.freeze({ base: '#580305', glow: 'rgba(88,3,5,.35)' })
      })
    }),

    // ---- Tipografia oficial ----
    typography: Object.freeze({
      fontFamily: Object.freeze({
        display: "'Tenor Sans', serif",
        interface: "'Inter', sans-serif",
        data: "'DM Mono', monospace"
      }),

      // ---- PROPOSTA (RVRDESIGN-009) — escala não especificada na diretriz original ----
      fontSize: Object.freeze({
        display: '40px',
        h1: '32px',
        h2: '24px',
        h3: '20px',
        h4: '18px',
        bodyLg: '16px',
        body: '14px',
        bodySm: '12px',
        caption: '11px',
        data: '14px',
        dataLg: '18px'
      }),

      lineHeight: Object.freeze({
        display: '48px',
        h1: '40px',
        h2: '32px',
        h3: '28px',
        h4: '26px',
        bodyLg: '24px',
        body: '20px',
        bodySm: '18px',
        caption: '16px',
        data: '20px',
        dataLg: '24px'
      }),

      fontWeight: Object.freeze({
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      })
    }),

    // ---- PROPOSTA — valores não especificados na diretriz, aguardando homologação ----
    spacing: Object.freeze({
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px',
      xxxl: '64px'
    }),

    radius: Object.freeze({
      sm: '4px',
      md: '8px',
      lg: '16px',
      full: '9999px'
    }),

    shadow: Object.freeze({
      sm: '0 1px 2px rgba(0,0,0,0.4)',
      md: '0 4px 12px rgba(0,0,0,0.5)',
      lg: '0 12px 32px rgba(0,0,0,0.6)'
    }),

    transition: Object.freeze({
      fast: '120ms',
      base: '200ms',
      slow: '320ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }),

    breakpoint: Object.freeze({
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    })
  });

  if (typeof window !== 'undefined') {
    if (window.RVR_TOKENS) {
      console.warn('[RVR_TOKENS] Já inicializado. Ignorando redeclaração.');
    } else {
      window.RVR_TOKENS = RVR_TOKENS;
    }
  }
})();
