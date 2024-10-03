// Lista para armazenar os dados de cada pessoa
let pessoas = [];

function adicionarDados() {
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const opiniao = parseInt(document.getElementById("opiniao").value);

    // Verifica se os campos foram preenchidos corretamente
    if (isNaN(idade) || !sexo || isNaN(opiniao)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Adiciona os dados à lista
    pessoas.push({ idade, sexo, opiniao });

    // Limpa os campos do formulário
    document.getElementById("idade").value = '';
    document.getElementById("sexo").value = '';
    document.getElementById("opiniao").value = '';
}

function calcularResultados() {
    if (pessoas.length === 0) {
        alert("Nenhum dado foi adicionado.");
        return;
    }

    let somaIdades = 0;
    let idadeMax = pessoas[0].idade;
    let idadeMin = pessoas[0].idade;
    let qtdPessimo = 0;
    let qtdOtimoBom = 0;
    let qtdHomens = 0;
    let qtdMulheres = 0;

    pessoas.forEach(pessoa => {
        somaIdades += pessoa.idade;

        if (pessoa.idade > idadeMax) idadeMax = pessoa.idade;
        if (pessoa.idade < idadeMin) idadeMin = pessoa.idade;

        if (pessoa.opiniao === 1) qtdPessimo++;
        if (pessoa.opiniao === 4 || pessoa.opiniao === 3) qtdOtimoBom++;

        if (pessoa.sexo === "Masculino") qtdHomens++;
        else qtdMulheres++;
    });

    const mediaIdade = somaIdades / pessoas.length;
    const porcentagemOtimoBom = (qtdOtimoBom / pessoas.length) * 100;

    // Atualiza os resultados na página
    document.getElementById("mediaIdade").textContent = `Média de Idade: ${mediaIdade.toFixed(2)}`;
    document.getElementById("idadeMax").textContent = `Idade da Pessoa Mais Velha: ${idadeMax}`;
    document.getElementById("idadeMin").textContent = `Idade da Pessoa Mais Nova: ${idadeMin}`;
    document.getElementById("qtdPessimo").textContent = `Quantidade de Pessoas que Responderam Péssimo: ${qtdPessimo}`;
    document.getElementById("porcentagemOtimoBom").textContent = `Porcentagem de Ótimo e Bom: ${porcentagemOtimoBom.toFixed(2)}%`;
    document.getElementById("numHomensMulheres").textContent = `Homens: ${qtdHomens}, Mulheres: ${qtdMulheres}`;
}