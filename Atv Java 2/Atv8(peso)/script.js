let ipSexo = document.querySelector("#ipSexo");
let ipAltura = document.querySelector("#ipAltura");
let btCalcular = document.querySelector("#btCalcular");

function Peso(){
    let sexo = ipSexo.value
    let altura = Number(ipAltura.value)
    let peso;

    if (sexo === "homem") {
       peso = (altura * 72.7) - 58
    }

    else if (sexo === "mulher") {
      peso = (altura * 62.1) - 44.7
    }

    else {
        alert ("ERRO")
    }

    alert (peso)
}

btCalcular.onclick = Peso;