let cadenaOriginal = prompt("Escribe una frase y te diré si es un palíndromo");
alert(funcionPalindromo(cadenaOriginal));

function funcionPalindromo(cadena) {
  //Pone en minuscula la cadena y usa el RexEXP para quitar los carácteres no deseados
  var re = /[^A-Za-z0-9]/g;
  cadena = cadena.toLowerCase().replace(re, "");
  var len = cadena.length;
  //Creamos un bucle for para recorrer la cadena de texto
  for (var i = 0; i < len / 2; i++) {
    if (cadena[i] !== cadena[len - 1 - i]) {
      //Siempre y cuando los caracteres de cada parte coincidan, el bucle seguirá
      return "No es un palindromo"; //En cuando no lo hagan saldrá del bucle
    }
  }
  return "Es un palindromo"; //En caso de que ambas partes sean iguales saldra del bucle y nos devolverá un mensaje de confirmación.
}
