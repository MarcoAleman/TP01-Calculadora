
let operaciones = require('./Funciones');
let process = require('process');
//const { Dividir } = require('./Funciones');

//console.log(process.argv); //me muestra la ruta y me lee los parametros que paso



//console.log(process.argv[0]);// me muestra la ruta del node
//console.log(process.argv[1]); //me muestra la ruta del archivo

let operacion = (process.argv[2]);
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);

console.log(operacion, a, b);

switch (operacion){
    case ("sumar" || "+"): 
        console.log(`La suma de ${a} y ${b} es igual a ${operaciones.Sumar(a,b)}`);
        break;
    case ("restar" || "-"):
        console.log(`La resta de ${a} y ${b} es igual a ${operaciones.Restar(a,b)}`);
        break;
    case ("multiplicar" || "*"):
        console.log(`La multiplicación de ${a} y ${b} es igual a ${operaciones.Multiplicar(a,b)}`);
        break;
    case ("dividir" || "/"):
        a == 0 || b == 0 ? 
            console.log(operaciones.Dividir(a,b)) :
            console.log(`La division de ${a} y ${b} es igual a ${operaciones.Dividir(a,b)}`)
}

//No acepta la segundas opciones.