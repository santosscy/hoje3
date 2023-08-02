const ent3 = require("readline-sync");

let ld = 6;
let lancamentos = parseFloat(ent3.question('Numero de lancamentos: '))
let comb: { [key: string]: number } = {}; 


for (let i = 1; i <= ld; i++) {
   for (let a = 1; a <= ld; a++) {
    
    let resultado = "${i},${a}";
    comb[resultado] = (comb[resultado] || 0) + 1;
  }
}


console.log("Probabilidade de cada combinacao: ");

for (let i = 1; i <= ld; i++) {
  
    for (let a = 1; a <= ld; a++) {
    
    let resultado = "${i},${a}";
    
    let probabilidade = comb[resultado] / lancamentos;
    
    console.log(`Lançamento ${resultado}: ${probabilidade}`);
  }
}