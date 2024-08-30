/*
*
*
*
*/

var idade = 21;
let exp = 4;
let nivelEdu = "superior";
let certificado = false;
let elegivel


elegivel = (idade >= 18) && (exp >= 3) && ((nivelEdu == "superior") || (certificado == true)) ? true : false

console.log(elegivel)