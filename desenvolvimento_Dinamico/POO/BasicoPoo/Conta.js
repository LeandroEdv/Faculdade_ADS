class ContaCliente{
    constructor(numeroConta, saldo, debito, credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.credito = credito;
        this.debito = debito;
    }
    calcularSaldoAtual (){
        return this.saldo - this.debito + this.credito;
    }
    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual();
        if (saldoAtual >= 0){
            alert("saldo positivo R$ "+ saldoAtual);
        }else{
            alert("saldo negativo R$ "+ saldoAtual);
        }
    }
}

let numeroConta = prompt("Digite o numero da conta do cliente");
let saldo = parseFloat(prompt("Digite o saldo do cliente"));
let debito = parseFloat(prompt("Digite o debito do cliente"));
let credito = parseFloat(prompt("Digite o credito do cliente"));

let conta = new ContaCliente( numeroConta, saldo, debito, credito);
conta.verificarSaldo();