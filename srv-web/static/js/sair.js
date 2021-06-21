// Imports e exports
import {
  carregarHtml
} from './util.js'

export {
  carregarPaginaSair
};

// Inicia a página sair.
async function carregarPaginaSair() {
  await carregarHtml('sair', 'main');
};