/* Crear algoritmo para remover los elementos repetidos en el array:
[1,5,2,3,4,7,1,2,3,5,9,7,5,3,2,0,7,4,1,3,2,4]
 */

var numeros = [1,5,2,3,4,7,1,2,3,5,9,7,5,3,2,0,7,4,1,3,2,4];





/* Numeros del 1 al 100
sustituyendo multiplos de 3 por fizz
multiplos de 5 por buzz */

/* 
for (var index = 1; index <= 100 ; index++)1{
    if (index % 3 == 0 && index % 5 == 0) {
    console.log("fizz buzz");        
    } else if(index % 3 == 0) {
        console.log("buzz");
    } else if(index % 5 == 0) {
        console.log("buzz");
    }
    else {
        console.log("buzz");
    }
} */


/* Ordenar de mayor a menor el siguiente array:
[1,8,4,7,3,6,5,2,0]
 */


/* function ordenar() {
    var lista = [1,8,4,7,3,6,5,2,0];
    var n, index, k, auxiliar;
    n = lista.length;
    console.log(lista); 
    for (k = 1; k < n; k++) {
        for (index = 0;  < (n - k); index++) {
            if (lista[index] > lista[index + 1]) {
                auxiliar = lista[index];
                lista[index] = lista[index + 1];
                lista[index + 1] = auxiliar;
            }
        }
    }

    console.log(lista); 
}
 */