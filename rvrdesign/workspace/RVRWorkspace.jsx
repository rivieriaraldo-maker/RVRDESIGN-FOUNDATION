import React from 'react';
import RVRWorkspaceGrid from './RVRWorkspaceGrid.jsx';
import { getPreset } from './RVRWorkspacePresets.js';

/**
 * RVRWorkspace — Workspace Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 07 (RVRDESIGN-018)
 *
 * Container principal do ambiente. Recebe blocos já resolvidos pelo
 * chamador (RVRWorkspaceBlock / RVRWorkspaceSlot) e os renderiza
 * dentro do RVRWorkspaceGrid. Não busca dados, não calcula nada, não
 * conhece regra de negócio — apenas organiza o que recebe.
 *
 * @param {string} [preset='padraoRVR'] — chave de RVRWorkspacePresets (contexto informativo, não reordena automaticamente)
 * @param {2|3|4} [columns=3]
 * @param {React.ReactNode} children — RVRWorkspaceBlock / RVRWorkspaceSlot
 */
export default function RVRWorkspace({ preset = 'padraoRVR', columns = 3, className = '', children, ...rest }) {
  const presetMeta = getPreset(preset);

  return (
    <div className={['rvr-workspace', className].filter(Boolean).join(' ')} data-preset={preset} {...rest}>
      {presetMeta?.label && (
        <span className="rvr-badge rvr-badge--neutral" style={{ alignSelf: 'flex-start' }}>{presetMeta.label}</span>
      )}
      <RVRWorkspaceGrid columns={columns}>
        {children}
      </RVRWorkspaceGrid>
    </div>
  );
}
