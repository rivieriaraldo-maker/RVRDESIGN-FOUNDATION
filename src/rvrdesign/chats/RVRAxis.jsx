import React from 'react';

/**
 * RVRAxis — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 06
 *
 * Renderiza apenas os labels + linha do eixo. Sem cálculo de escala —
 * mapeamento de valor→posição é decisão da futura engine gráfica
 * (pós-homologação estrutural).
 *
 * @param {'x'|'y'} [orientation='x']
 * @param {string[]} [labels=[]]
 */
export default function RVRAxis({ orientation = 'x', labels = [], className = '', ...rest }) {
  const classes = ['rvr-chart-axis', `rvr-chart-axis--${orientation}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      {labels.map((label, i) => (
        <span key={i}>{label}</span>
      ))}
    </div>
  );
}
