import React, { useEffect, useState } from "react";

/**
 * ============================================================
 * RVRDESIGN FOUNDATION
 * Theme Engine Validation
 *
 * Teste:
 * - Verifica existência do Theme Engine
 * - Verifica tokens carregados
 * - Exibe status operacional
 * ============================================================
 */

export default function ThemeEngineValidation() {

  const [status, setStatus] = useState({
    themeEngine: false,
    tokens: false
  });

  useEffect(() => {

    setStatus({
      themeEngine: !!window.RVR_THEME_ENGINE,
      tokens: !!window.RVR_TOKENS
    });

  }, []);

  return (
    <div className="rvr-section">

      <h2>
        Theme Engine Validation
      </h2>

      <p>
        Teste de carregamento da RVRDESIGN FOUNDATION.
      </p>

      <hr />

      <ul>

        <li>
          Theme Engine:
          {" "}
          {status.themeEngine ? "✅ OK" : "❌ AUSENTE"}
        </li>

        <li>
          Tokens:
          {" "}
          {status.tokens ? "✅ OK" : "❌ AUSENTE"}
        </li>

      </ul>

      <hr />

      <strong>
        Resultado:
      </strong>

      <p>
        {
          status.themeEngine && status.tokens
            ? "Foundation visual carregada corretamente."
            : "Existem dependências ausentes."
        }
      </p>

    </div>
  );
}
