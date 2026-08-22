console.log("O javascript esta funcionando! ");

const produtos = document.querySelectorAll(".produto");

const total = document.getElementById("total");

const finalizarPedido = document.getElementById("finalizar-pedido");

let valorTotal = 0;

function atualizarTotal(){
    valorTotal = 0;

    produtos.forEach(function(produto){

        const quantidade = produto.querySelector(".quantidade");

        const preco = Number(produto.querySelector(".preco").textContent);

        valorTotal = valorTotal + Number(quantidade.textContent) * preco;
    });

    total.textContent = valorTotal.toFixed(2).replace(".",",");
}

function mostrarPedido(){

    let pedido = "";

    produtos.forEach(function(produto){
        const nome = produto.querySelector("h3").textContent;
        const quantidade = Number(produto.querySelector(".quantidade").textContent);
        const preco = Number(produto.querySelector(".preco").textContent);

        if (quantidade > 0){
            const subtotal = quantidade * preco;

            pedido = pedido + quantidade + " x " + nome + " - R$ " + subtotal.toFixed(2).replace("." , ",") + "\n";
        }
    });

    const mensagem = "Olá! Gostaria de fazer um pedido! \n\n" + pedido + "\nTotal: R$ " + valorTotal.toFixed(2).replace(".",",");

    console.log(mensagem);

    const numero = "5516996208755";

    const linkWhastsApp = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

    window.open(linkWhastsApp , "_blank");
}

produtos.forEach(function(produto) {

    const botaoMais = produto.querySelector(".botao-mais");

    const botaoMenos = produto.querySelector(".botao-menos");

    const quantidade = produto.querySelector(".quantidade");

    botaoMais.addEventListener("click", function() {
      quantidade.textContent = Number(quantidade.textContent) + 1;

      atualizarTotal();

    });


    botaoMenos.addEventListener("click", function() {
        if (Number(quantidade.textContent) > 0) {
         quantidade.textContent = Number(quantidade.textContent) -1;

         atualizarTotal();
        }
    });
});

finalizarPedido.addEventListener("click",function() {
    mostrarPedido();
});

