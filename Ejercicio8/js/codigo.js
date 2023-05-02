let numero = prompt("Escribe un numero entero");
esPar(numero);

function esPar(numero) {
  if (numero % 2 == 0) {
    alert("El numero " + numero + " es par");
    console.log("El numero " + numero + " es par");
  } else {
    alert("El numero " + numero + " es impar");
    console.log("El numero " + numero + " es impar");
  }
}
