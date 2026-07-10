/**
 * RVRWorkspaceRegistry — Workspace Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 07 (RVRDESIGN-018)
 *
 * Registro dos componentes RVRDESIGN disponíveis para uso em
 * RVRWorkspaceSlot. Status reflete o estado real de cada etapa
 * homologada — nenhum valor inventado:
 * - 'active'     → componente completo e homologado (RVRDESIGN-010)
 * - 'foundation' → arquitetura homologada, sem implementação de dados
 *                  ainda (Chart System, RVRDESIGN-017)
 * - 'planned'    → oficial na diretriz, ainda não construído
 *                  (Component Library Extended, RVRDESIGN-010)
 *
 * Path sugerido: /rvrdesign/workspace/RVRWorkspaceRegistry.js
 */

export const RVR_WORKSPACE_REGISTRY = Object.freeze([
  Object.freeze({ id: 'rvr-button', type: 'component', version: '1.0', status: 'active' }),
  Object.freeze({ id: 'rvr-card', type: 'component', version: '1.0', status: 'active' }),
  Object.freeze({ id: 'rvr-badge', type: 'component', version: '1.0', status: 'active' }),
  Object.freeze({ id: 'rvr-input', type: 'component', version: '1.0', status: 'active' }),
  Object.freeze({ id: 'rvr-section', type: 'component', version: '1.0', status: 'active' }),
  Object.freeze({ id: 'rvr-grid', type: 'component', version: '1.0', status: 'active' }),
  Object.freeze({ id: 'rvr-chart', type: 'component', version: '1.0', status: 'foundation' }),
  Object.freeze({ id: 'rvr-metric-card', type: 'component', version: '0', status: 'planned' }),
  Object.freeze({ id: 'rvr-modal', type: 'component', version: '0', status: 'planned' }),
  Object.freeze({ id: 'rvr-drawer', type: 'component', version: '0', status: 'planned' }),
  Object.freeze({ id: 'rvr-tabs', type: 'component', version: '0', status: 'planned' }),
  Object.freeze({ id: 'rvr-header', type: 'component', version: '0', status: 'planned' }),
  Object.freeze({ id: 'rvr-sidebar', type: 'component', version: '0', status: 'planned' }),
  Object.freeze({ id: 'rvr-table', type: 'component', version: '0', status: 'planned' }),
  Object.freeze({ id: 'rvr-legal-notice', type: 'component', version: '0', status: 'planned' })
]);

export function getRegistryEntry(id) {
  return RVR_WORKSPACE_REGISTRY.find((entry) => entry.id === id) ?? null;
}

export function isRegistered(id) {
  return getRegistryEntry(id) !== null;
}
