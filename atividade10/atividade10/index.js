// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Magreza (Grau 0)';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Normal (Grau 0)';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso (Grau I)';
    } else if (imc >= 30 && imc <= 39.9) {
        return 'Obesidade (Grau II)';
    } else {
        return 'Obesidade Grave (Grau III)';
    }
}

// Função principal que obtém os dados de entrada e exibe o resultado
function calcularEExibirIMC() {
    const altura = parseFloat(prompt("Digite sua altura em metros (Ex: 1.75):"));
    const peso = parseFloat(prompt("Digite seu peso em kg (Ex: 70):"));
    
    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }
    
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);
    
    alert(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
}

// Chamar a função para executar o cálculo e exibir o resultado
calcularEExibirIMC();
