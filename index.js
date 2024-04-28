import express from "express"; // permite criar aplicações web de forma express (rapida).

const host = '0.0.0.0'; // representa todas as placas de rede do computador atual.
const porta= 3000; // a porta identifica o programa entre tantos outros que estao em execução no computador que esteja executando esta aplicação.
const app= express(); // sera criada a aplicação utilizando o express citado acima.


//requisiçao vem da internet
//A resposta é enviada para a Internet para quem fez a requisiçao 
function retornarPaginaInicial(requisição, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<head>');
    resposta.write('<meta charset=8"utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h3>Pagina Inicial</h3>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};
//Cuidado JS permite que funções sejam passadas como parametros para outras funções.
app.get("/", retornarPaginaInicial);
// ( ) =>{}  é uma função anonima conhecida como arrow function.
app.listen(porta, host, () => {
    console.log("Servidor esta executando em http://" + host + ":" + porta);
})