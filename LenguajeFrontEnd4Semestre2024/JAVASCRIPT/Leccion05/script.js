//Arrays

let arrayB = ['AVEO','SWM','PEGEUT','FORD'];
console.log(arrayB.length);

for(let i=0; i<arrayB.length; i++){
    console.log(arrayB[i]);
}

arrayB.forEach(a => {
    console.log(a);
});

arrayB.push("MAZDA");
arrayB.forEach(a => {
    console.log(a);
});

arrayB.pop();
arrayB.forEach(a => {
    console.log(a);
});

// Objeto
let persona = {
    nombre : "Jhon",
    apellido: "perez",
    edad: 12
}

console.log(persona);
console.log(typeof persona.nombre);
console.log(typeof persona.apellido);
console.log(typeof persona.edad);

let arrayObject = [
    { nombre : "Jhon", apellido: "perez", edad: 12},
    { nombre : "Samuel", apellido: "Sanchez", edad: 20},
    { nombre : "Yoslen", apellido: "Pazmiño", edad: 30},
    { nombre : "Roberto", apellido: "Castro", edad: 54}
]

console.log(arrayObject[1]);


let numeroA=7;
let numeroB=2;

let suma = funcionSuma(numeroA,numeroB);
let sumados =funcionSuma(8,10);

function funcionSuma(numeroa,numerob){
    return numeroa+numerob;
}

console.log("La suma es: "+suma);
console.log("La suma es: "+sumados);

