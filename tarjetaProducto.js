// obtener los elementos del HTML para guardalos en variables


//Almacena el lugar de destino de mi tarhetita en una constante
const container= document.getElementById ("product-container");
const botonAgregarProducto = document.getElementById ("agregarProductos");


//Almacenar elementos del formularioen cariables e js
var nombreProducto = document.getElementById ("nombreProducto");
var descripcionProducto = document.getElementById ("descripcionProducto");
var imagenProducto = document.getElementById ("imagenProducto");


//console.log(nombreProducto);

function agregarProductos() {
    
//guardo los valores de mis inputs
let valorInputProducto = nombreProducto.value;
let valorInputDescripcion = descripcionProducto.value;
let valorInputImagen = imagenProducto.value;

console.log(valorInputDescripcion);
console.log(valorInputProducto);
console.log(valor);

//Quiero que cada tarjetita tenga su propio div o contenedor
const productCard = document.createElement("div");


    // 1 Crea el elemento
    //El signo de pesos convierte como una plantilla que espera un dato, un marcador ${}
    productCard.innerHTML = `
        <img src="${valorInputImagen}" alt="Producto">
        <h3> ${valorInputProducto} </h3>
        <p> Descripcion: ${valorInputDescripcion}</p>
        <p> Precio: $9.99 </p>
     <button class="btn"> Agregar al carrito </button>
     <br>
     <br>
     <br>
`;




//Agregar esa tarjeta de producto al container especificado (Este es el hijo)
container.appendChild(productCard);

}

//Creamos el evento (Mariana)
botonAgregarProducto.addEventListener ("click",agregarProductos);