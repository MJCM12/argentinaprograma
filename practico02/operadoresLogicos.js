

const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese un numero ");

let resultado;

if (numero > 0 && numero % 2 == 0) {
    resultado ="El numero es positivo y par";
} else if (numero > 0){
    resultado = "El numero es positivo e impar";
} else if (numero < 0) {
    resultado = "El numero es negativo";
} else {
    resultado = "El numero es cero";
}

console.log (resultado)