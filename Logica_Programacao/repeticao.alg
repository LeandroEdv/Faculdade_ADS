algoritmo "Multiplicação de 10 números"
// Disciplina  : Linguagem e Lógica de Programação
// Professor   : [Nome do Professor]
// Descrição   : Solicita ao usuário 10 números e calcula a multiplicação desses números
// Autor(a)    : Leandro Santana
// Data atual  : 03/10/2024
var
   valorDigitado, result: real
   i : inteiro

inicio
   result <- 1  
   
   para i de 1 ate 10 faca
      escreval ("Digite um numero:")
      leia(valorDigitado)
      result <- result * valorDigitado
   fimpara

   escreval ("O valor da multiplicação é: ", result)

fimalgoritmo
