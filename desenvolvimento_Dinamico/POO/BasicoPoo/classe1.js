class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("já está ligad0!");
            return;
        }
        this.ligado = true;
    }
}
class SmartPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
var s1 = new SmartPhone("sansung","branco","A71")
console.log(s1);