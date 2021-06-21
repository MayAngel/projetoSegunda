// Imports e exports
import {
  carregarHtml
} from './util.js'

export {
  carregarPaginaMissao
};

// Inicia a página missão.
async function carregarPaginaMissao() {
  await carregarHtml('missao', 'main');
};