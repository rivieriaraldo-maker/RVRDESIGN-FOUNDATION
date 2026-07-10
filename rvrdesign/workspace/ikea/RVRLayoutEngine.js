import { getPreset } from './RVRWorkspacePresets.js';

/**
 * RVRLayoutEngine — IKEA Foundation (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 08 (RVRDESIGN-020 autoriza abertura)
 *
 * Implementa o "Layout Engine Contract" como uma função pura de
 * ordenação. Regra 100% explícita e determinística: blocos cujo id
 * está em `preset.priorityBlocks` vêm primeiro, na ordem da lista;
 * os demais mantêm a ordem original. Nenhum aprendizado, nenhuma
 * heurística, nenhuma reorganização automática — é a mesma lista de
 * prioridade já definida e homologada em RVRWorkspacePresets.js.
 *
 * @param {{id:string, span:number}[]} blocks
 * @param {string} presetKey
 * @returns {{id:string, span:number, order:number}[]}
 * Path sugerido: /rvrdesign/workspace/ikea/RVRLayoutEngine.js
 */
export function computeLayout(blocks, presetKey) {
  const preset = getPreset(presetKey);
  const priority = preset?.priorityBlocks ?? [];

  const priorityIndex = (id) => {
    const idx = priority.indexOf(id);
    return idx === -1 ? priority.length : idx;
  };

  return blocks
    .map((block, i) => ({ ...block, __originalIndex: i }))
    .sort((a, b) => {
      const pa = priorityIndex(a.id);
      const pb = priorityIndex(b.id);
      return pa !== pb ? pa - pb : a.__originalIndex - b.__originalIndex;
    })
    .map(({ __originalIndex, ...block }, order) => ({ ...block, order }));
}

