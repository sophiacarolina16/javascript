const entrada = require('readline-sync');

const operadores = [];
for(let i = 0; i < 5; i++){
    const nome = entrada.question(`Digite o nome do operador ${i + 1}: `);
    operadores.push(nome);
}

for(let i = 0; i < operadores.length; i++){
    console.log(`O operador ${i + 1} é: ${operadores[i]}`);
};