let ipNivel = document.querySelector("#ipNivel");
let ipHora = document.querySelector("#ipHora");
let btCalculo = document.querySelector("#btCalculo");
let h2Resultado = document.querySelector("#h2Resultado");

function resultado(){
    let nivel = Number(ipNivel.value)
    let hora = Number(ipHora.value)
    let valor;
    let salario;

    if (nivel === 1) {
        valor = 12
    }

    else if (nivel === 2) {
        valor = 17
    }

    else if (nivel === 3) {
        valor = 25
    }

    else {
        alert ("Insira um nivel aceitável")
    }

    salario = valor * hora * 4.5
    h2Resultado.textContent = salario
}

btCalculo.onclick = resultado;
