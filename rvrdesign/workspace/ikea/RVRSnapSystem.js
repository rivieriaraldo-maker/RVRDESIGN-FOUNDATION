/**
 * RVRSnapSystem — IKEA Foundation (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 08 (RVRDESIGN-020 autoriza abertura)
 *
 * Implementa o "Snap System Contract" como funções puras de
 * arredondamento/cálculo. NÃO registra listeners de mouse, NÃO
 * implementa arrastar-e-soltar, NÃO decide nada automaticamente —
 * apenas responde "qual é o valor mais próximo alinhado ao grid" para
 * quem chamar. Snap automático/interativo continua fora de escopo
 * (proibição confirmada em RVRDESIGN-020).
 *
 * Path sugerido: /rvrdesign/workspace/ikea/RVRSnapSystem.js
 */

export function snapToGrid(value, cellSize) {
  if (!cellSize) return value;
  return Math.round(value / cellSize) * cellSize;
}

export function nearestColumnSpan(pixelWidth, containerWidth, columns = 12) {
  if (!containerWidth || !columns) return 1;
  const colWidth = containerWidth / columns;
  const span = Math.round(pixelWidth / colWidth);
  return Math.min(Math.max(span, 1), columns);
}
