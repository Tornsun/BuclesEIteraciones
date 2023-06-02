/*

Bucles e iteraciones o repeticiones

en js es un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo repetir una tarea tantas veces que queramos, gracias a esto automatizamos tareas repetitivas.

-While (mientras)
-Do whilw (hacer mientras)
-For (Para)

While (mientras)
Nos permite repetir un ciclo tantas veces quisieramos, prgunta constantemente hasta que termina la condicion.

---Este bucle nos sirve para realiza una tarea repetititva, mienstars ua condicion sea VERDADERA. A diiferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamete la condicion y ejecuta el bloque de codigo hsta qu ela condicon devueva FALSE.


*/


//Estructura basica de una while
/*
while (tenerSuenio){
    Hacer la dormicion;
}

Ejemplo de un cilo o bucle 
while (true){

    amarAMiCeush ();
    noAmarANadieMas;
} 


let rolDeUsuario ="registrado";

while (!"registrado") {
   function registrarUsuario (){
        console.log("Usuario Registrado");
   }

 }


 dejaloComprar ();





casos de uso de un ciclo While
    -Para verificar si un usuario esta registrado o no
    -Verificamos la disponibilidad de un producto(stock)
    -Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizat informacion, etc..)
    -Recorrer publicaiones de un suaruo
    -Contador de likes
    -Seguimiento de segidores


*/

//let Felipe = "listaDeAmigos"
//let Fernanda= "bloqueada";

//while ("listaDeAmigos") {
    //console.log("Mostrar publicaiones");
    
//}






//codigo de mi sopita de verduritas con pollito
//Declaro e inicializo un array con mis ingredientes

var ingredientes= ["zanahoria", "cebolla", "apio", "papa", "espinacas", "pollito"]; //tenemos 6 elementos

//Declaramos una varaible llamada contador inicializada en 0, para usarla como un contador
var ingredientesAgregadosALaOlla = 0;

//mientas los ingredeintes agregado a la olla sean menos que los ingredientws que me quedasn disponibles...
while (ingredientesAgregadosALaOlla < ingredientes.length){


    //....ire agregando ingredientes a la olla ...
    console.log("agregando " + ingredientes [ingredientesAgregadosALaOlla]+ " a la olla");

    // y voy aumentando el contador para saber cuanso parar.
    ingredientesAgregadosALaOlla ++;

}
console.log("la sopita ya esta lista, yumi");

/*

Do - While (hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa

do{
    //bloque de codigo que vamos a ejecutar
} while (condicion);






*/

/*For (para)

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.


*/

imprimirAsteriscos();
console.log("Ejemplo de la pizza con For")


//Definir mi lista de pasos
var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"]; //3 pasos

//Definir mi lista de tiempo por paso
var tiempoPorPaso = [15, 10, 20];


//En el ciclo for, para cada paso, se tiene un tiempo estimado.

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos, termino el proceso.
for (var i = 0; i < pasosDeReceta.length; i++){

    console.log("Realizando paso " + pasosDeReceta[i]);
    console.log("Esperando " + tiempoPorPaso[i] + " minutos");

}

console.log("Disfruta tu pizza");

/*

Programa para calcular numeros enteros


Escribe un programa que pida al usuario un numero entero, y muestre en pantalla si es un numero primo o no.

Que es un numero primo? es un numero mayor que 1, que solo se puede divir entre 1 y entre si mismo. Ejemplos de numeros primos: 2, 3, 5, 7, 11, 13, 17, 19, etc.

Operaciones que necesitaremos: dvision, comparacion, residuo

*/


//1. Solicitamos al usuario un numero entero
var numeroIngresado = prompt("Ingresa un numero entero");


//2. Evaluamos los dos posibles escenarios: sea o no primo (estado inicial de mis numeros)
var esNumeroPrimo = true;


//3. Operacion para demostrar si es o no es primo
if (numeroIngresado <=1) {
    esNumeroPrimo = false; //demuestro que no es primo, y cambio el estado inicial a false


/*Al calcular el numero primo, se tendran que hacer divisiones desde el 2 hasta el numero que definimos (este sera nuestro tope). Como no queremos hacer tantas divisiones, vamos a marcar un tope hasta la mitad del numero ingresado. 
*/

} else {
    let divisor = 2; //Este es nuestro divisor. Lo inicializamos en 0

    //Mientras el divisor sea menor que el dato ingresado (limite) y el numero ingresado tenga un valor como true (que sea un numero primo), comenzaremos a dividir
    while (divisor <= numeroIngresado/2 && esNumeroPrimo){

        //Si al momento de hacer la division el residuo es igual a cero, se entiende que el numero ingresado es un numero par, por lo que el valor inicial se sobreasignara a false y ahi terminamos el proceso.
        if (numeroIngresado % divisor === 0){
            esNumeroPrimo = false; //no es primo
        }

        //En caso de no encontrar un cero como residuo al hacer la division, se incrementara en uno el valor del divisor, y se volvera a hacer la division (recordar que marcamos el tope para estas operaciones en la mitad del numero ingresado)
        divisor ++; //contador que aumenta los divisores de uno en uno
    }
}


//Mostramos los resultados

if (esNumeroPrimo) {
    console.log(numeroIngresado + " es un numero primo.");
} else {
    console.log(numeroIngresado + " no es un numero primo.");
}