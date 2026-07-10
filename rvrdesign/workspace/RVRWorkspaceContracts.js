/**
 * RVRWorkspaceContracts — Workspace Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 07 (RVRDESIGN-018, seção 11 — IKEA Foundation)
 *
 * Apenas contratos (formatos de dados via JSDoc typedef). Nenhuma
 * implementação de comportamento — drag and drop, movimentação livre
 * e editor visual avançado são explicitamente proibidos nesta etapa.
 * Servem para a Etapa 08 (IKEA Foundation) ter um formato acordado
 * para implementar contra, sem travar decisões de UI ainda.
 *
 * Path sugerido: /rvrdesign/workspace/RVRWorkspaceContracts.js
 */

/**
 * @typedef {Object} GridEngineContract
 * @property {number} columns
 * @property {number} gap
 */

/**
 * @typedef {Object} SnapSystemContract
 * @property {number} threshold — distância em px para ativar snap (futuro)
 * @property {boolean} enabled
 */

/**
 * @typedef {Object} LayoutEngineContract
 * @property {string} blockId
 * @property {number} span
 * @property {number} order
 */

/**
 * @typedef {Object} ComponentSlotsContract
 * @property {string} slotId
 * @property {string[]} accepts — ids do RVRWorkspaceRegistry
 */

/**
 * @typedef {Object} SelectionLayerContract
 * @property {string|null} selectedBlockId
 */

/**
 * @typedef {Object} PersistenceContract
 * @property {string} theme
 * @property {string} preset
 * @property {Object.<string, {span:number, order:number, visible:boolean}>} blocks
 */

// Stubs congelados — existem apenas para permitir import/referência
// antecipada. Nenhum contém lógica; implementação real é Etapa 08.
export const CONTRACT_STUBS = Object.freeze({
  gridEngine: Object.freeze({}),
  snapSystem: Object.freeze({}),
  layoutEngine: Object.freeze({}),
  componentSlots: Object.freeze({}),
  selectionLayer: Object.freeze({}),
  persistence: Object.freeze({})
});
