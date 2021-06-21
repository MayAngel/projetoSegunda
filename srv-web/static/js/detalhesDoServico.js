// Imports e exports
import {
    carregarHtml
  } from './util.js'
  
  export {
    carregarPaginaDetalhesDoServico
  };
  
  // Inicia a página detalhes do serviço.
  async function carregarPaginaDetalhesDoServico() {
    await carregarHtml('detalhesDoServico', 'main');
  };