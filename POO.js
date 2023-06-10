
/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/

//Arreglos(objeto)

var casaArreglo = [3, 2, 1, 4, 2, "Verde", 6, "Rojo"];

//Creacion de un objeto casa

const casa = {
    numHabitaciones: 3,
    numPisos: 2,
    numBanios: 1,
    color: "Rojo",
};

//casa[indice]; //Normalmente se hace con un arreglo

console.log("El color de mi casa es ", casa.color);

//Plantilla para repetir 50 veces la misma casa

//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (key) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa informacion se va a ir personalizando.

class casaPlantilla {
    //1.- Definir mis propiedaddes como variables, para posteriormente agregarle valores

    numHabitaciones = 0;
    numPisos = 0;
    numBanios = 0;
    color = "";

    //3._Definir una funcion constructora. Esta funcion es una funcion especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlas como parametros de construccion y asi poder instanciar nuestro objeto.


    //Los parametros se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable correspondiente
    constructor(numHabitaciones, numPisos, numBanios, color){
this.numHabitaciones = numHabitaciones;
this.numPisos = numPisos;
this.numBanios  = numBanios;
this.color = color;
    }

    //2.-Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto

    encenderLuces() {
        console.log("Click, luces encendidas");
    }

    abrirVentanas() {
        console.log("Swiiiiift, ventanas abiertas");
    }

    guardarmeDelFresnito() {
        console.log("Que agusticidad");
    }

    imprimirInfoDeLaCasa() {
        console.log("El numero de habitaciones es de: ", this.numHabitaciones);
    }

}

//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.)

/*Instanciar objetos

Para instanciar objectos, usamos la siguiente sintaxis:

variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);

*/


//Tengo una variable llamada "Casa de Felipe", que es un nueevo objeto de la clase "casa Plantilla" y que tiene los siguientes parametros
let casaDeFelipe = new casaPlantilla (6, 3, 3, "azul");
let casaDecasaDeMiguel = new casaPlantilla (6, 3, 3, "azul");
let casaDeAle = new casaPlantilla (6, 3, 3, "azul");
let casaDeDavid = new casaPlantilla (6, 3, 3, "azul");

//Ejemplo de POO con gatitos

class gatitos {
    //1.- Propiedades
    nombre = "";
    edad = 0;
    tamanio = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

//3.-Constructor

constructor (nombre, edad, tamanio, caracter, numeroVidas, color, raza, vacunas) {
this.nombre = nombre;
this.edad = edad;
this.tamanio = tamanio;
this.caracter = caracter;
this.numeroVidas = numeroVidas;
this.color = color;
this.raza = raza;
this.vacunas = vacunas;
}

    //2.- Metodos
    imprimirInfo(){

    };

    maullar(){
console.log("Miauuuuu");
    };

    rasguniar(){
console.log("El gato ha rasguniado el sillon");
    };

    ronronear(){
console.log("Rrrrrrrrr");
    };

    cuidarGato(){
        if(this.numeroVidas < 3){
            console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }
}

//Instanciar

let juanchoDelCampo = new gatitos ("Juancho Del Campo", 5, "Grande", "Tranquilo, vive en la agusticidad", 7, "Pardo", "Angora", true);

let granola = new gatitos ("Granola", 2, "Grande", "Ininteresada", 7, "Multicolor", "Angora", true);

let gustavito = new gatitos ("Gustavito", 3, "Grande", "Enfadoso", 7, "Naranja", "Angora", true);

let renata = new gatitos ("Renata", 2, "Grande", "Calmada", 2, "Multicolor", "Angora", true);

let coco = new gatitos ("Coco", 2, "Grande", "Dulce", 7, "Blanco", "Angora", true);

/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para deserializar un objeto JSON, vamos a utilizar un metodo llamado JSON.parse (objeto que queremos deserealizar)

let objetoDeserializado = (JSON.parse(objetoSerializado));

console.log(objetoDeserializado);