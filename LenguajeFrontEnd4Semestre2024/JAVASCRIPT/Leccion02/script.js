

// let, var, y const
var nombre = "Juan";

const numero = 1;
/*
console.log(numero);
numero = 9;
*/
console.log(typeof numero);


console.log(typeof nombre);
const objetoA = {
    nombre : 'Richard'
}

console.log(typeof objetoA);

let bandera = true;
console.log(typeof bandera);



let llamaFuncion =function miFuncion(){
 console.log("Hola Mundo en javascript");   
}

console.log(typeof llamaFuncion);


var numeroA;
 console.log(typeof numeroA);

 var numeroB=null;
console.log(typeof numeroB);


let numeroZ = 81;
let nombreR = "Joel"
console.log(`Mi nombre es ${nombreR} y mi edad es ${numeroZ}`);

let numA = 15;
let numB = 20
console.log(`La Suma es ${numA+numB}`);


/*
1. Ejercicio Realizar suma, resta, multiplicacion y division
*/
const numeA = 20;
const numeB = 25;
let suma = 0;

suma = numeA + numeB;
console.log("La operación de la suma es igual: "+suma);

const numeC = 25;
const numeD = 20;
let resta = 0;

resta = numeC - numeD;
console.log("La operación de la resta es igual: "+resta);


const numeE = 25;
const numeI = 20;
let multiplicacion = 0;

multiplicacion = numeE * numeI;
console.log("La operación de la multiplicacion es igual: "+multiplicacion);


const numDivA = 10;
const numDivB = 2;
let division = 0;

division = numDivA / numDivB;
console.log("La operación de la division es igual: "+division);


let numIncrement=5;
numIncrement -= 1;
//numIncrement=numIncrement+1
//numIncrement++;
//numIncrement--;
console.log(numIncrement);



let numeroContentA = 5;
let numeroContentB = 7;

// Igual que 
//      5                8
//numeroContentA === numeroContentB   -> false
//        8                8
//numeroContentA === numeroContentB   -> true

/***************************************************** */
//  Operador  !=  -> Diferente de
//      8                8
//numeroContentA != numeroContentB   -> false
//        8                7
//numeroContentA != numeroContentB   -> true

/***************************************************** */
//  Operador  ">"        -> Mayor que
//      8                7
//numeroContentA > numeroContentB   -> true
//        5                7
//numeroContentA > numeroContentB   -> false

/***************************************************** */
//  Operador  "<"        -> Menor que
//      5               7
//numeroContentA < numeroContentB   -> true
//        10               7
//numeroContentA < numeroContentB   -> false

/*let numeroContentA = 5;
let numeroContentB = 7;*/
/***************************************************** */
//  Operador  "<="        -> Menor igual que
//      7               7
//numeroContentA <= numeroContentB   -> true
//        5               7
//numeroContentA <= numeroContentB   -> true
