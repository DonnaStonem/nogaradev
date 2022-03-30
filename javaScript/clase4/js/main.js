/*  ARRAYS 

var edad = 20;
var nombre = 'Donna';
var casada = false;
var telefono = 223242;
var hijos = false;

var frutas = [
    'manzana', 
    'pera', 
    'ciruela', 
    'mango'];

    console.log(frutas);
     INDEFINIDO: Es un tipo de dato
    con un valor 0 o falso.
    Es un valor que no existe.
    NO se declara, no se define, solo lo 
    regresa la consola.
    

 */

/* 
var infoUser = [];
infoUser[0] = prompt("Nombre: ");
infoUser[1] = prompt("Edad: ");
infoUser[2] = prompt("Teléfono: ");
infoUser[3] = confirm("Casada: ");
infoUser[4] = prompt("Hijos: ");

console.log(infoUser); */


frutas = ['toron', 'kiwi'];
console.log(frutas);


frutas[0] = 'toronja'
console.log(frutas);

frutas[2] = 'coco';
frutas[3] = 'piña';

console.log(frutas);

var index = 0;

for (let i = 0; i < 4; i++) {
    console.log(frutas[index]);
}

for(let i = 0; i < 4; i++){
    console.log("Holi");
}

for(let i = 0; i < 4; i++){
    console.log(frutas[i]);
}


var imagenes = [
    'img/bob.jpg', 
    'img/boblentes.jpg', 
    'img/cangrejo.jpg', 
    'img/imagination.jpg',
    'img/larry.jpg',
    'img/patybob.jpg'];