import React from 'react';

/**
 * RVRChartTitle — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 06
 *
 * @param {string} [title]
 * @param {string} [subtitle]
 */
export default function RVRChartTitle({ title, subtitle, className = '', ...rest }) {
  return (
    <div className={['rvr-chart-title', className].filter(Boolean).join(' ')} {...rest}>
      {title && <div className="rvr-chart-title__main">{title}</div>}
      {subtitle && <div className="rvr-chart-title__subtitle">{subtitle}</div>}
    </div>
  );
}
