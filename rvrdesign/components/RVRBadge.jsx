import React from 'react';

/**
 * RVRBadge — Component Library Base (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 04
 *
 * @param {'accent'|'neutral'} [variant='neutral']
 * @param {React.ReactNode} children
 */
export default function RVRBadge({ variant = 'neutral', className = '', children, ...rest }) {
  const classes = ['rvr-badge', `rvr-badge--${variant}`, className].filter(Boolean).join(' ');
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
