var exe = new Array(3); // cria um Array vazio com 3 posiçoes
var exe2 = [3]; // cria um array com o numero 3 na posição 0


var valores = [8,7,5,6,3,4]
for (var pos = 0; pos < valores.length; pos++){
    console.log("posição: " + pos+ " valor : " + valores[pos])
}


// Desafio proposto: Criar uma logica que retorne o maior nome de cidade dentro de um array
let cidades = new Array("salvador", "pernanbuco", "curitiba", "são-paulo");
let resp = "";
for (var i =0; i < cidades.length; i++){
    resp = cidades[i].length > resp.length ? cidades[i] : resp
}
console.log(resp)