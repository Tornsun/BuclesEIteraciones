// 1. Traer o referenciar todos los elementos del HTMl y lo vamos a guardar en variables para poder utilizarlos despues

//Metodos de seleccion
let numeroContador = document.getElementById("numeroContador");
let botonIncrementar = document.getElementById("botonIncrementar");
let botonDecrementar = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");

//Declarar una variable con un estado inicial
var valorContador = 0;

//Logica de negocio (funciones)
function incrementar() {
    valorContador++;
    numeroContador.innerHTML = valorContador;

    if(valorContador === 10){
        mostrarImagen();
    } else{
        memeRandom.style.display = "none";
    }
}



function decrementar() {
    valorContador--;
    numeroContador.innerHTML = valorContador;
}

function resetear() {
    valorContador = 0;
    numeroContador.innerHTML = valorContador;
}

//Funcion para mostrar la imagen

//La intencion de esta funcion es que cuando sea invocada recorra el arreglo y tome uno de los elementos de forma aleatoria (index)
function mostrarImagen(){
    var coleccionImagenes = ["./assets/img/meme1.png", "./assets/img/meme2.png", "./assets/img/meme3.png", "./assets/img/meme4.png"];

    //Generar un indie aleatorio
    let indexRandom = Math.floor(Math.random() * coleccionImagenes.length);

    //Obtener la URl o direccion de la imagen 
    let urlAleatoria = coleccionImagenes[indexRandom];

    //Agrego la URL al atributo src que deje vacio en el HTML
    memeRandom.src = urlAleatoria;

    //Cambio la propiedad de visualizacion 
    memeRandom.style.display = "block";
}

botonIncrementar.addEventListener("click",incrementar);
botonDecrementar.addEventListener("click",decrementar);
botonResetear.addEventListener("click",resetear);
































