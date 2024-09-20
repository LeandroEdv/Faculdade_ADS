class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log("meu nome é: " + this.nome);
    }
    trabalhar(){
        console.log("Funcionario: "+ this.nome +" trabalhando!");
    }

}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
    super(nome, idade, cargo);
    this.departamento = departamento;
    }
    gerenciar(){
        console.log(this.nome + " Gerenciando o departamento: "+ this.departamento);
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo, linguagem);
        this.linguagem = linguagem;
    }
    programar(){
        console.log("Desenvolvedor " + this.nome +" programando na linguagem: "+ this.linguagem);
    }
}


function receberValores(){

     var nome = document.getElementById(nome).value;
    console.log(nome)
    var idade = document.getElementById(idade);
    var cargo = document.getElementById(cargo);
    var departamento = document.getElementById(departamento);
    var linguagem = document.getElementById(linguagem);
}


/*let novoGerente = new Gerente("joão", 35,"gerente geral", "desenvolvimento");
novoGerente.seApresentar();
novoGerente.trabalhar();
novoGerente.gerenciar()
let novoDev = new Desenvolvedor("pedro",26,"dev-backend","java")
novoDev.seApresentar();
novoDev.trabalhar();
novoDev.programar();
*/