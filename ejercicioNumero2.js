// Función para verificar si un número es primo
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero > 1;
  }
  
  // Solicitar un número al usuario
  let numero = parseInt(prompt("Ingresa un número entero:"));
  
  // Verificar si es primo o no
  if (esPrimo(numero)) {
    console.log(numero + " es un número primo.");
  } else {
    console.log(numero + " no es un número primo.");
  }