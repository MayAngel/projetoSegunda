const express = require('express');
const ejs = require('ejs')
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '../src')));

//ROTAS
app.get("/" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/index.html'));
}); 

app.get("/buscar" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/buscar.html'));
}); 
//Inicio Cadastro
app.get("/cadastro" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/cadastro.html'));
});
app.post("/cadastro" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/cadastro.html'));
});
//Fim Cadastro

app.get("/cadastroUsuario" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/cadastroUsuarios.html'));
}); 

app.get("/detalhesDoServico" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/detalhesDoServico.html'));
}); 

app.get("/login" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/login.html'));
}); 

app.get("/missao" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/missao.html'));
}); 

app.get("/quemsomos" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/quemsomos.html'));
}); 

app.get("/resultado" , (request, response)=>{
    response.sendFile(path.join(__dirname, './assets/html/resultado.html'));
}); 


app.listen(3031, function(){
    console.log("Servidor esta rodando na porta 3031");
});