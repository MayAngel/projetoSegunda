export {
  carregarHtml
}
// Carrega conteúdo html via AJAX.
async function carregarHtml(path, seletor){
  const url = 'html/' + path + '.html';
  await fetch(url)
    .then(res => res.text())
    .then(texto => {
        const tag = document.querySelector(seletor);
        tag.innerHTML = texto;
      }
    );
}