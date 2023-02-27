// VALIDAR QUE SEA UN NUMERO Y ESTE DENTRO DE UN RANGO
let numeroIngresado;
numeroIngresado = prompt("Ingrese un  numero ");
numeroIngresado = parseFloat(numeroIngresado);
while (isNaN(numeroIngresado) == true || numeroIngresado < -1000 || numeroIngresado > 1000) {
   numeroIngresado = prompt("Re ingrese un numero entre 1000 y -1000");
   numeroIngresado = parseFloat(numeroIngresado);
}

//VALIDAR GENERO
let sexoIngresado;
const MASC = "m";
const FEME = "f";
sexoIngresado = prompt("Ingrese su Genero");
while (isNaN(sexoIngresado) == false || (sexoIngresado != FEME && sexoIngresado != MASC)) {
    sexoIngresado = prompt("Re ingrese su Genero");
}