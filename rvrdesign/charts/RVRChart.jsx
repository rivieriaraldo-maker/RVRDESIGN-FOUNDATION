import React from 'react';
import RVRChartContainer from './RVRChartContainer.jsx';
import RVRChartTitle from './RVRChartTitle.jsx';
import RVRLegend from './RVRLegend.jsx';
import RVRGridLines from './RVRGridLines.jsx';

/**
 * RVRChart — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 09 (RVRDESIGN-024)
 *
 * Porta oficial ÚNICA para renderização de gráficos — nenhum módulo
 * deve montar gráfico fora deste componente. Recebe propriedades,
 * valida `type` contra os tipos previstos, e compõe exclusivamente
 * peças já homologadas do Chart System Foundation (RVRDESIGN-017):
 * Container (Theme/Token/Motion via CSS), Title (Typography), Legend,
 * GridLines. NÃO desenha o gráfico em si — nenhuma biblioteca gráfica
 * nesta etapa, só a arquitetura/moldura.
 *
 * @param {'line'|'bar'|'stacked-bar'|'donut'|'area'|'kpi-cards'|'heatmap'|'gauge'} type
 * @param {string} [title]
 * @param {string} [subtitle]
 * @param {{label:string,color:string}[]} [series=[]]
 * @param {boolean} [glass=false]
 * @param {number|string} [height=240]
 */
const SUPPORTED_TYPES = ['line', 'bar', 'stacked-bar', 'donut', 'area', 'kpi-cards', 'heatmap', 'gauge'];

export default function RVRChart({
  type,
  title,
  subtitle,
  series = [],
  glass = false,
  height = 240,
  ...rest
}) {
  const isSupported = SUPPORTED_TYPES.includes(type);

  return (
    <RVRChartContainer glass={glass} height={height} {...rest}>
      {(title || subtitle) && <RVRChartTitle title={title} subtitle={subtitle} />}

      <div style={{ position: 'relative', height: 'calc(100% - 8px)', minHeight: 80 }}>
        <RVRGridLines />
        <div
          className="rvr-text-body-sm rvr-text-secondary"
          style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'var(--rvr-space-md)' }}
        >
          {isSupported
            ? `Tipo "${type}" reconhecido — renderização real pendente de engine gráfica (decisão pós-homologação estrutural).`
            : `Tipo "${type}" não reconhecido. Tipos previstos: ${SUPPORTED_TYPES.join(', ')}.`}
        </div>
      </div>

      {series.length > 0 && <RVRLegend items={series} />}
    </RVRChartContainer>
  );
}

export { SUPPORTED_TYPES as RVR_CHART_SUPPORTED_TYPES };
