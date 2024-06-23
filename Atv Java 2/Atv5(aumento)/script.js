let ipSalario = document.querySelector("#ipSalario");
let ipCargo = document.querySelector("#ipCargo");
let btAumento = document.querySelector("#btAumento");
let h2Antigo = document.querySelector("#h2Antigo");
let h2Novo = document.querySelector("#h2Novo");
let h2Diferença = document.querySelector("#h2Diferença");

function Resultado(){
    let salario = Number(ipSalario.value)
    let cargo = ipCargo.value
    let aumento;
    
    if (cargo === "Gerente") {
       aumento = salario * 0.10
    }

    else if ( cargo === "Engenheiro") {
        aumento = salario * 0.20
    }

    else if ( cargo = "Técnico") {
        aumento = salario * 0.30
    }

    else {
        aumento = salario * 0.40
    }

    h2Antigo.textContent = salario
    h2Diferença.textContent = aumento
    h2Novo.textContent = (salario + aumento)
    
}

btAumento.onclick = Resultado;