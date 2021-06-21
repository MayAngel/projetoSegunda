// Imports e exports
import {
  carregarHtml
} from './util.js'

export {
  carregarPaginaQuemSomos
};

// Inicia a página quem somos.
async function carregarPaginaQuemSomos() {
  await carregarHtml('quemSomos', 'main');
};