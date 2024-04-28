import express from "express"; // permite criar aplicações web de forma express (rapida).

const host = '0.0.0.0'; // representa todas as placas de rede do computador atual.
const porta= 3000; // a porta identifica o programa entre tantos outros que estao em execução no computador que esteja executando esta aplicação.
const app= express(); // sera criada a aplicação utilizando o express citado acima.


//requisiçao vem da internet
//A resposta é enviada para a Internet para quem fez a requisiçao 

function CalcularTabuada(requisicao,resposta){
//extrair da url o numero que sera usado para a tabuada e a quantidade de vezes que vai ser executada a tabuada.
let numero= parseInt(requisicao.query.numero);
let sequencia= parseInt(requisicao.query.sequencia);
if(!sequencia){
    sequencia=10;
}

resposta.write('<!DOCTYPE html>');
resposta.write('<html>');
resposta.write('<head>');
resposta.write('<meta charset="UTF-8">');
resposta.write('<title>Tabuada</title>');
resposta.write("</head>");
resposta.write('<body>');
if(numero){
    for(let i=1; i <= sequencia; i++){
        const resultado = (numero * i);
        resposta.write('<h1>' + numero + 'x' + i + '=' + resultado + '</h1>');
    }
}
resposta.write('</body>');
resposta.end();


}



//Cuidado JS permite que funções sejam passadas como parametros para outras funções.
app.get("/tabuada", CalcularTabuada);
// ( ) =>{}  é uma função anonima conhecida como arrow function.
app.listen(porta, host, () => {
    console.log("Servidor esta executando em http://" + host + ":" + porta);
})