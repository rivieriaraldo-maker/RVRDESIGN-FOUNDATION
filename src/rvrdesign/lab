import React from 'react';

import {
  RVRButton,
  RVRCard,
  RVRGrid
} from '../components';

/*
 * RVRDESIGN FOUNDATION
 * LAB — Comparador Veiculos Preview
 *
 * Objetivo:
 * Validação visual do Face Lift do ComparadorVeiculosSelector.
 *
 * Não contém:
 * - lógica operacional
 * - eventos
 * - catálogo
 * - integração RVRTST
 */

const CSS = `
.rvr-cvs-preview-slot {
  background: var(--rvr-bg-secondary);
  border: 1px solid var(--rvr-border);
  border-radius: var(--rvr-radius-md);
  padding: var(--rvr-space-md);
}

.rvr-cvs-preview-title {
  color: var(--rvr-accent);
  margin-bottom: var(--rvr-space-sm);
}

.rvr-cvs-preview-select {
  width: 100%;
  margin-top: var(--rvr-space-sm);
}

.rvr-cvs-preview-data {
  margin-top: var(--rvr-space-sm);
}

.rvr-cvs-preview-action {
  margin-top: var(--rvr-space-md);
}
`;

function VehicleSlot({ title, type }) {
  return (
    <div className="rvr-cvs-preview-slot">

      <div className="rvr-text-caption rvr-cvs-preview-title">
        {title}
      </div>

      <select
        className="rvr-input rvr-cvs-preview-select"
        defaultValue=""
      >
        <option value="">
          Marca...
        </option>
        <option>
          BYD
        </option>
        <option>
          Toyota
        </option>
        <option>
          Volvo
        </option>
      </select>

      <select
        className="rvr-input rvr-cvs-preview-select"
        defaultValue=""
      >
        <option value="">
          Modelo...
        </option>
        <option>
          Seal
        </option>
        <option>
          Corolla Hybrid
        </option>
        <option>
          XC40 Recharge
        </option>
      </select>

      <div className="rvr-text-data rvr-text-secondary rvr-cvs-preview-data">
        {type} · CM-0001
      </div>

    </div>
  );
}


export default function ComparadorVeiculosPreview() {

  return (
    <>
      <style>{CSS}</style>

      <RVRCard
        header={
          <span className="rvr-text-caption">
            IOC Comparativo — Seleção de Veículos
          </span>
        }
      >

        <RVRGrid columns={2}>

          <VehicleSlot
            title="Veículo A (Eletrificado)"
            type="Referência"
          />

          <VehicleSlot
            title="Veículo B (Comparação)"
            type="Benchmark"
          />

        </RVRGrid>


        <div className="rvr-cvs-preview-action">

          <RVRButton>
            ⚡ Iniciar IOC Comparativo
          </RVRButton>

        </div>

      </RVRCard>

    </>
  );
}
