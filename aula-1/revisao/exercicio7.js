const entrada = require('readline-sync');

const materiais = [];

for(let i = 0; i < 4; i++) {
    const material = {
        nome: entrada.question(`nome do  ${i + 1} o material: `),
        quantidade: entrada.questionInt(`Digite a quantidade atual: `),
        estoqueMinimo: entrada.questionInt(`estoque minimo: `)
    };

    materiais.push(material);
}
console.log("relatorio de materiais:");

for(let i = 0; i < materiais.length; i++) {
    const material = materiais[i];

    let situacao;
    if(material.quantidade < material.estoqueMinimo) {
        situacao = "abaixo do estoque minimo";
    } else {
        situacao = "estoque ok";
    }

    console.log(`Material: ${material.nome} | Quantidade atual: ${material.quantidade} | Estoque mínimo: ${material.estoqueMinimo} | Situação: ${situacao}`);

}