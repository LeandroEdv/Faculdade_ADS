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