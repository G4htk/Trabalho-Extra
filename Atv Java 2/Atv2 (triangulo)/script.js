let ipLado1 = document.querySelector("#ipLado1");
let ipLado2 = document.querySelector("#ipLado2");
let ipLado3 = document.querySelector("#ipLado3");
let btTriangulo = document.querySelector("#btTriangulo");

function Resultado(){
    let lado1 = Number(ipLado1.value)
    let lado2 = Number(ipLado2.value)
    let lado3 = Number(ipLado3.value)
    if (lado1 > (lado2 + lado3) || lado2 > (lado1 + lado3) || lado3 > (lado2 + lado1)) 
        {alert ("Não é um triângulo")}
    else if (lado1 === lado2 === lado3)
        {alert ("Equilátero")}
    else if (lado1 === lado2 !=lado3 || lado1 === lado3 !=lado2 || lado2 === lado3 !=lado1)
        {alert ("Isóceles")}
    else {
        alert ("Escaleno")
    }
}

btTriangulo.onclick = Resultado;