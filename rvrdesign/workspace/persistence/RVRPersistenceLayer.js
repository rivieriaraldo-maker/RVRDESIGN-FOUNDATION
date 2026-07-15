/**
 * RVRPersistenceLayer — IKEA Foundation (RVRDESIGN)
 * RVRDESIGN FOUNDATION · Etapa 09 (RVRDESIGN-022)
 *
 * Persiste exclusivamente preferências visuais do Workspace via
 * LocalStorage: tema ativo, preset ativo, e por bloco — span, ordem,
 * visibilidade. NÃO persiste clientes, vendas, dados comerciais ou
 * eventos (blindagem herdada do Workspace Engine).
 *
 * Sem Supabase, sem backend, sem sincronização, sem RVR_EVENTS, sem
 * efeitos colaterais além do próprio LocalStorage. Todas as funções
 * são assíncronas (retornam Promise) mesmo a implementação sendo
 * síncrona por baixo — isso mantém a assinatura de chamada estável
 * para uma futura migração a Supabase (troca de implementação, não
 * de call-site).
 *
 * Path sugerido: /rvrdesign/workspace/persistence/RVRPersistenceLayer.js
 */

const STORAGE_KEY = 'rvrdesign:workspace:config';

const DEFAULT_CONFIG = Object.freeze({
  theme: 'verde-petroleo',
  preset: 'padraoRVR',
  blocks: Object.freeze({})
});

/**
 * @typedef {Object} RVRWorkspaceBlockConfig
 * @property {number} span
 * @property {number} order
 * @property {boolean} visible
 */

/**
 * @typedef {Object} RVRWorkspaceConfig
 * @property {string} theme
 * @property {string} preset
 * @property {Object.<string, RVRWorkspaceBlockConfig>} blocks
 */

/** @param {RVRWorkspaceConfig} config */
export async function saveWorkspaceConfig(config) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    return true;
  } catch (e) {
    console.error('[RVRPersistenceLayer] Falha ao salvar:', e);
    return false;
  }
}

/** @returns {Promise<RVRWorkspaceConfig|null>} */
export async function loadWorkspaceConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('[RVRPersistenceLayer] Falha ao carregar:', e);
    return null;
  }
}

/** Grava e retorna a configuração padrão. @returns {Promise<RVRWorkspaceConfig>} */
export async function restoreDefaultConfig() {
  const defaults = { theme: DEFAULT_CONFIG.theme, preset: DEFAULT_CONFIG.preset, blocks: {} };
  await saveWorkspaceConfig(defaults);
  return defaults;
}

/** Remove a chave inteira do LocalStorage (diferente de restaurar padrão). */
export async function clearWorkspaceConfig() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    console.error('[RVRPersistenceLayer] Falha ao limpar:', e);
    return false;
  }
}
