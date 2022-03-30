
var nombre1 = prompt("Dime tu nombre");
var edad1 = prompt("¿cuál es tu edad?");

var nombre2 = prompt("Dime otro nombre");
var edad2 = prompt("¿cuál es tu edad?"):

var nombre3 = prompt("Dime otro nombre");
var edad3 = prompt("¿cuál es tu edad?"):

if(edad1 > edad2){
    if(edad1 > edad3){
        console.log(nombre1 + "eres mayor que los demás!");
    }
}
if(edad2 > edad1){
    if (edad2 > edad3) {
        console.log(nombre2 + "eres mayor que los demás!");
    }
}

if(edad3 > edad2){
    if (edad2 > edad1) {
        console.log(nombre3 + "eres mayor que los demás!");
    }
}
console.log();
