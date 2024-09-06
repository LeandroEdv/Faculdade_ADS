// função regular 
function multiplicar (x,y){
 return x * y;
}

// função anonima

var infocal = function(a,b,c){
    return a + b + c;
}

// Arrow functions 
const soma = (num1,num2) =>{ return num1 + num2;}

 // utilizando com o map
const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num);
console.log(valores)

// exemplo map
var listaProdutos = ["geladeira", "fogão", "computador"];
var listaMaiuscula = listaProdutos.map(primeiraMaiuscula);

function primeiraMaiuscula(elemento){

    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
    
}
console.log(listaMaiuscula);