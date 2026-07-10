import React from 'react';
import RVRCard from '../components/RVRCard.jsx';

/**
 * RVRWorkspaceBlock — Workspace Engine (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 07 (RVRDESIGN-018)
 *
 * Unidade visual posicionável. Controla apenas posição, tamanho,
 * ordem e visibilidade — nunca dados, cálculos, eventos ou
 * integrações (blindagem arquitetural, seção 4 da diretriz). O
 * chrome visual é o RVRCard já homologado — proibido componente
 * isolado / identidade visual própria.
 *
 * Visibilidade: quando `visible=false`, o bloco não é montado no DOM
 * (mais simples que ocultar via CSS; a classe --hidden existe em
 * rvr-workspace.css para quem preferir ocultar sem desmontar).
 *
 * @param {string} id — identificador do bloco (ex.: "kpi-vendas")
 * @param {number} [span=12] — colunas ocupadas (1–12), aplicado via grid-column inline
 * @param {number} [order] — ordem dentro do grid (aplicado via CSS order inline)
 * @param {boolean} [visible=true]
 * @param {React.ReactNode} children
 */
export default function RVRWorkspaceBlock({
  id,
  span = 12,
  order,
  visible = true,
  className = '',
  children,
  ...rest
}) {
  if (!visible) return null;

  const style = {
    gridColumn: `span ${Math.min(Math.max(span, 1), 12)}`,
    ...(order !== undefined ? { order } : {})
  };

  return (
    <div className={['rvr-workspace-block', className].filter(Boolean).join(' ')} style={style} data-block-id={id} {...rest}>
      <RVRCard>{children}</RVRCard>
    </div>
  );
}
