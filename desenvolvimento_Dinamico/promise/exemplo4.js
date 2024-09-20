function obtervalor(valor){
    return new Promise((resolve,reject)=>{
        if (valor > 10){
            valor += 1;
            resolve(valor)
        }else{
            reject(' não foi possivel obter vlor')
        }
    })
}

function dobrarValor(valor){
    return valor * 2;
}
function adicionarValor(valor){
    return valor += 10;
    }

obtervalor(28)
.then((valor)=>{
    console.log('valor obtido')
    return dobrarValor(valor);
})
.then((novoValor) =>{
    console.log('fazendo osegundo tratamento')
    return adicionarValor(novoValor);
})
.then((resultadoFinal)=>{
    const total = resultadoFinal + 5;
    console.log('oresultado final é: '+ total)
})
.catch((erro)=>{
    console.log('ocorreu um erro: '+ erro)
})