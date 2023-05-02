let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

let numero = prompt("Escribe tu DNI sin la letra");
let letra = prompt("Escribe la letra de tu DNI").toUpperCase(); //pasamos la letra a mayusculas

if (numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
} else {
  let resto = numero % 23;
  let letraSel = letras[resto];
  if (letra != letraSel) {
    alert("La letra indicada no es correcta");
  } else {
    alert("El numero " + numero + " y  la letra " + letra + " son correctos");
  }
}
