
/*Sentencias de Control en JavaScript */

let numA = 10;
let numB = 10;


/*IF ->  SI?       ELSE -> CASO CONTRARIO*/    
/*if (numA == numB ){
    console.log("La condicion se cumplio");
} else{
    console.log("La condicion NO se cumplio");
}*/

/* ||  -> O */
if ((numA == numB) || (numA == 8)){
    console.log("La condicion se cumplio");
} else{
    console.log("La condicion NO se cumplio");
}

/* && -> Y */
if ((numA == numB) && (numA > 10)){
    console.log("La condicion se cumplio");
} else{
    console.log("La condicion NO se cumplio");
}


/*Operador Ternario*/
let nota= 2;
console.log(nota > 5 ? "Aprobado" : "Reprobado");

/* Convertir de String a Number*/
let numero = "24";

console.log(typeof Number(numero)); 
console.log(typeof parseFloat(numero));

/* Convertir de Number a String*/
let numeroB = 250;
console.log(typeof String(numeroB));
console.log(typeof numeroB.toString());


/* Ejercicio 01 - Calcular la edad, si es edad> 18 -> devuelve que es un adulto,
otra condicion edad < 18  -> devuelve por consola que es menor de edad
y sino devuelve un mensaje de error*/
//let edad=100;
/*if(edad> 18){
    console.log("Es adulto");
} else if(edad < 18){
    console.log("Menor de edad");
} else{
    console.log("Error");
}*/

/*Ejercicio 02 - Los dias de la semana, coloca un numero del dia de la semana y te de el nombre 
que corresponde */
let diaSemana=100;

switch(diaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
            console.log("Miercoles");
            break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
            console.log("Viernes");
            break;
    case 6:
                console.log("Sabado");
                break;
    case 7:
                    console.log("Domingo");
                    break;
    default:
        console.log("El numero supera al dia de la semana");
}


let numeroWhile=5;

//mientras
while(numeroWhile<10){
    console.log("BucleINFINITO");
    numeroWhile++;
}





