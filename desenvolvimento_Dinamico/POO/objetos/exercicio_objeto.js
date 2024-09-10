function criarPesoa(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        altura : altura,
        peso: peso,

        calculoImc(){
            const indice = this.peso/(this.altura **2).toFixed(1);

            if (indice < 18.5){
                console.log("Abaixo do peso");
            } else if( indice >= 18.5 && indice < 24.9){
                console.log("peso normal");
            }else if (indice >= 25 && indice < 29.9){
                console.log("Acima do peso");
            }else if (indice >= 30 && indice < 34.9){
                console.log("Obesidade 1")
            }else if (indice >= 35 && indice < 39.9){
                console.log("Obesidade 2");
            }else if (indice > 40){
                console.log("Obesidade 3");
            }
        }
    }

}
const p1 = criarPesoa("joao","santos",1.80, 77);
p1.calculoImc();