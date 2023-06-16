const readlineSync = require('readline-sync');
const numeroEntero = readlineSync.question('Ingrese un numero entero ');
if (numeroEntero > 0 && numeroEntero %2===0){
console.log("El numero es positivo y par");
} else if (numeroEntero > 0 && !numeroEntero %2===0){
    console.log("El numero es positivo e impar");
} else if (numeroEntero < 0){
        console.log("El numero es negativo");
}else if (numeroEntero == 0){
    console.log("El numero es cero");
}