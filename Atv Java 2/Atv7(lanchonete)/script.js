let ipProduto = document.querySelector("#ipProduto");
let ipQuantidade = document.querySelector("#ipQuantidade");
let btCalcular = document.querySelector("#btCalcular");
let h2Preço = document.querySelector("#h2Preço");

function Resultado(){
    let produto = ipProduto.value
    let quantidade = Number(ipQuantidade.value)
    let valor;
    let final; 
    if (produto === "Cachorro Quente"){
        valor = 11
    }
    else if (produto === "Bauru") {
        valor = 8.50
    }
    else if (produto === "Misto Quente") {
        valor = 8
    }
    else if (produto === "Hamburguer") {
        valor = 9
    }
    else if (produto === "Cheeseburguer") {
        valor = 10
    }
    else if (produto === "Refrigerante") {
        valor = 4.50
    }

    else {
        alert ("Produto não existe ou digitado incorretamente")
    }

  
     final = valor * quantidade
    h2Preço.textContent = final
}

btCalcular.onclick = Resultado;
