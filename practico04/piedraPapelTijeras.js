const readlineSync = require('readline-sync');
const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";
const max = 3;
const min = 0;
let jugadaCompu;
let resultado;
let miJugada;
let resultadoFinal;
let jugadasGanadasComputadora = 0
let jugadasGanadasUsuario = 0
let numeroDeJugadas;




function obtenerResultadoFinal (jugadasGanadasComputadora, jugadasGanadasUsuario) {
    if (jugadasGanadasComputadora > jugadasGanadasUsuario) {
        resultadoFinal = 'Gana la computadora'
    } else if (jugadasGanadasComputadora < jugadasGanadasUsuario) {
        resultadoFinal = 'Gana el usuario'
    } else {
        resultadoFinal = 'empate';
    }
    return resultadoFinal
};

function partidaDeTresRounds (numeroDeJugadas) {
    for (let i = 0; i < numeroDeJugadas; i++) {
        
        resultado = piedraPapelOTijeras();
        console.log(resultado)

        if (i === 0) {
                if (resultado == 'Gana la computadora') {
                    jugadasGanadasComputadora ++;
                } else if (resultado == 'Gana el usuario'){
                    jugadasGanadasUsuario ++;
                } else {
                    resultadoFinal = resultado;
                }
        
        } 
        
        if (i === 1) {
            if (resultado == 'Gana la computadora') {
                jugadasGanadasComputadora ++;
            } else if (resultado == 'Gana el usuario') {
                jugadasGanadasUsuario ++;
            } else {
                resultadoFinal = resultado;
            }
        }

        if (i === 2) {
            if (resultado == 'Gana la computadora') {
                jugadasGanadasComputadora ++;
            } else if (resultado == 'Gana el usuario'){
                jugadasGanadasUsuario ++;
            } else {
                resultadoFinal = resultado;
            }
        }   

    };
    console.log(jugadasGanadasComputadora);
    console.log(jugadasGanadasUsuario);

    obtenerResultadoFinal (jugadasGanadasComputadora, jugadasGanadasUsuario)

    return resultadoFinal
    
    };


function partidaDeDosRounds (numeroDeJugadas) {
    for (let i = 0; i < numeroDeJugadas; i++) {
        
        resultado = piedraPapelOTijeras();
        console.log(resultado)

        if (i === 0) {
                if (resultado == 'Gana la computadora') {
                    jugadasGanadasComputadora ++;
                } else if (resultado == 'Gana el usuario'){
                    jugadasGanadasUsuario ++;
                } else {
                    resultadoFinal = resultado;
                }
        
        } 
        
        if (i === 1) {
            if (resultado == 'Gana la computadora') {
                jugadasGanadasComputadora ++;
            } else if (resultado == 'Gana el usuario'){
                jugadasGanadasUsuario ++;
            } else {
                resultadoFinal = resultado;
            }
        }   

    };

    console.log(jugadasGanadasComputadora);
    console.log(jugadasGanadasUsuario);

    obtenerResultadoFinal (jugadasGanadasComputadora, jugadasGanadasUsuario)

    return resultadoFinal
    
    };


function piedraPapelOTijeras () {


    function obtenerJugadaComputadora (min,max) {
        let valor = Math.floor(Math.random() * (max - min) ) + min;
        switch (valor) {
            case 0:
                jugadaCompu = piedra;
                break;
            case 1:
                jugadaCompu = papel;
                break;
            case 2:
                jugadaCompu = tijeras;
                break;
        }
        return jugadaCompu
    };
    
    jugadaCompu = obtenerJugadaComputadora(min,max)
    
    
    function obtenerJugadaUsuario (miJugada) {
         miJugada = readlineSync.question("Piedra, papel o tijeras? ");
            if (miJugada == piedra || miJugada == papel || miJugada == tijeras){
            return miJugada
            } else {
            miJugada = 'error'
        }
        while (miJugada = 'error') {
            miJugada = readlineSync.question("Intentanlo otra vez, Piedra, papel o tijeras? ")
            if (miJugada == piedra || miJugada == papel || miJugada == tijeras){
                return miJugada
                break; }
        }
    };
    
    miJugada = obtenerJugadaUsuario(miJugada);

    
    function determinarGanador(jugadaCompu,miJugada) {
    
        let ganador 
    
        if (jugadaCompu == miJugada) {
            resultado = 'empate'
        } else {
            if (miJugada == piedra  && jugadaCompu == tijeras) {
            ganador = 1
          }  if (miJugada == tijeras && jugadaCompu == papel){
            ganador = 1
          } if (miJugada == papel && jugadaCompu == piedra ) {
            ganador = 1
          }
    
        if (!ganador) {
            resultado = 'Gana la computadora'
        } else {
            resultado = 'Gana el usuario'
        };
    };
        return resultado
    }
    resultado = determinarGanador(jugadaCompu,miJugada);
    console.log('La computadora eligió ' + jugadaCompu + '. El usuario eligió ' + miJugada)
    return resultado
    };
    

function inicio (numeroDeJugadas) {
if (numeroDeJugadas == 1 || numeroDeJugadas == 2 || numeroDeJugadas == 3) {
    resultadoFinal = numeroDeVueltas(numeroDeJugadas)
} else {
    console.log('Error, solo puedes elegir 1, 2 o 3');
while (numeroDeJugadas !== 1 || numeroDeJugadas !== 2 || numeroDeJugadas !== 3) {
    numeroDeJugadas = readlineSync.question('Intentalo otra vez. ')
    if (numeroDeJugadas == 1 || numeroDeJugadas == 2 || numeroDeJugadas == 3){
    break;
        } 
    }
      resultadoFinal = numeroDeVueltas(numeroDeJugadas)
    };
    return resultadoFinal;
}

numeroDeJugadas = readlineSync.question("Bienvenido. Cuantas partidas quieres jugar? ")

function numeroDeVueltas (numeroDeJugadas) {
    if (numeroDeJugadas == 1) {
        resultado = piedraPapelOTijeras()
    } else if (numeroDeJugadas == 2) {
        resultado = partidaDeDosRounds(numeroDeJugadas);
    } else {
        resultado = partidaDeTresRounds(numeroDeJugadas);
    }
    return resultado
}

resultadoFinal = inicio(numeroDeJugadas);
console.log('El resultado fue: ' + resultadoFinal + '.')

       