window.onload = function() {
  ativarCheckboxis();
};

function gerarNotas() {

    let nP = document.getElementById("notaP").value;
    let nQl = document.getElementById("notaQl").value;
    let nQt = document.getElementById("notaQt").value;
    let nB;
    //Verifica o checkbox

    if (!checkNB.checked) {
        
        nB = 0;
    } else {

        nB = document.getElementById("notaB").value;
    }

    if (nB === "" || nP === "" || nQl === "" || nQt === "") {

        alert("errado");

    } else {

        let notaFinal = (Number(nB) + Number(nP) + Number(nQl) + Number(nQt)) / 4;

        alert(notaFinal);

        limparCampos(notaB);
        limparCampos(notaP);
        limparCampos(notaQl);
        limparCampos(notaQt);
    }

}

//teste

function teste() {
    alert(nB);
}

// basicas

function limparCampos(id) {
    document.getElementById(id).value = "";
}

function ativarCheckboxis() {
    document.getElementById("checkNB").checked = true;
    document.getElementById("checkNP").checked = true;
    document.getElementById("checkNQl").checked = true;
    document.getElementById("checkNQt").checked = true;
}