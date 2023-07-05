let numAleatorio =  Math.floor(Math.random() * 3);
function obtenerJugadaComputadora(numAleatorio) {
    if (numAleatorio === 0){
        jugadaAleatoria= "piedra";
    } else if (numAleatorio === 1){
        jugadaAleatoria= "papel";
    }else if (numAleatorio === 2){
        jugadaAleatoria = "tijeras";
    }
    return jugadaAleatoria;
}

const readlineSync = require('readline-sync');
let eleccion;

do {
    eleccion = readlineSync.question("Ingrese su eleccion.\n" +
 "Las opciones disponibles son : \n" +
 "piedra \n" +
 "papel  \n" +
 "tijeras \n" +
 " "
 );
 console.clear();
 console.log ("La elección no es válida, inrese otra nuevamente.");
} while (eleccion !== "piedra" && eleccion !== "papel" && eleccion !== "tijeras");{
 console.clear();
}
function obtenerJugadaUsuario(eleccion){
    return eleccion;
}
obtenerJugadaUsuario(eleccion);

function determinarGanador (jComputadora, jUsuario){
    if (jComputadora ===  jugadaUsuario){
        return "Empate";
     } else if (
     (jComputadora ===  "piedra" && jUsuario === "tijeras") ||
     (jComputadora ===  "tijeras" && jUsuario === "papel") ||
     (jComputadora ===  "papel" && jUsuario === "piedra"))
      { return "Gana la computadora";
       } else {
     return "Gana el usuario";   
       }
}
    
let jugadaComputadora = obtenerJugadaComputadora(numAleatorio);
let jugadaUsuario = obtenerJugadaUsuario(eleccion);
let resultado= determinarGanador(jugadaComputadora, jugadaUsuario);

console.log ("La computadora eligio: %s.", jugadaComputadora);
console.log ( "El usuario eligio: %s.", jugadaUsuario);
console.log ( "El resultado fue: %s.", resultado);