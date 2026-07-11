import React from 'react';

/**
 * RVRLegend — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 06
 *
 * Sem lógica de dados — recebe os itens já resolvidos pelo chamador
 * (ex.: cor via RVR_CHART_ENGINE.getSeriesColor(index)).
 *
 * @param {{label: string, color: string}[]} [items=[]]
 */
export default function RVRLegend({ items = [], className = '', ...rest }) {
  return (
    <div className={['rvr-legend', className].filter(Boolean).join(' ')} {...rest}>
      {items.map((item, i) => (
        <span className="rvr-legend__item" key={item.label ?? i}>
          <span className="rvr-legend__swatch" style={{ backgroundColor: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

