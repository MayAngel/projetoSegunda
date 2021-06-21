// Imports e exports
import {
  carregarHtml
} from './util.js'

export {
  carregarPaginaBuscar
};

// Inicia a página buscar.
async function carregarPaginaBuscar() {
  await carregarHtml('buscar', 'main');
};