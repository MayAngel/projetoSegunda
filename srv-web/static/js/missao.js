// Imports e exports
import {
  carregarHtml
} from './util.js'

export {
  carregarPaginaMissao
};

// Inicia a página sobre.
async function carregarPaginaMissao() {
  await carregarHtml('missao', 'main');
};