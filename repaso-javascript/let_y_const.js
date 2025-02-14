let nombre = 'Mario';
let apellido = 'Escobar';
apellido = 'Marrero';

let edad = 999;
let fecha = new Date();

// let persona = {
//     nombre: 'Mario',
//     apellido: 'Escobar',
//     edad: 999,
//     fechaDeNacimiento: new Date()
// }

let miFuncion = function duplicar(valor){
    return valor * 2;
}

//console.log(apellido);

const pais = "RD";
//pais = "Mexico"; // no podemos reasignar la variable;

const persona = {
    nombre: 'Mario',
    apellido: 'Escobar',
    edad: 999,
    fechaDeNacimiento: new Date()
}

persona.nombre = 'Eduardo';

persona = {
    nombre: 'Claudia',
    apellido: 'Escobar',
    edad: 999,
    fechaDeNacimiento: new Date()
}

console.log(persona);