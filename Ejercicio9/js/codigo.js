let cadena = prompt("Escribe una cadena de texto");
resultado(cadena);

function resultado(cadena) {
  if (cadena == cadena.toLowerCase()) {
    alert("La cadena está formada solo por minúsculas");
  } else if (cadena == cadena.toUpperCase()) {
    alert("La cadena está formada solo por mayúsculas");
  } else {
    alert("La cadena está formada por mayúsculas y minúsculas");
  }
}
