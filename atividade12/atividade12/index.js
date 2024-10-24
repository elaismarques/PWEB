// 1. Utilize uma função construtora para o Retânguloreceber (x,y) ou seja, base e altura, com um métodopara calcular a área. Criar um objeto e executar ométodo que calcula a área. Não precisa utilizar get e set na função construtora.

// 2. Crie uma Classe tipo Conta, com as propriedades nomecorrentista, banco, numero da conta e saldo. Crieutilizando herança duas novas classes: Corrente comSaldo Especial e Poupanca com Juros, DataVencimento. Receber os dados via get e set. Criar umobjeto de cada uma: Corrente e Poupanca e mostrar osseus dados.
// ** Receber dados com prompt ou inputs

// Função construtora
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    // Método para calcular a área
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

// Criando um objeto do tipo Retângulo
const meuRetangulo = new Retangulo(5, 3);

// Executando o método para calcular a área
console.log("Área do Retângulo:", meuRetangulo.calcularArea());


// 
// class Conta {
//     constructor(nomeCorrentista, banco, numeroConta, saldo) {
//         this.nomeCorrentista = nomeCorrentista;
//         this.banco = banco;
//         this.numeroConta = numeroConta;
//         this.saldo = saldo;
//     }

//     // Método para mostrar os dados da conta
//     mostrarDados() {
//         return Nome: ${this.nomeCorrentista}, Banco: ${this.banco}, Conta: ${this.numeroConta}, Saldo: R$${this.saldo.toFixed(2)};
//     }
// }

// // Classe Corrente, herda de Conta
// class Corrente extends Conta {
//     constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
//         super(nomeCorrentista, banco, numeroConta, saldo);
//         this.saldoEspecial = saldoEspecial;
//     }

//     mostrarDados() {
//         return ${super.mostrarDados()}, Saldo Especial: R$${this.saldoEspecial.toFixed(2)};
//     }
// }