
// forEach

var a = [10,20,30,40,50,60];

for (let valor of a){
    console.log(valor);
}

a.forEach(valor => console.log(valor))

var total = 0

a.forEach(valor => {
    total += valor;
})
console.log()

a.forEach(function(valor,indice,array){
    console.log(array[indice])
})

var des = "";
var tot = 150;

if (tot > 200){

}else if (tot > 100){
    des = "A";

}else if(tot > 50){
    des = "B"
}
console.log(des);