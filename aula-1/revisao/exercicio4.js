const entrada = require('readline-sync');

const temperatura = entrada.questionFloat("digite a temperatura do forno industrial:\n");
if(temperatura <=60){
    console.log(`Temperatura: NORMAL  (${temperatura}°) `);
} else if (temperatura <= 80){
    console.log(`Temperatura: ATENCAO (${temperatura}°) `);
} else {
    console.log(`Temperatura: CRITICO  (${temperatura}°) `);
};

