let valores = [12,4,5,8,4,46];
let valores2 = [12,4,5,8,4,46];

console.log("invertido: "+ valores.reverse());
console.log("adiciona caracter entre elementos: "+ valores.join("|"));

// retornando aposição de um elemento do array
console.log("retona a posição do elemento 5: "+ valores.indexOf(5))

// acrescentando item no final do array
valores.push(7)

// acrescenta item no inicio do array
valores2.unshift(154)

// retira elemento do final do array
valores2.pop()

// retirando elemento da primeira posição de um array
let retirado = valores2.shift()
console.log("valor retirado: " + retirado + " restante do array: "+ valores2)

// retirando elemento expecifico
let valores3 = ["eu", "voce", "Irene"];
let novos = valores3.splice(2, 1, "rafael");
console.log(valores3 + " \n"+ novos)

// retira elementos do array sem modificar o original
var pessoas = ["Eduardo", "maria", "gustavo", "pedro", "jessica"];
var pessoas2 = pessoas.slice(1,3);
console.log(pessoas + "\n" + pessoas2)