import React from 'react';

/**
 * RVRWorkspaceGrid — Workspace Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 07 (RVRDESIGN-018)
 *
 * Reaproveita a mesma grid de 12 colunas do Component Library Base
 * (.rvr-grid) — proibido CSS paralelo. Adiciona apenas o atributo
 * data-rvr-workspace-grid como ponto de ancoragem para o IKEA
 * Foundation (Etapa 08); nenhum comportamento de snap/drag aqui.
 *
 * @param {2|3|4} [columns=3]
 * @param {React.ReactNode} children
 */
export default function RVRWorkspaceGrid({ columns = 3, className = '', children, ...rest }) {
  const classes = ['rvr-grid', `rvr-grid--col-${columns}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-rvr-workspace-grid="true" {...rest}>
      {children}
    </div>
  );
}
