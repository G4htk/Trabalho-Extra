let ipValor = document.querySelector("#ipValor");
let btNotas = document.querySelector("#btNotas");
let h2Valor = document.querySelector("#h2Valor");
let h2Notas = document.querySelector("#h2Notas");

function Resultado(){
    h2Valor.textContent = Number(ipValor.value)
    
}

btNotas.onclick = Resultado;