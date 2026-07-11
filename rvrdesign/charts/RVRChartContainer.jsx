import React from 'react';

/**
 * RVRChartContainer — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 06
 *
 * Infraestrutura visual pura — sem dados, sem telemetria.
 *
 * @param {boolean} [glass=false]
 * @param {number|string} [height]
 * @param {React.ReactNode} children
 */
export default function RVRChartContainer({
  glass = false,
  height,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const classes = [
    'rvr-chart-container',
    glass ? 'rvr-chart-container--glass' : '',
    className
  ].filter(Boolean).join(' ');

  const mergedStyle = height ? { ...style, height } : style;

  return (
    <div className={classes} style={mergedStyle} {...rest}>
      {children}
    </div>
  );
}
