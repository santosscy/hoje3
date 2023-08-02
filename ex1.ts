const ent1 = require("readline-sync");

let numero = parseFloat(ent1.question("Digite um numero: "))


if( numero%1 === 0){
    console.log("Inteiro")
}

else{console.log("Decimal")}