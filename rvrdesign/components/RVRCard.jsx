import React from 'react';

/**
 * RVRCard — Component Library Base (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 04
 *
 * @param {boolean} [interactive=false] — aplica hover/lift (cards clicáveis)
 * @param {React.ReactNode} [header]
 * @param {React.ReactNode} [footer]
 * @param {React.ReactNode} children
 */
export default function RVRCard({
  interactive = false,
  header,
  footer,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'rvr-card',
    interactive ? 'rvr-card--interactive' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {header && <div className="rvr-card__header">{header}</div>}
      {children}
      {footer && <div className="rvr-card__footer">{footer}</div>}
    </div>
  );
}
