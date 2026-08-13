console.log("O javascript esta funcionando! ");

const botaoMaisCoxinha = document.getElementById("botao-mais-coxinha");

const botaoMenosCoxinha = document.getElementById("botao-menos-coxinha");

const quantidadeCoxinha=document.getElementById("quantidade-coxinha");



botaoMaisCoxinha.addEventListener("click", function() {
      quantidadeCoxinha.textContent = Number(quantidadeCoxinha.textContent) + 1;
});

botaoMenosCoxinha.addEventListener("click", function() {
    if (Number(quantidadeCoxinha.textContent) > 0) {
        quantidadeCoxinha.textContent = Number(quantidadeCoxinha.textContent) -1;
}
});

const botaoMaisQuibe = document.getElementById("botao-mais-quibe");

const botaoMenosQuibe = document.getElementById("botao-menos-quibe");

const quantidadeQuibe=document.getElementById("quantidade-quibe");

botaoMaisQuibe.addEventListener("click" , function(){
    quantidadeQuibe.textContent= Number(quantidadeQuibe.textContent) + 1
})

botaoMenosQuibe.addEventListener("click", function(){
    if (Number(quantidadeQuibe.textContent) > 0){
        quantidadeQuibe.textContent = Number(quantidadeQuibe.textContent) -1;
}
});

const botaoMaisPresuntoeQueijo = document.getElementById("botao-mais-presuntoequeijo");

const botaoMenosPresuntoeQueijo = document.getElementById("botao-menos-presuntoequeijo");

const quantidadePresuntoeQueijo=document.getElementById("quantidade-presuntoequeijo");

botaoMaisPresuntoeQueijo.addEventListener("click" , function(){
    quantidadePresuntoeQueijo.textContent= Number(quantidadePresuntoeQueijo.textContent) + 1
})

botaoMenosPresuntoeQueijo.addEventListener("click", function(){
    if (Number(quantidadePresuntoeQueijo.textContent) > 0){
        quantidadePresuntoeQueijo.textContent = Number(quantidadePresuntoeQueijo.textContent) -1;
}
});

const botaoMaisEnroladinhodeSalsicha = document.getElementById("botao-mais-enroladinhodesalsicha");

const botaoMenosEnroladinhodeSalsicha = document.getElementById("botao-menos-enroladinhodesalsicha");

const quantidadeEnroladinhodeSalsicha=document.getElementById("quantidade-enroladinhodesalsicha");

botaoMaisEnroladinhodeSalsicha.addEventListener("click" , function(){
    quantidadeEnroladinhodeSalsicha.textContent= Number(quantidadeEnroladinhodeSalsicha.textContent) + 1
})

botaoMenosEnroladinhodeSalsicha.addEventListener("click", function(){
    if (Number(quantidadeEnroladinhodeSalsicha.textContent) > 0){
        quantidadeEnroladinhodeSalsicha.textContent = Number(quantidadeEnroladinhodeSalsicha.textContent) -1;
}
});

const produtos = document.querySelectorAll(".produto");

console.log(produtos);