import React, { useState, useMemo } from 'react';

/* ============================================================================
 * ComparadorVeiculosSelector.jsx
 * RVR e-Mobil — Seleção de Veículo A × Veículo B pelo Consultor
 *
 * Uso dentro do PortalRVR.jsx (adicionar onde desejar, ex: antes ou depois
 * do bloco engines-core-grid):
 *
 *   import ComparadorVeiculosSelector from './ComparadorVeiculosSelector';
 *   ...
 *   <ComparadorVeiculosSelector />
 *
 * Não altera nenhum estado do PortalRVR. Comunica exclusivamente via
 * window.RVR_EVENTS.publish('ui:change_module', ...) — contrato já homologado.
 * ========================================================================== */

const CSS = `
.cvs{background:#121212;border:1px solid #1e1e1e;border-radius:8px;padding:16px;font-family:'Plus Jakarta Sans',sans-serif;}
.cvs-title{font-size:9px;letter-spacing:.18em;color:#4f6149;font-weight:700;text-transform:uppercase;margin-bottom:12px;}
.cvs-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;}
.cvs-slot{background:#0a0a0a;border:1px solid #1e1e1e;border-radius:6px;padding:10px 12px;}
.cvs-slot-label{font-size:8px;color:#4f6149;letter-spacing:.1em;font-weight:700;display:block;margin-bottom:6px;}
.cvs-select{width:100%;background:#0a0a0a;border:1px solid #252525;color:#fff;padding:8px 10px;border-radius:5px;font-family:'DM Mono',monospace;font-size:11px;outline:none;cursor:pointer;}
.cvs-select:focus{border-color:#4f6149;}
.cvs-selected{margin-top:5px;font-size:10px;color:#8f998c;min-height:14px;}
.cvs-selected strong{color:#ededed;}
.cvs-btn{width:100%;background:#4f6149;border:none;color:#fff;padding:10px;border-radius:6px;font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:background 120ms ease;letter-spacing:.02em;}
.cvs-btn:hover{background:#3d4e38;}
.cvs-btn:disabled{background:#1e1e1e;color:#505050;cursor:not-allowed;}
.cvs-warn{font-size:10px;color:#707070;text-align:center;margin-top:8px;}
`;

function agruparPorMarca(veiculos) {
  var grupos = {};
  veiculos.forEach(function (v) {
    if (!grupos[v.marca]) grupos[v.marca] = [];
    grupos[v.marca].push(v);
  });
  return grupos;
}

function carregarCatalogo() {
  try {
    if (window.CATALOGO_MESTRE && typeof window.CATALOGO_MESTRE.getAll === 'function') {
      return window.CATALOGO_MESTRE.getAll();
    }
  } catch (err) {
    console.error('[ComparadorVeiculosSelector] falha ao carregar catálogo', err);
  }
  return [];
}

export default function ComparadorVeiculosSelector() {
  var catalogo = useMemo(carregarCatalogo, []);
  var grupos = useMemo(function () { return agruparPorMarca(catalogo); }, [catalogo]);
  var marcas = useMemo(function () { return Object.keys(grupos).sort(); }, [grupos]);

  var [marcaA, setMarcaA] = useState('');
  var [idA, setIdA] = useState('');
  var [marcaB, setMarcaB] = useState('');
  var [idB, setIdB] = useState('');

  var veiculosA = marcaA ? (grupos[marcaA] || []) : [];
  var veiculosB = marcaB ? (grupos[marcaB] || []) : [];

  var veiculoA = catalogo.find(function (v) { return v.id === idA; }) || null;
  var veiculoB = catalogo.find(function (v) { return v.id === idB; }) || null;

  var prontoPraComparar = !!(idA && idB && idA !== idB);

  function iniciarComparacao() {
    if (!prontoPraComparar) return;
    try {
      if (!window.RVR_EVENTS || typeof window.RVR_EVENTS.publish !== 'function') {
        console.error('[ComparadorVeiculosSelector] window.RVR_EVENTS indisponível.');
        return;
      }
      window.RVR_EVENTS.publish('ui:change_module', {
        target: 'IOCRVR',
        triggeredBy: 'COMPARADOR_VEICULOS_SELECTOR',
        timestamp: new Date().toISOString(),
        context: {
          idVeiculoA: idA,
          idVeiculoB: idB,
          dadosVeiculo: { marca: veiculoA.marca, modelo: veiculoA.modelo }
        }
      });
    } catch (err) {
      console.error('[ComparadorVeiculosSelector] falha ao publicar evento', err);
    }
  }

  return (
    <>
      <style>{CSS}</style>
      <div className="cvs">
        <div className="cvs-title">IOC Comparativo — Selecionar Veículos</div>

        <div className="cvs-row">
          {/* VEÍCULO A */}
          <div className="cvs-slot">
            <span className="cvs-slot-label">Veículo A (Eletrificado)</span>
            <select className="cvs-select" value={marcaA}
              onChange={function (e) { setMarcaA(e.target.value); setIdA(''); }}>
              <option value="">Marca...</option>
              {marcas.map(function (m) { return <option key={m} value={m}>{m}</option>; })}
            </select>
            {marcaA && (
              <select className="cvs-select" style={{ marginTop: 6 }} value={idA}
                onChange={function (e) { setIdA(e.target.value); }}>
                <option value="">Modelo...</option>
                {veiculosA.map(function (v) {
                  return <option key={v.id} value={v.id}>{v.modelo} {v.versao || ''}</option>;
                })}
              </select>
            )}
            <div className="cvs-selected">
              {veiculoA ? <><strong>{veiculoA.marca} {veiculoA.modelo}</strong> · {veiculoA.id}</> : '—'}
            </div>
          </div>

          {/* VEÍCULO B */}
          <div className="cvs-slot">
            <span className="cvs-slot-label">Veículo B (Referência)</span>
            <select className="cvs-select" value={marcaB}
              onChange={function (e) { setMarcaB(e.target.value); setIdB(''); }}>
              <option value="">Marca...</option>
              {marcas.map(function (m) { return <option key={m} value={m}>{m}</option>; })}
            </select>
            {marcaB && (
              <select className="cvs-select" style={{ marginTop: 6 }} value={idB}
                onChange={function (e) { setIdB(e.target.value); }}>
                <option value="">Modelo...</option>
                {veiculosB.map(function (v) {
                  return <option key={v.id} value={v.id}>{v.modelo} {v.versao || ''}</option>;
                })}
              </select>
            )}
            <div className="cvs-selected">
              {veiculoB ? <><strong>{veiculoB.marca} {veiculoB.modelo}</strong> · {veiculoB.id}</> : '—'}
            </div>
          </div>
        </div>

        <button className="cvs-btn" disabled={!prontoPraComparar} onClick={iniciarComparacao}>
          {prontoPraComparar ? '⚡ Iniciar IOC Comparativo' : 'Selecione os dois veículos'}
        </button>

        {idA && idB && idA === idB && (
          <p className="cvs-warn">Veículo A e B são o mesmo modelo. Selecione modelos diferentes.</p>
        )}
      </div>
    </>
  );
      }
