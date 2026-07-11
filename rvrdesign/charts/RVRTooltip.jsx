import React from 'react';

/**
 * RVRTooltip — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 06
 *
 * Posicionamento controlado externamente (x/y absolutos dentro de um
 * RVRChartContainer, que é position:relative). Sem lógica de dados.
 *
 * @param {boolean} [visible=false]
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {boolean} [glass=false]
 */
export default function RVRTooltip({
  visible = false,
  x = 0,
  y = 0,
  glass = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'rvr-chart-tooltip',
    glass ? 'rvr-chart-tooltip--glass' : '',
    !visible ? 'rvr-chart-tooltip--hidden' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={{ left: x, top: y }} {...rest}>
      {children}
    </div>
  );
}

