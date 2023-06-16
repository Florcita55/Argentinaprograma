const readlineSync = require('readline-sync');
const nombreDelMes = readlineSync.question('Ingrese un numero entero del 1 al 12 ');
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
nombreDelMes === meses[nombreDelMes -1];
if (meses[nombreDelMes -1] === "noviembre"||meses[nombreDelMes -1] === "abril"|| meses[nombreDelMes -1] === "junio" ||  meses[nombreDelMes -1] === "septiembre"){
 cantidadDeDias = 30;
} else if (meses[nombreDelMes -1] === "febrero"){
    cantidadDeDias = 28;
} else{
    cantidadDeDias = 31;
}
console.log("La cantidad de dias del mes de %s es %i",  meses [nombreDelMes-1], cantidadDeDias)

//let meses= {1:"enero", 2:"febrero", 3:"marzo", 4:"abril", 5:"mayo", 6:"junio", 7:"julio", 8:"agosto", 9:"septiembre", 10:"octubre", 11:"noviembre", 12:"diciembre"};
// meses = ["enero","febrero","marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]