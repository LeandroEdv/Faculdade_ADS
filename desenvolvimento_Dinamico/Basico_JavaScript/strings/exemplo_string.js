var url = "http://minhaempresa.com.br/filme?nome=poder&atores=lucas,guilherme"

const paramentros = url.split("?")[1]
const valores = paramentros.split("&")

for(let i = 0;i < valores.length; i++){
    if (valores[i].startsWith("atores=")){
        valores[i] = "atores="+ valores[i].substring(7).toUpperCase()
    }
}
console.log(valores)

var a, b, c;

let nome 
let Nome 
let resp = nome == Nome;
console.log(resp)

let valor = 10.5;