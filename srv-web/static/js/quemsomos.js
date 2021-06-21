// Imports e exports
import {
  carregarHtml
} from './util.js'

export {
  carregarPaginaQuemSomos
};

// Inicia a página sobre.
async function carregarPaginaQuemSomos() {
  await carregarHtml('quemSomos', 'main');
};