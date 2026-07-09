import React from 'react';

/**
 * RVRGrid — Component Library Base (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 04
 *
 * Grid de 12 colunas. `columns` define quantas colunas visuais (2, 3
 * ou 4) os filhos ocupam a partir do breakpoint md (768px). Sem
 * magnetismo/snap — isso pertence ao Workspace Engine (Pilar 8/9).
 *
 * @param {2|3|4} [columns=3]
 * @param {React.ReactNode} children
 */
export default function RVRGrid({ columns = 3, className = '', children, ...rest }) {
  const classes = ['rvr-grid', `rvr-grid--col-${columns}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
