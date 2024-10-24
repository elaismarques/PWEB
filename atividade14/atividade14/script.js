function transformarTexto() {
    const texto = document.getElementById('texto');
    const radios = document.getElementsByName('transformacao');
    let transformacaoSelecionada = '';

    // Verificar qual radio button está selecionado
    for (const radio of radios) {
        if (radio.checked) {
            transformacaoSelecionada = radio.value;
            break;
        }
    }

    // Aplicar transformação de texto
    if (transformacaoSelecionada === 'maiusculas') {
        texto.value = texto.value.toUpperCase();
    } else if (transformacaoSelecionada === 'minusculas') {
        texto.value = texto.value.toLowerCase();
    } else {
        alert('Selecione uma transformação.');
    }
}