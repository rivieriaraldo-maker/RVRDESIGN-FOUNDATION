import { getRegistryEntry } from '../RVRWorkspaceRegistry.js';

/**
 * RVRComponentSlots — IKEA Foundation (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 08 (RVRDESIGN-020 autoriza abertura)
 *
 * Implementa o "Component Slots Contract" como validação pura —
 * checa um componente contra a lista `accepts` do slot e contra o
 * RVRWorkspaceRegistry (existe? já foi construído — status 'active'
 * ou 'foundation' — ou ainda é 'planned'?). Não atribui nada
 * automaticamente, não decide sozinho — só responde válido/inválido
 * e o motivo, para quem chamar decidir o que fazer.
 *
 * Path sugerido: /rvrdesign/workspace/ikea/RVRComponentSlots.js
 */
export function validateSlotAssignment(componentId, accepts = []) {
  if (accepts.length > 0 && !accepts.includes(componentId)) {
    return { valid: false, reason: `"${componentId}" não está na lista de aceitos deste slot.` };
  }

  const entry = getRegistryEntry(componentId);
  if (!entry) {
    return { valid: false, reason: `"${componentId}" não está registrado no RVRWorkspaceRegistry.` };
  }
  if (entry.status === 'planned') {
    return { valid: false, reason: `"${componentId}" ainda não foi construído (status: planned).` };
  }

  return { valid: true, reason: null };
}
