// filtrando alementos do array
let arry = [1,2,3,4,5,6,7,8,9]; 
resp = arry.filter(n => n % 2 === 0);
console.log(resp)

var numerosFiltrados = arry.filter(
    function(valor){
        return valor > 5;
    }
)

var funcionarios = [
    {nome: "luiz", idade: 65},
    {nome: "camila", idade: 55},
    {nome: "paulo", idade: 40},
    {nome: "amanda", idade: 19},
];
var listagenFuncionarios = funcionarios.filter(
    function(valor){
        console.log(valor.nome);
    }
);

// interação de elemento com map

var num = arry.map(function (valor) {
    return valor * 2;
});

console.log(num);

var nomes = funcionarios.map(pessoa => pessoa.nome);

console.log(nomes)

//reduce 

var newArray = [1,2,3,4,5,45]
var tot = newArray.reduce(function(total, numero){
    return total + numero
},0)
var tot2 = newArray.reduce((n1,n2) => n1+n2,0);
console.log(tot2);
console.log(tot);


