var valores = [true, 5, false, "hola", "adios", 2];

//Cual de la cadena de String es mayor
let resultado = valores[3] > valores[4];
alert(
  "El valor: " +
    valores[3] +
    " es mayor a el valor: " +
    valores[4] +
    " = " +
    resultado
);

//Compararemos los booleanos
//Primero sacaremos un false
let resultado2 = valores[0] == valores[2];
alert(valores[0] + " es igual a " + valores[2] + " = " + resultado2);
//Y ahora sacaremos un true
let resultado3 = valores[0] || valores[2];
alert(valores[0] + " es diferente a " + valores[2] + " = " + resultado3);

//Que numero es mayor
let resultado4 = valores[1] > valores[5];
alert(
  "El valor: " +
    valores[1] +
    " es mayor a el valor: " +
    valores[5] +
    " = " +
    resultado4
);

let num1 = valores[1];
let num2 = valores[5];

let suma = num1 + num2;
alert("La suma de los valores " + num1 + " y " + num2 + " es : " + suma);

let resta = num1 - num2;
alert("La resta de los valores " + num1 + " y " + num2 + " es : " + resta);

let multiplicacion = num1 * num2;
alert(
  "La multiplicación de los valores " +
    num1 +
    " y " +
    num2 +
    " es : " +
    multiplicacion
);

let division = num1 / num2;
alert("La divisió de los valores " + num1 + " y " + num2 + " es : " + division);

let modulo = num1 % num2;
alert("El módulo de los valores " + num1 + " y " + num2 + " es : " + modulo);
