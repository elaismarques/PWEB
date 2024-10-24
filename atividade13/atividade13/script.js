// Selecionando a imagem e o H1
const imagemJanela = document.getElementById('imagemJanela');
const statusJanela = document.getElementById('status');

// URLs das imagens
const imagemFechada = './images/janelafechada.png'; // Coloque o caminho correto para a imagem da janela fechada
const imagemAberta = './images/janelaaberta.png'; // Coloque o caminho correto para a imagem da janela aberta
const imagemQuebrada = './images/janelaquebra.png'; // Coloque o caminho correto para a imagem da janela quebrada

// Evento quando o mouse está sobre a imagem (janela aberta)
imagemJanela.addEventListener('mouseover', function() {
    imagemJanela.src = imagemAberta;
    statusJanela.textContent = "Janela Aberta";
});

// Evento quando o mouse sai da imagem (janela fechada)
imagemJanela.addEventListener('mouseout', function() {
    imagemJanela.src = imagemFechada;
    statusJanela.textContent = "Janela Fechada";
});

// Evento ao clicar na imagem (janela quebrada)
imagemJanela.addEventListener('click', function() {
    imagemJanela.src = imagemQuebrada;
    statusJanela.textContent = "Janela Quebrada";
});