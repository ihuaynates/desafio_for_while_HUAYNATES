alert(
  "==================================" +
    "\nPrograma con For" +
    "\n\nAdivinar el número random (del 1 al 10) generado por el sistema." +
    "\nTiene 3 intentos" +
    "\n=================================="
);

var numeroRandom = Math.floor(Math.random() * 10) + 1;
var suma = 1;

for (let i = 1; i <= 3; i++) {
  alert("Intento Nro. " + (4 - i));
  var numeroUsuario = parseInt(prompt("Ingrese un número"));

  if (numeroUsuario == numeroRandom) {
    alert("Ganó el juego!!");
    break;
  } else {
    if (numeroUsuario > numeroRandom) {
      alert("El número generado por el sistema es menor al ingresado.");
    } else {
      alert("El número generado por el sistema es mayor al ingresado.");
    }
  }
}

alert("El número ganador es " + numeroRandom);

alert(
  "==================================" +
    "\nPrograma con While" +
    "\n\nAlgoritmo que pida números hasta que se introduzca un cero." +
    "\nSe imprimirá la suma y la media de todos los números introducidos" +
    "\n=================================="
);

var suma = 0;
var promedio = 0;
var cantidad = 0;

do {
  var numero = parseInt(prompt("Ingrese un número"));
  suma = suma + numero;
  if (numero != 0) {
    cantidad = cantidad + 1;
  }
} while (numero != 0);

if (cantidad > 0) {
  promedio = suma / cantidad;
} else {
  promedio = 0;
}

alert(
  "La suma de los número ingresados es: " +
    suma +
    "\nEl promedio de los números ingresados es: " +
    promedio
);
