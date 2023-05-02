let numero = prompt("Introduce un número del que quieras saber el factorial.");
var resultado=1;

for (let i = 1; i <= numero; i++) {
  resultado *= i;
}
alert("El factorial del numero " + numero + " es " + resultado);
