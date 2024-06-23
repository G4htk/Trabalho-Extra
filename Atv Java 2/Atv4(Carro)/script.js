let ipAno = document.querySelector("#ipAno");
let ipValor = document.querySelector("#ipValor");
let btResultado = document.querySelector("#btResultado");
let h2Pagar = document.querySelector("#h2Pagar");

function Resultado(){
    let ano = Number(ipAno.value)
    let valor = Number(ipValor.value)
    let resultado;
    if (ano <= 1990)
     { resultado = 0.01 * valor}
    else
   { resultado = 0.15 * valor}
   h2Pagar.textContent = resultado
}
btResultado.onclick = Resultado;