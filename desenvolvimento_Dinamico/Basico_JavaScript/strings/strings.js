var nome = "leandro Santana"
var x = nome.length;

console.log(x);
console.log(nome.toUpperCase());

// indice de string

var jogo = "Barcelona vs Real, será um grande jogo!";
var posicao = jogo.indexOf("Real");
console.log("posição da palavra Real: " + posicao);

// fatiamento de String

console.log(jogo.slice(0,9));
console.log(jogo.slice(jogo.indexOf("Real"),-1));

// procurando strings 

console.log(jogo.includes("Madri"));

// concatenando strings

var str1 = "Hello ";
var str2 = "world!";
console.log(str1.concat(str2));

//Retirar os espaços no inicio e no fim
var frase = "     Olá, você está aprendendo javaScript   ";
console.log(frase.trim());

// Criar um novo Array

var num = "1,2,3,4,5,6";
var arr = num.split(","); // Utiliza a vísgula para identificar o novo elemento do array
console.log(arr);

//montar uma nova string

var novaString = jogo.substring(12,25);
console.log(novaString);

var novaFrase = "Olá mundo";

if (novaFrase.startsWith("Olá")){
    let sub = novaFrase.substring(4,);
    let novaString = sub.replace("mundo", "pessoal");
    let novaStringMaiuscula = novaString.toUpperCase();
    console.log(novaStringMaiuscula)
}