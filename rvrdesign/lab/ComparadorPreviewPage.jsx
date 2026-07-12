import React from 'react';
import ComparadorVeiculosPreview from './ComparadorVeiculosPreview.jsx';

export default function ComparadorPreviewPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '32px',
        background: 'var(--rvr-bg-primary)',
        color: 'var(--rvr-text-primary)'
      }}
    >
      <div className="rvr-text-h2">
        RVRDESIGN LAB — Comparador Veículos Preview
      </div>

      <p className="rvr-text-body-sm rvr-text-secondary">
        Homologação visual do Face Lift utilizando RVRCard,
        RVRGrid e RVRButton.
      </p>

      <div style={{ marginTop: '24px' }}>
        <ComparadorVeiculosPreview />
      </div>
    </div>
  );
}
