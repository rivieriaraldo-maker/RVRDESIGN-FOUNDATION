import React from 'react';

/**
 * RVRWorkspaceSlot — Workspace Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 07 (RVRDESIGN-018)
 *
 * Área reservada para componentes futuros. Puramente estrutural —
 * não busca dados, não valida nada além do id informado contra a
 * lista `accepts` (checagem de exibição, não de negócio).
 *
 * @param {string} id — ex.: "dashboard-principal"
 * @param {string[]} [accepts=[]] — ids aceitos (ex.: ["rvr-chart","rvr-card"])
 * @param {React.ReactNode} [children] — se ausente, mostra placeholder vazio
 */
export default function RVRWorkspaceSlot({ id, accepts = [], className = '', children, ...rest }) {
  if (children) {
    return (
      <div className={['rvr-workspace-slot', className].filter(Boolean).join(' ')} data-slot-id={id} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <div className={['rvr-workspace-slot--empty', className].filter(Boolean).join(' ')} data-slot-id={id} {...rest}>
      <span className="rvr-text-caption">{id}</span>
      {accepts.length > 0 && (
        <span className="rvr-text-body-sm rvr-text-secondary">aceita: {accepts.join(', ')}</span>
      )}
    </div>
  );
}
