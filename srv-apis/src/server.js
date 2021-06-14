const express = require('express');
const ejs = require('ejs')
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '../src')));

//Apontamento da engine do EJS
app.set("view engine", "ejs");
app.set("views", (path.join(__dirname, './views')));

//INICIO ROTAS

//INICIO INDEX
app.get("/", (request, response) => {
    response.render("index");
});


//FIM INDEX
//INICIO BUSCAR
app.get("/buscar", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/buscar.html'));
});
//FIM BUSCAR
//INICIO CADASTRO
app.get("/cadastro", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/cadastro.html'));
});
app.post("/cadastro", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/cadastro.html'));
});
//FIM CADASTRO
//INICIO CADASTRO USUARIO
app.get("/cadastroUsuario", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/cadastroUsuario.html'));
});

//app.post("/cadastroUsuario" , (request, response)=>{
//    response.sendFile(path.join(__dirname, './assets/html/cadastroUsuario.html'));
//}); 

//FIM CADASTRO USUARIO
//INICIO DETALHES DO SERVICO
app.get("/detalhesDoServico", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/detalhesDoServico.html'));
});
//FIM DETALHES DO SERVICO
//INICIO LOGIN
app.get("/login", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/login.html'));
});
app.post("/login", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/login.html'));
});
//FIM LOGIN
//INICIO MISSAO
app.get("/missao", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/missao.html'));
});
//FIM MISSAO
//INICIO QUEM SOMOS
app.get("/quemsomos", (request, response) => {
    response.sendFile(path.join(__dirname, './assets/html/quemsomos.html'));
});
//FIM QUEM SOMOS
//INICIO RESULTADO
const servicos = require("./assets/dados/servicos.json");
const titulo = {titulo: "SERVIÇOS ENCONTRADOS"};

app.get("/resultado", (request, response) => {
    response.render("./layout/template", { conteudo: "resultado", servicos: servicos , titulo: titulo });
});

//FIM RESULTADOS
//FIM ROTAS

//CHAMADA DO SERVIDOR
app.listen(3000, function () {
    console.log("Servidor esta rodando na porta 3000");
});
