document.getElementById('butao').addEventListener('click', function () {
    // Captura os valores dos campos
    const peso = parseFloat(document.getElementById('Peso').value.replace(',', '.'));
    const altura = parseFloat(document.getElementById('Altura').value.replace(',', '.'));

    // Validação dos dados
    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Cálculo do IMC
    const imc = peso / (altura * altura);

    // Classificação
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3 (mórbida)';
    }

    // Exibe o resultado formatado com vírgula (opcional)
    const resultadoFormatado = imc.toFixed(2).replace('.', ',');

    // Preenche o campo Resultado
    document.getElementById('Resultado').value = `${resultadoFormatado} - ${classificacao}`;
});


