// 1- forma de criar objetos no JS
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Silva'
}

console.log(pessoa['sobrenome'])

// 2- forma de criar objetos
const funcionario = new Object();
funcionario.nome = "leandro";
funcionario.sobrenome = "Santana"

console.log(funcionario.nome);

//3- forma - função;
function criarPessoa( nome, sobrenome){
    return {nome, sobrenome}
}
p1 = criarPessoa("joão", "silva");
console.log(p1);

// criando função no objeto
function criarPessoaNovo( nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
p2 = criarPessoaNovo("alex","josé")
console.log(p2.nomeCompleto)
