import { useState, useCallback } from 'react';

/**
 * useRVRSelectionLayer — IKEA Foundation (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 08 (RVRDESIGN-020 autoriza abertura)
 *
 * Implementa o "Selection Layer Contract" como estado de UI puro —
 * qual blockId está selecionado agora. Sem persistência (isso é
 * PersistenceContract, ainda não implementado), sem side-effects,
 * sem regra de negócio. Apenas rastreia seleção em memória durante a
 * sessão do componente.
 *
 * Path sugerido: /rvrdesign/workspace/ikea/RVRSelectionLayer.js
 */
export function useRVRSelectionLayer() {
  const [selectedBlockId, setSelectedBlockId] = useState(null);

  const select = useCallback((blockId) => setSelectedBlockId(blockId), []);
  const clear = useCallback(() => setSelectedBlockId(null), []);
  const isSelected = useCallback((blockId) => selectedBlockId === blockId, [selectedBlockId]);

  return { selectedBlockId, select, clear, isSelected };
}

