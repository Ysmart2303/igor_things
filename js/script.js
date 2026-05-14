window.onload = function() {
  ativarCheckboxis();
};

function gerarNotas() {
    let nP, nQl, nQt, nB;
    let erroVazio = false;

    // 1. Captura e validação condicional para cada nota
    if (!checkNB.checked) {
        nB = 0;
    } else {
        nB = document.getElementById("notaB").value;
        if (nB === "") erroVazio = true;
    }

    if (!checkNP.checked) {
        nP = 0;
    } else {
        nP = document.getElementById("notaP").value;
        if (nP === "") erroVazio = true;
    }

    if (!checkNQl.checked) {
        nQl = 0;
    } else {
        nQl = document.getElementById("notaQl").value;
        if (nQl === "") erroVazio = true;
    }

    if (!checkNQt.checked) {
        nQt = 0;
    } else {
        nQt = document.getElementById("notaQt").value;
        if (nQt === "") erroVazio = true;
    }

    // 2. Fluxo de verificação baseado na flag erroVazio
    if (erroVazio) {
        alert("Preencha todos os campos ativos");

        limparCampos("notaB");
        limparCampos("notaP");
        limparCampos("notaQl");
        limparCampos("notaQt");

    } else {
        // Realiza o cálculo convertendo para número
        let notaFinal = (Number(nB) + Number(nP) + Number(nQl) + Number(nQt)) / 4;

        alert("Média final: " + notaFinal);

        limparCampos("notaB");
        limparCampos("notaP");
        limparCampos("notaQl");
        limparCampos("notaQt");
    }
}

// Funções básicas

function limparCampos(id) {
    // Garante que o elemento existe antes de tentar limpar para evitar erros
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.value = "";
    }
}

function ativarCheckboxis() {
    document.getElementById("checkNB").checked = true;
    document.getElementById("checkNP").checked = true;
    document.getElementById("checkNQl").checked = true;
    document.getElementById("checkNQt").checked = true;
}

// mostar

function mostrarTela(telaId) {
  const telas = ["base", "nAnual"];

  telas.forEach(id => {
    const el = document.getElementById(id);
    el.classList.add("hidden"); // esconde todas
  });

  document.getElementById(telaId).classList.remove("hidden"); // mostra só uma

  erro.textContent = "";
  erroRE.textContent = "";
}