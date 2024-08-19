/*
 * Escreva um código em que, após o cliente solicitar a escolha da
 * bebida, a opção ‘switch’ deve avaliar a opção selecionada e atribuir 
 * o valor correspondente à variável ‘valor’. Caso o cliente escolha uma 
 * opção inválida, uma mensagem informativa é exibida, indicando que a
 * escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção 
 * válida for selecionada, exibimos uma mensagem personalizada informando 
 * o nome da bebida escolhida e o valor a ser pago, 
 * formatado com duas casas decimais.
*
*
*/ 

let drinkName = "leite";
let value = 0;

drinkName.toLowerCase();

switch(drinkName){

    case("café"):
        value = 3.50;
        break;
    case("leite"):
        value = 4.00;
        break;
    case("chá"):
        value = 5.20;
        break;
    default:
        console.log("Opção invalida, a escolha deve der feita entre: café, leite ou chá.");
        break;
}
if(drinkName == "café" || drinkName == "leite" || drinkName == "chá"){
    console.log("A bebida escolhida foi: " + drinkName +" o valor a ser pago é: R$"+ value.toFixed(2));
}
