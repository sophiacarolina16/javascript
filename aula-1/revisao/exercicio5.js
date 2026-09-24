const entrada = require("readline-sync");

let acumuladora = 0;

for (let i = 1; i <=6; i++){
    const valor = entrada.questionFloat(`Digite o valor da ${i} a peca:`);
    acumuladora += valor
}
media = acumuladora / 6;

console.log(`Total de defeitos: ${acumuladora.toFixed(2)}`);
console.log(`A média dos valores é: ${media.toFixed(2)}`);
