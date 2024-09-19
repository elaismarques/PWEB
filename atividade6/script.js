function calcularMedia() {
    let nome = prompt("Digite o nome do aluno:");
    let notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i}:`));
        notas.push(nota);
    }

    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;

    alert(`Aluno: ${nome}\nMédia Aritmética: ${media.toFixed(2)}`);
}

function realizaOperacao() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    let soma = num1 + num2;
    let sub = num1 - num2;
    let prod = num1 * num2;
    let div = num1 / num2;
    let resto = num1 % num2;

    alert(
        `Resultados:\nSoma: ${soma}\nSubtração: ${sub}\nprod: ${prod}\nDivisão: ${div}\nResto: ${resto}`);
}