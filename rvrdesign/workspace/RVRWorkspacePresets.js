/**
 * RVRWorkspacePresets — Workspace Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 07 (RVRDESIGN-018, entregável 6)
 *
 * Estrutura dos 6 presets oficiais. Puramente estrutural — apenas
 * rótulos e prioridade de blocos por id (strings), nenhum dado real,
 * cálculo ou integração comercial.
 *
 * Path sugerido: /rvrdesign/workspace/RVRWorkspacePresets.js
 */

export const RVR_WORKSPACE_PRESETS = Object.freeze({
  padraoRVR: Object.freeze({ label: 'Padrão RVR', priorityBlocks: Object.freeze([]) }),
  showroom: Object.freeze({ label: 'Showroom', priorityBlocks: Object.freeze(['catalogo', 'comparacao', 'apresentacao']) }),
  consultorDigital: Object.freeze({ label: 'Consultor Digital', priorityBlocks: Object.freeze(['leads', 'acompanhamento', 'comunicacao']) }),
  especialistaTecnico: Object.freeze({ label: 'Especialista Técnico', priorityBlocks: Object.freeze(['dados', 'especificacoes', 'analise']) }),
  gestor: Object.freeze({ label: 'Gestor', priorityBlocks: Object.freeze(['indicadores', 'visaoGeral']) }),
  livre: Object.freeze({ label: 'Livre', priorityBlocks: Object.freeze([]) })
});

export function getPreset(key) {
  return RVR_WORKSPACE_PRESETS[key] ?? null;
}
