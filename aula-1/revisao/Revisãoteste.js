5
const readline = require('readline-sync');

let produtosPorCiclo = readline.questionFloat('Digite a quantidade de produtos por ciclo: ');

let producaoAcumulada = 0;

// Laço for de 1 até 12
for (let ciclo = 1; ciclo <= 12; ciclo++) {
    producaoAcumulada += produtosPorCiclo;
    console.log(`Ciclo ${ciclo}: ${producaoAcumulada} produtos acumulados`);
}







6
const readline = require('readline-sync');

let somaTempos = 0;
const totalAtendimentos = 6;


for (let i = 1; i <= totalAtendimentos; i++) {
    let tempo = readline.questionFloat(`Digite o tempo do atendimento ${i} (em minutos): `);
    somaTempos += tempo;
}


let media = somaTempos / totalAtendimentos;

//Exibcao
console.log(`Soma dos tempos: ${somaTempos} minutos`);
console.log(`Média dos tempos: ${media.toFixed(2)} minutos`);





7
const readline = require('readline-sync');


let setores = [];

for (let i = 0; i < 6; i++) {
    let nomeSetor = readline.question(`Digite o nome do setor ${i + 1}: `);
    setores.push(nomeSetor);
}

console.log("\n--- Lista de Setores ---");

for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}




8
const readline = require('readline-sync');

let ferramentas = [];

for (let i = 0; i < 4; i++) {
    console.log(`\n--- Cadastro da Ferramenta ${i + 1} ---`);
    let nome = readline.question('Nome da ferramenta: ');
    let quantidade = readline.questionInt('Quantidade disponivel: ');
    let minimo = readline.questionInt('Quantidade minima: ');

 
    ferramentas.push({
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    });
}

console.log("\n--- Relatório de Ferramentas ---");

for (let i = 0; i < ferramentas.length; i++) {
    let f = ferramentas[i];
    let situacao = "";

    if (f.quantidade < f.minimo) {
        situacao = "REPOR";
    } else {
        situacao = "ESTOQUE SUFICIENTE";
    }

    console.log(`Ferramenta: ${f.nome} | Qtd: ${f.quantidade} | Mín: ${f.minimo} | Situação: ${situacao}`);
}




      
