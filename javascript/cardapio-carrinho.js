/**
 * Cardápio com Carrinho de Compras (CLI)
 * ----------------------------------------
 * Mostra um cardápio de lanches, deixa o usuário escolher itens em loop
 * e soma o valor total do carrinho ao final.
 *
 * Conceitos praticados: objetos com arrays paralelos, switch/case,
 * loops e leitura de entrada via terminal (prompt-sync).
 *
 * Para rodar: npm install prompt-sync && node cardapio-carrinho.js
 */

const rl = require('prompt-sync')();

let precoDoCarrinho = 0;

const cardapio = {
  nome: ["Pastel", "Coxinha", "Hamburguer", "Pizza"],
  preco: [7.00, 5.00, 12.00, 10.00]
};

function printCardapio() {
  for (let i = 0; i < cardapio.nome.length; i++) {
    console.log((i + 1) + " - " + cardapio.nome[i] + " - R$ " + cardapio.preco[i]);
  }
}

printCardapio();

let quantidade = parseInt(rl("Quantos itens você vai escolher? "));

for (let i = 1; i <= quantidade; i++) {
  let produto = parseInt(rl("Digite o número do produto: "));

  switch (produto) {
    case 1:
      precoDoCarrinho += cardapio.preco[0];
      console.log("Adicionado: " + cardapio.nome[0]);
      break;
    case 2:
      precoDoCarrinho += cardapio.preco[1];
      console.log("Adicionado: " + cardapio.nome[1]);
      break;
    case 3:
      precoDoCarrinho += cardapio.preco[2];
      console.log("Adicionado: " + cardapio.nome[2]);
      break;
    case 4:
      precoDoCarrinho += cardapio.preco[3];
      console.log("Adicionado: " + cardapio.nome[3]);
      break;
    default:
      console.log("Produto inválido, tente novamente.");
  }
}

console.log("O valor total do carrinho é: R$ " + precoDoCarrinho.toFixed(2));
