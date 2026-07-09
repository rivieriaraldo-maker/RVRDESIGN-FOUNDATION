import React, { useId } from 'react';

/**
 * RVRInput — Component Library Base (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 04
 *
 * @param {string} [label]
 * @param {string} [id]
 * @param {boolean} [disabled=false]
 */
export default function RVRInput({ label, id, disabled = false, className = '', ...rest }) {
  const autoId = useId();
  const inputId = id || autoId;

  return (
    <div className="rvr-input-group">
      {label && (
        <label className="rvr-input-group__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={['rvr-input', 'rvr-focus-ring', className].filter(Boolean).join(' ')}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
}
