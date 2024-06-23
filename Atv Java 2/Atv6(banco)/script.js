let ipSaldo = document.querySelector("#ipSaldo");
let btCalcular = document.querySelector("#btCalcular");
let h2Média = document.querySelector("#h2Média");
let h2Crédito = document.querySelector("#h2Crédito");
let h2Final = document.querySelector("#h2Final");

function Resultado(){
    let saldo = Number(ipSaldo.value)
    let calculo;

    if (saldo <= 200) {
        calculo = 0
    }

    else if (saldo <= 400 && saldo >= 201) {
        calculo = saldo * 0.20
    }

    else if (saldo <= 600 && saldo >= 401) {
        calculo = saldo * 0.30
    }

    else {
        calculo = saldo * 0.40
    }

    h2Média.textContent = saldo
    h2Crédito.textContent = calculo
    h2Final.textContent = saldo + calculo
}

btCalcular.onclick = Resultado;