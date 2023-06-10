//Javascript sincrono

console.log("Inicia Sincrono");
function dosSync() {
    console.log("Se ejecuta la funcion dos");
}

function unoSync() {
    console.log("Se ejecuta la funcion uno");
    dosSync();
    console.log("Se ejecuta el codigo tres");
}

unoSync();
console.log("Fin de Sincrono");

/*
Ejemplos de tareas sincronas

-Ciclos
-Invocaciones a funciones

*/

//Javascript asincrono
console.log("Inicio de Asincrono");
function dosAsync() {
    setTimeout(function () {
        console.log("Dos");
    }, 5000); //tiempo es en milisegundos
}

function unoAsync() {
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Fin de Asincrono");

/*

-Funcion setTimeout
-Notificaciones de cierre de sesion en apps bancarias
-Spotify con su cola de reproduccion
-Conexiones a servidor
-Cargas de APIs

*/

/*

Ya que entenderemos que la asincronia nos servira para conectarnos a un servidor, y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos), es necesario saber que hay varios mecanismos para manejar operaciones asincronas en JS:

-Callbacks: la forma mas clasica de gestionar la asincronia

- Promises: Forma moderna

-Async/Await: forma moderna con una sintaxis mas ligera

*/

function hazClick() {
    console.log("Le hiciste clic al boton");
}


function evento() {
    hazClick();
}

evento();


const boton = document.getElementById("boton");
boton.addEventListener("click", hazClick);

//Ejemplo de Callback

//Defino una funcion que toma un numero y un callback(function) como parametro
function dobleNumero(num, callback) {
    const resultado = num * 2; //operacion comun y corriente
    callback(resultado);//invocacion de ese callback con el resultado como parametro
}

//Definir una funcion para mostrar el resultado
function mostrarResultado(resultado) {
    console.log("El resultado es: ", resultado);
}

/*

Promises (promsesas)

Son otro mecanismo para manejar la asincronia. Utilizar promesas hace que el codigo sea mas legible y practico que el usar callbacks, y como su nombre lo indica una promesa es algo que en un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola funcion (metodo) para manejar los callbacks.

NOTA: Las promesas son objetos

promise.then

promise.fetch

Las promesas tienen estados:

-Pendiente (pending): Es el estado inicial de nuestra promesa, aqui aun no tenemos resultados

-Fullfilled: Cuando la operacion asincrona se completa con exito (resolve)

-Rejected (rechazo): Cuando la operacion falla (reject)



Tambien las promesas, al ser un objeto tienen metodos

-then(function resolve): Ejecuta un callback llamado  resolve cuando la promesa se cumple.

-catch(function reject): Ejecuta un callback llamado reject cuando la promesa se rechaza

-then (resolve reject): Puedo ejecutar las dos funciones en el mismo metodo then.

*/

//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos

function obtenerProductos() {
    //Cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function (resolve, reject) {
        fetch('https://fakestoreapi.com/products')//Direccion donde me voy a conectar y buscar
            .then(function (response) {
                if (response.ok) {//Propiedad booleanad (si o no hay respuesta)
                    return response.json();//Metodo para cnovertir la respuesta a un objeto json
                } else {
                    throw new Error("Error al obtener los productos");
                }
            })
            .then(function (data) {
                resolve(data);
            })
            .catch(function (error) {
                reject(error);
            });
    });

};

//Uso de la promesa

obtenerProductos()
    .then(function (resultado) {
        console.log(resultado);
    })

    .catch(function (error) {
        console.log(error)
    });

    //Otro ejemplo de promesa para validar un nombre

    let nombre = "Felipe";

    const promesaNombre = newnPromise (function(resolve, reject){

    })

    const obtenerPokemon = new Promise((resolve, reject) =>{
        fetch('https://pokeapi.co/api/v2/pokemon/ditto') //me conecto y busco
        .then(respuesta =>{ //cuando se conecte...
            if(respuesta.ok){ //si la conexion es ok
                return respuesta.json(); //guardo el dato en .json
            } else { // si no me conecto---
                throw new Error("Error 404"); //muestra un error 
            }
        })
    
        //Segundo bloque (cuando ya me conecte al servidor)
        .then(datos =>{
            resolve(datos);
        })
    
        //tercer bloque (solo en caso de que no se encuentre informacion)
        .catch(error =>{
            reject("Mensaje de error, no encontramos tu pokemon" + error);
        });
    });
    
    //Ya que le dij el emnsaje a mi mesero (creacion de la promesa), ahora voy a poder mostrar la informacion si la promesa se resuelve (encuentra la info), o si se rechaza (no encuentral a info)
    
    obtenerPokemon
    .then(pokemon =>{ //el valor pokemon = datos obtenidos del servidor en .json
        console.log("Pokemon obtenido", pokemon.name);
    })
    
    .catch(error =>{
        console.log(error);
    })

    //Primer bloque para la conexion del servidor
const obtenerPokemon = new Promise((resolve, reject) =>{
    fetch('localhost:8080/proyectoIntegrador/inflables') //me conecto y busco

    .then(respuesta =>{ //cuando se conecte...
        if (respuesta.ok){ //si la conexion es ok
            return respuesta.json(); //guardo el dato en .json
        } else { //si no me conecto...
            throw new Error ("Error 404"); //muestro un error
        }
    })

    //segundo bloque (cuando ya me conecte al servidor y encontro la info)
    .then(datos =>{ //entonces esos datos...
        resolve(datos); //se usan como parametro de mi resolucion
    })

    //tercer bloque (solo en caso de que no se encuentra informacion)
    .catch(error =>{
        reject("Mensaje de error, no encontramos tu pokemon" + error);
    });

});


//Ya que le di el mensaje a mi mesero (creacion de la promesa), ahora voy a poder mostrar la informacion si la promesa se resuelve (encuentra la info), o si se rechaza (no encuentra la info)

obtenerPokemon

.then(pokemon =>{ //el valor pokemon = datos obtenidos del servidor en .json
    console.log("Pokemon obtenido" , pokemon.name);
})
.catch(error => {
    console.log(error);
});

