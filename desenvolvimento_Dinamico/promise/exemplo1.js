const minhaPromise = new Promise ((resolve, reject) =>{
   const sucesso = true;
   if (sucesso ){
    resolve("Deu bom")
   }else{
    reject('Ocorreu um problema!')
   }
})
minhaPromise
.then((resultado)=>{
    console.log("foi sucesso: "+ resultado)
})
.catch((erro) =>{
    console.log("Deu ruim: "+ erro)
})