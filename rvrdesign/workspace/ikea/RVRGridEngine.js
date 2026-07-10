/**
 * RVRGridEngine — IKEA Foundation (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 08 (RVRDESIGN-020 autoriza abertura)
 *
 * Implementa o "Grid Engine Contract" (RVRWorkspaceContracts.js) como
 * funções puras — sem estado, sem DOM, sem interação. Nenhuma
 * automação, nenhuma decisão "inteligente": apenas matemática
 * determinística de grid de 12 colunas.
 *
 * Path sugerido: /rvrdesign/workspace/ikea/RVRGridEngine.js
 */

export function clampSpan(span, columns = 12) {
  return Math.min(Math.max(Math.round(span), 1), columns);
}

export function getColumnSpanStyle(span, columns = 12) {
  return { gridColumn: `span ${clampSpan(span, columns)}` };
}

/**
 * Posição lógica (linha/coluna) assumindo blocos de span 1 — uso
 * informativo/preview apenas. Não substitui o auto-flow real do CSS
 * grid, que já lida com spans variáveis nativamente.
 */
export function computeGridPosition(index, columns = 12) {
  return { row: Math.floor(index / columns), col: index % columns };
}
