import React from 'react';

/**
 * RVRGridLines — Chart System (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 06
 *
 * Renomeado de "RVRGrid" (grafia usada na seção "Arquitetura Prevista"
 * da diretriz de abertura) para RVRGridLines — evita colisão de nome
 * com o RVRGrid já existente na Component Library Base (grid de
 * layout 12 colunas — função completamente diferente). Ver registro
 * RVRDESIGN-016.
 *
 * Puramente decorativo — linhas de fundo do gráfico, sem dados.
 */
export default function RVRGridLines({ className = '', ...rest }) {
  return <div className={['rvr-chart-gridlines', className].filter(Boolean).join(' ')} {...rest} />;
}
