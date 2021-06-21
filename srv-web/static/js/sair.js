// Imports e exports
import {
  carregarHtml
} from './util.js'

export {
  carregarPaginaSair
};

// Inicia a página sobre.
async function carregarPaginaSair() {
  await carregarHtml('sair', 'main');
};