class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return ("Meu nome é: " + this.nome);
    }

    trabalhar() {
        return("Funcionário: " + this.nome + " trabalhando!");
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return (this.nome + " gerenciando o departamento: " + this.departamento);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return("Desenvolvedor " + this.nome + " programando na linguagem: " + this.linguagem);
    }
}

function receberValores() {
    try {
        var nome = document.getElementById("nome").value;
        var idade = document.getElementById("idade").value;
        var cargo = document.getElementById("cargo").value;
        var departamento = document.getElementById("departamento").value;
        var linguagem = document.getElementById("linguagem").value;

        if (!nome || !idade || !cargo) {
            throw new Error("Preencha todos os campos obrigatórios: nome, idade e cargo!");
        }

        if (cargo.toLowerCase() === "gerente") {
            
            var gerente = new Gerente(nome, idade, cargo, departamento);
            gerente.seApresentar();
            gerente.gerenciar();
            alert(gerente.seApresentar()+ " \n" + gerente.gerenciar())

        } else if (cargo.toLowerCase() === "desenvolvedor") {
           
            var desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
            desenvolvedor.seApresentar();
            desenvolvedor.programar();
            alert(gerente.seApresentar()+ " \n" + desenvolvedor.programar())

        } else {
            console.log("Cargo não reconhecido.");
        }

    } catch (error) {
        
        console.error("Erro: ", error.message);
        alert("Erro: " + error.message);
    }
}