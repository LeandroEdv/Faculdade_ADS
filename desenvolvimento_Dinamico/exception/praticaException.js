function divisao(a,b){
    if(b==0){
        throw new Error('Divisão por zero não é permitida');
    }
    return a/b;
}
try{
 const resultado = divisao(10,0)
 console.log(resultado);
}catch(error){
    console.log("ocorreu uma exeção: " + error.message);
}

try {

    setTimeout(() => {
  
      throw new Error("Opa, ocorreu um erro!");
  
    }, 2000);
  
  } catch (error) {
  
    console.log("Erro capturado: ", error.message);
  
  }