/**
 * Sistema de Notas por Conceito
 * -------------------------------
 * Recebe o nome e a nota de vários alunos e classifica cada um por
 * conceito (A a E) de acordo com a faixa de nota.
 *
 * Conceitos praticados: loops com contador, condicionais encadeadas
 * (else if) e leitura de entrada via terminal (prompt-sync).
 *
 * Para rodar: npm install prompt-sync && node sistema-de-notas.js
 */

const rl = require('prompt-sync')();

let quantidadeDeAlunos = parseInt(rl("Digite o número de alunos: "));

for (let i = 0; i < quantidadeDeAlunos; i++) {
  let nome = rl("Digite o nome do aluno: ");
  let nota = parseFloat(rl("Digite a nota do aluno: "));

  if (nota === 10 || nota === 9) {
    console.log(nome + " - Aprovado com conceito A");
  } else if (nota === 8 || nota === 7) {
    console.log(nome + " - Aprovado com conceito B");
  } else if (nota === 6 || nota === 5) {
    console.log(nome + " - Reprovado com conceito C");
  } else if (nota === 4 || nota === 3) {
    console.log(nome + " - Reprovado com conceito D");
  } else if (nota === 2 || nota === 1) {
    console.log(nome + " - Reprovado com conceito E");
  } else {
    console.log(nome + " - Nota inválida");
  }
}
