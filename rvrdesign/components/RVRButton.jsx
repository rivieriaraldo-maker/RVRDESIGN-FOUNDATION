import React from 'react';

/**
 * RVRButton — Component Library Base (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 04
 *
 * Requer rvr-tokens.css + rvr-motion.css + rvr-components.css carregados.
 *
 * @param {'primary'|'secondary'|'ghost'} [variant='primary']
 * @param {'sm'|'md'|'lg'} [size='md']
 * @param {boolean} [disabled=false]
 * @param {React.ReactNode} children
 */
export default function RVRButton({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'rvr-button',
    `rvr-button--${variant}`,
    `rvr-button--${size}`,
    'rvr-active-scale',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
