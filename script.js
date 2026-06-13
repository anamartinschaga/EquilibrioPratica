document.addEventListener("DOMContentLoaded", function () {
    // Pegando as referências dos elementos HTML
    const btnCalcular = document.getElementById("btn-calcular");
    const inputHectares = document.getElementById("hectares-input");
    const painelResultado = document.getElementById("resultado-simulador");

    const resArvores = document.getElementById("res-arvores");
    const resSolo = document.getElementById("res-solo");
    const resCarbono = document.getElementById("res-carbono");

    // Função que faz o cálculo ambiental baseado na área informada
    function calcularImpacto() {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples: se o usuário não digitar nada ou número menor/igual a zero
        if (isNaN(hectares) || hectares <= 0) {
            alert("Por favor, digite um número de hectares válido maior que zero.");
            return;
        }

        // Fórmulas fictícias aproximadas baseadas nos benefícios da ILPF por hectare/ano:
        // 1. Cerca de 150 árvores plantadas por hectare em sistemas integrados de linhas médias.
        const totalArvores = Math.round(hectares * 150);

        // 2. Cerca de 4 toneladas de solo salvas de erosão por hectare/ano em comparação com pastagem degradada.
        const totalSolo = (hectares * 4).toFixed(1);

        // 3. Mitigação/Sequestro de aproximadamente 3.500 kg de CO2 por hectare/ano pelas árvores e solo.
        const totalCarbono = Math.round(hectares * 3500);

        // Inserindo os resultados calculados nos spans correspondentes do HTML
        // O .toLocaleString('pt-BR') serve para colocar os pontos de milhar automaticamente (ex: 1.500)
        resArvores.innerText = totalArvores.toLocaleString('pt-BR');
        resSolo.innerText = totalSolo.toLocaleString('pt-BR');
        resCarbono.innerText = totalCarbono.toLocaleString('pt-BR');

        // Mostra o quadro de resultados aplicando a classe CSS de visibilidade
        painelResultado.className = "resultado-visivel";
    }

    // Ouvinte de evento: Executa a função quando o botão for clicado
    btnCalcular.addEventListener("click", calcularImpacto);

    // Bônus: Se o usuário apertar "Enter" no teclado dentro do campo, também calcula
    inputHectares.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            calcularImpacto();
        }
    });
});