import React from 'react';

/**
 * RVRSeries — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 06
 *
 * Camada abstrata de dados — wrapper posicional puro. Não renderiza
 * nenhum tipo de gráfico (linha/barra/donut etc.) nesta etapa; isso é
 * decisão futura, posterior à homologação estrutural, quando a engine
 * gráfica for escolhida. Use RVR_CHART_ENGINE.getSeriesColor(index)
 * para não hardcodar cor por série.
 *
 * @param {React.ReactNode} children
 */
export default function RVRSeries({ className = '', children, ...rest }) {
  return (
    <div className={['rvr-chart-series', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
