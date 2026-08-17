console.log("O javascript esta funcionando! ");

const produtos = document.querySelectorAll(".produto");

const total = document.getElementById("total");

let valorTotal = 0;

produtos.forEach(function(produto) {

    const preco = 6;

    const botaoMais = produto.querySelector(".botao-mais");

    const botaoMenos = produto.querySelector(".botao-menos");

    const quantidade = produto.querySelector(".quantidade");

    botaoMais.addEventListener("click", function() {
      quantidade.textContent = Number(quantidade.textContent) + 1;

      const valorProduto = Number (quantidade.textContent) * preco;

      total.textContent = valorProduto.toFixed(2).replace(".",",");
    });


    botaoMenos.addEventListener("click", function() {
        if (Number(quantidade.textContent) > 0) {
         quantidade.textContent = Number(quantidade.textContent) -1;
        }
    });
});


