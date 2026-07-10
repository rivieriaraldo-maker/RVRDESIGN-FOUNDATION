/**
 * RVRDESIGN Workspace Engine — barrel export
 * RVRDESIGN FOUNDATION · Etapa 07 (RVRDESIGN-018)
 * Path sugerido: /rvrdesign/workspace/index.js
 */
export { default as RVRWorkspace } from './RVRWorkspace.jsx';
export { default as RVRWorkspaceGrid } from './RVRWorkspaceGrid.jsx';
export { default as RVRWorkspaceBlock } from './RVRWorkspaceBlock.jsx';
export { default as RVRWorkspaceSlot } from './RVRWorkspaceSlot.jsx';
export { RVR_WORKSPACE_REGISTRY, getRegistryEntry, isRegistered } from './RVRWorkspaceRegistry.js';
export { RVR_WORKSPACE_PRESETS, getPreset } from './RVRWorkspacePresets.js';
export { CONTRACT_STUBS } from './RVRWorkspaceContracts.js';

export { clampSpan, getColumnSpanStyle, computeGridPosition } from './ikea/RVRGridEngine.js';
export { snapToGrid, nearestColumnSpan } from './ikea/RVRSnapSystem.js';
export { computeLayout } from './ikea/RVRLayoutEngine.js';
export { validateSlotAssignment } from './ikea/RVRComponentSlots.js';
export { useRVRSelectionLayer } from './ikea/RVRSelectionLayer.js';
