class pessoa{

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;

    }
    falar(){
        console.log("ola "+ this.nome)
    }
    get nomeCompleto(){
        console.log("olá "+ this.nome +" "+ this.sobrenome)
    }
}

p1 = new pessoa("fabio", "silva");
p1.falar();
p1.nomeCompleto; 