let ipPreço = document.querySelector("#ipPreço");
let ipVezes = document.querySelector("#ipVezes");
let ipComo = document.querySelector("#ipComo");
let btResultado = document.querySelector("#btResultado");
let h2Resultado = document.querySelector("#h2Resultado");

function Resultado(){
    let preço = Number(ipPreço.value)
    let vezes = Number(ipVezes.value)
    let como = ipComo.value
    let desconto;

    if (vezes = 1 && como === "Dinheiro" ||( vezes = 1 && como === "Cheque")) {
        desconto = preço * 0.10;
    }

    else if (vezes = 1 && como === "Cartão") {
        desconto = preço * 0.15;
    }

    else if (vezes = 2) {
        desconto = 0;
    }

    else {
        alert ("Erro")
    }
    

    h2Resultado.textContent = preço - desconto
}

btResultado.onclick = Resultado;