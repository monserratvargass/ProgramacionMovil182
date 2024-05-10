/* Tipo de referencia
Son una agrupacion de datos que hacen sentido tenerlos juntos */

//Personaje de Tv
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", //par llave-valor o propiedad
    anime: "Demon Slayer",
    edad: 16,
}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//Cambiar el valor de la propiedad
personaje.edad = 13;

let llave = 'edad';
personaje['edad'] = 16;

//Eliminar propiedad
delete personaje.anime;
console.log(personaje)