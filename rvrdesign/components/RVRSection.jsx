import React from 'react';

/**
 * RVRSection — Component Library Base (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 04
 *
 * @param {string} [title]
 * @param {React.ReactNode} children
 */
export default function RVRSection({ title, className = '', children, ...rest }) {
  const classes = ['rvr-section', className].filter(Boolean).join(' ');
  return (
    <section className={classes} {...rest}>
      {title && <h3 className="rvr-section__title">{title}</h3>}
      {children}
    </section>
  );
}
