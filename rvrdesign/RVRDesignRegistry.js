/**
 * RVRDesignRegistry — RVRDESIGN FOUNDATION
 * Etapa 09 (RVRDESIGN-023)
 *
 * Registro oficial de todos os componentes da Foundation. Cada
 * entrada é escrita explicitamente — nada é inferido automaticamente
 * (regra da diretriz de abertura desta etapa).
 *
 * Convenção de `status` (mesma usada em RVRWorkspaceRegistry.js):
 * - 'active'     → homologado por registro formal RVRDESIGN
 * - 'foundation' → arquitetura construída, sem dados/renderização
 *                  real ainda (ex.: Chart System)
 * - 'planned'    → previsto na diretriz, ainda não construído
 * - 'deprecated' → substituído/descontinuado
 *
 * Itens entregues nesta própria etapa (RVRPersistenceLayer,
 * RVRDesignRegistry, RVRChart) estão como 'foundation' — ainda não
 * passaram por registro de homologação formal como os anteriores.
 *
 * Path sugerido: /rvrdesign/RVRDesignRegistry.js
 */

export const RVR_DESIGN_REGISTRY = Object.freeze([
  // ---- Tokens (Etapa 01) ----
  Object.freeze({
    id: 'token-engine', nome: 'RVR_TOKENS', categoria: 'Tokens', versao: '1.3.0', status: 'active',
    dependencias: Object.freeze([]), tokens: Object.freeze(['(é a fonte — não consome tokens)']),
    etapa: '01 — Token Engine'
  }),

  // ---- Theme (Etapa 02) ----
  Object.freeze({
    id: 'theme-engine', nome: 'RVR_THEME_ENGINE', categoria: 'Theme', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine']), tokens: Object.freeze(['color.accent (6 temas)']),
    etapa: '02 — Theme Engine'
  }),

  // ---- Typography (Etapa 03) ----
  Object.freeze({
    id: 'typography-system', nome: 'rvr-typography.css', categoria: 'Typography', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine']), tokens: Object.freeze(['typography.fontFamily', 'typography.fontSize', 'typography.lineHeight', 'typography.fontWeight']),
    etapa: '03 — Typography System'
  }),

  // ---- Motion (build: Etapa 03 / roadmap: posição 05) ----
  Object.freeze({
    id: 'motion-system', nome: 'rvr-motion.css', categoria: 'Motion', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine']), tokens: Object.freeze(['transition.*', 'easing']),
    etapa: '05 — Motion System'
  }),

  // ---- Components (Etapa 04 — Component Library Base) ----
  Object.freeze({
    id: 'rvr-button', nome: 'RVRButton', categoria: 'Components', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine', 'theme-engine', 'motion-system', 'typography-system']),
    tokens: Object.freeze(['spacing', 'radius', 'color.accent', 'typography']), etapa: '04 — Component Library Base'
  }),
  Object.freeze({
    id: 'rvr-card', nome: 'RVRCard', categoria: 'Components', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine', 'theme-engine', 'motion-system']),
    tokens: Object.freeze(['spacing', 'radius', 'shadow', 'color.base']),
    etapa: '04 — Component Library Base (variante --glass em RVRDESIGN-013)'
  }),
  Object.freeze({
    id: 'rvr-badge', nome: 'RVRBadge', categoria: 'Components', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine', 'typography-system']),
    tokens: Object.freeze(['radius', 'typography.caption', 'color.accent']), etapa: '04 — Component Library Base'
  }),
  Object.freeze({
    id: 'rvr-input', nome: 'RVRInput', categoria: 'Components', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine', 'theme-engine', 'motion-system', 'typography-system']),
    tokens: Object.freeze(['spacing', 'radius', 'color.accent', 'typography']), etapa: '04 — Component Library Base'
  }),
  Object.freeze({
    id: 'rvr-section', nome: 'RVRSection', categoria: 'Components', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine', 'typography-system']),
    tokens: Object.freeze(['spacing', 'typography.h3']), etapa: '04 — Component Library Base'
  }),
  Object.freeze({
    id: 'rvr-grid', nome: 'RVRGrid', categoria: 'Components', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['token-engine']), tokens: Object.freeze(['spacing']),
    etapa: '04 — Component Library Base'
  }),
  Object.freeze({
    id: 'component-library-extended', nome: 'RVRMetricCard / RVRModal / RVRDrawer / RVRTabs / RVRHeader / RVRSidebar / RVRTable / RVRLegalNotice',
    categoria: 'Components', versao: '0', status: 'planned',
    dependencias: Object.freeze(['token-engine', 'theme-engine', 'motion-system', 'typography-system']),
    tokens: Object.freeze([]), etapa: 'não aberta (RVRDESIGN-010 deferiu explicitamente)'
  }),

  // ---- Charts (Etapa 06) ----
  Object.freeze({
    id: 'rvr-chart-engine', nome: 'RVR_CHART_ENGINE', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze(['token-engine']), tokens: Object.freeze(['color.accent (ciclagem de série)']),
    etapa: '06 — Chart System'
  }),
  Object.freeze({
    id: 'rvr-chart-container', nome: 'RVRChartContainer', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze(['token-engine']), tokens: Object.freeze(['spacing', 'radius', 'shadow']), etapa: '06 — Chart System'
  }),
  Object.freeze({
    id: 'rvr-chart-title', nome: 'RVRChartTitle', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze(['typography-system']), tokens: Object.freeze(['typography.h4', 'typography.bodySm']), etapa: '06 — Chart System'
  }),
  Object.freeze({
    id: 'rvr-legend', nome: 'RVRLegend', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze(['typography-system']), tokens: Object.freeze(['spacing', 'typography.caption']), etapa: '06 — Chart System'
  }),
  Object.freeze({
    id: 'rvr-tooltip', nome: 'RVRTooltip', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze(['token-engine', 'motion-system']), tokens: Object.freeze(['radius', 'shadow', 'transition']), etapa: '06 — Chart System'
  }),
  Object.freeze({
    id: 'rvr-axis', nome: 'RVRAxis', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze(['typography-system']), tokens: Object.freeze(['typography.caption']), etapa: '06 — Chart System'
  }),
  Object.freeze({
    id: 'rvr-gridlines', nome: 'RVRGridLines', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze(['token-engine']), tokens: Object.freeze(['color.border']), etapa: '06 — Chart System'
  }),
  Object.freeze({
    id: 'rvr-series', nome: 'RVRSeries', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze([]), tokens: Object.freeze([]), etapa: '06 — Chart System'
  }),
  Object.freeze({
    id: 'rvr-chart', nome: 'RVRChart', categoria: 'Charts', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze(['rvr-chart-container', 'rvr-chart-title', 'rvr-legend', 'rvr-gridlines', 'theme-engine', 'motion-system', 'typography-system']),
    tokens: Object.freeze(['(via componentes que compõe)']), etapa: '09 — RVRChart Foundation (RVRDESIGN-024, entregue nesta etapa)'
  }),

  // ---- Workspace (Etapa 07) ----
  Object.freeze({
    id: 'rvr-workspace', nome: 'RVRWorkspace', categoria: 'Workspace', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['rvr-workspace-grid', 'rvr-workspace-presets']), tokens: Object.freeze(['spacing']), etapa: '07 — Workspace Engine'
  }),
  Object.freeze({
    id: 'rvr-workspace-grid', nome: 'RVRWorkspaceGrid', categoria: 'Workspace', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['rvr-grid']), tokens: Object.freeze(['(reaproveita .rvr-grid)']), etapa: '07 — Workspace Engine'
  }),
  Object.freeze({
    id: 'rvr-workspace-block', nome: 'RVRWorkspaceBlock', categoria: 'Workspace', versao: '1.1', status: 'active',
    dependencias: Object.freeze(['rvr-card']), tokens: Object.freeze(['color.accent (--selected, RVRDESIGN-021)']), etapa: '07 — Workspace Engine (aditivo `selected` na Etapa 08)'
  }),
  Object.freeze({
    id: 'rvr-workspace-slot', nome: 'RVRWorkspaceSlot', categoria: 'Workspace', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['typography-system']), tokens: Object.freeze(['typography.caption']), etapa: '07 — Workspace Engine'
  }),
  Object.freeze({
    id: 'rvr-workspace-registry', nome: 'RVRWorkspaceRegistry', categoria: 'Workspace', versao: '1.0', status: 'active',
    dependencias: Object.freeze([]), tokens: Object.freeze([]), etapa: '07 — Workspace Engine'
  }),
  Object.freeze({
    id: 'rvr-workspace-presets', nome: 'RVRWorkspacePresets', categoria: 'Workspace', versao: '1.0', status: 'active',
    dependencias: Object.freeze([]), tokens: Object.freeze([]), etapa: '07 — Workspace Engine'
  }),

  // ---- IKEA (Etapa 08 + 09) ----
  Object.freeze({
    id: 'rvr-workspace-contracts', nome: 'RVRWorkspaceContracts', categoria: 'IKEA', versao: '1.1', status: 'active',
    dependencias: Object.freeze([]), tokens: Object.freeze([]), etapa: '07/08 — contratos JSDoc'
  }),
  Object.freeze({
    id: 'rvr-grid-engine', nome: 'RVRGridEngine', categoria: 'IKEA', versao: '1.0', status: 'active',
    dependencias: Object.freeze([]), tokens: Object.freeze([]), etapa: '08 — IKEA Foundation'
  }),
  Object.freeze({
    id: 'rvr-snap-system', nome: 'RVRSnapSystem', categoria: 'IKEA', versao: '1.0', status: 'active',
    dependencias: Object.freeze([]), tokens: Object.freeze([]), etapa: '08 — IKEA Foundation'
  }),
  Object.freeze({
    id: 'rvr-layout-engine', nome: 'RVRLayoutEngine', categoria: 'IKEA', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['rvr-workspace-presets']), tokens: Object.freeze([]), etapa: '08 — IKEA Foundation'
  }),
  Object.freeze({
    id: 'rvr-component-slots', nome: 'RVRComponentSlots', categoria: 'IKEA', versao: '1.0', status: 'active',
    dependencias: Object.freeze(['rvr-workspace-registry']), tokens: Object.freeze([]), etapa: '08 — IKEA Foundation'
  }),
  Object.freeze({
    id: 'rvr-selection-layer', nome: 'useRVRSelectionLayer', categoria: 'IKEA', versao: '1.0', status: 'active',
    dependencias: Object.freeze([]), tokens: Object.freeze([]), etapa: '08 — IKEA Foundation'
  }),
  Object.freeze({
    id: 'rvr-persistence-layer', nome: 'RVRPersistenceLayer', categoria: 'IKEA', versao: '1.0', status: 'foundation',
    dependencias: Object.freeze([]), tokens: Object.freeze([]), etapa: '09 — Persistence Layer (RVRDESIGN-022, entregue nesta etapa)'
  })
]);

export function getByCategory(categoria) {
  return RVR_DESIGN_REGISTRY.filter((entry) => entry.categoria === categoria);
}

export function getById(id) {
  return RVR_DESIGN_REGISTRY.find((entry) => entry.id === id) ?? null;
}

export function listAll() {
  return RVR_DESIGN_REGISTRY;
  }
      
