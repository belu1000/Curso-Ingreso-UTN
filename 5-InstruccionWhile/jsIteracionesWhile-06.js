// Alumna Belen Pantoja dni 39201936 Div J Ejercicios While 6
// Concepto de Acumular
function mostrar() {
let pedirNumero;
let promedio ;
let contador = 0;
let suma = 0;

while (contador < 5) {
	contador = contador + 1;
	pedirNumero = prompt("Escribi 5 numeros");
	pedirNumero = parseFloat(pedirNumero);
	suma = suma + pedirNumero;
}
if (suma == 0) {
	document.getElementById("txtIdPromedio").value = "Error no se puede calcular el promedio de 0";
}
else{
	promedio = (suma / 5).toFixed();
	document.getElementById("txtIdPromedio").value = " El promedio es " + promedio;
}
document.getElementById("txtIdSuma").value = "La suma es " +suma;
}






























// function mostrar() {
// let numeroIngresado;
// let cantidadDeNumeros;
// let acumuladorDeNumeros;
// let promedio;
// let pregunta;

// const LIMITE = 5
// cantidadDeNumeros = 0 
// acumuladorDeNumeros = 0


// alert(cantidadDeNumeros);
// while (cantidadDeNumeros < LIMITE) {
// 	numeroIngresado = prompt("Ingrese  un numero");
// 	numeroIngresado = parseInt(numeroIngresado);

// 	acumuladorDeNumeros = acumuladorDeNumeros + numeroIngresado;//Acumulador

// 	cantidadDeNumeros = cantidadDeNumeros + 1;// contador
// }
// // 
//  promedio = acumuladorDeNumeros / cantidadDeNumeros;
// alert("La cantidad de ingresos fue  " + cantidadDeNumeros);
// alert("La acumulacion fue " + acumulacionDeNumeros);
// alert( "El promedio fue " + promedio);
// }












// function mostrar()
// {
// 	var contador;
// 	var acumulador;
// 	var numeroIngresado;

// 	contador=0;

// 	acumulador=0;
	
// 	while (contador < 3) {
// 		contador = prompt("Ingrese el mombre de la persona"+ contador);
// 		acumulador = parseInt(acumulador);
// 	}

// 	document.getElementById("txtIdSuma").value = acumulador;
// 	document.getElementById("txtIdPromedio.value") = acumulador/5;
// }//FIN DE LA FUNCIÓN




// function mostrar() {
// let suma = 0;
// let promedio;
//   let cantidadNumeros = 5;
//   let i;

//   i = document.getElementById
  
//  while ( i = 0 i < cantidadNumeros; i++) {
//       numeroIngresado = parseInt(prompt('Ingrese un numero:'));
    
//     if (isNaN(numeroIngresado)) {
//       alert('Ingrese un número valido');
//       i--;
//     } else {
//       suma += numeroIngresado;
//     }
//   }
  
//    promedio = suma / cantidadNumeros;
  
//   alert(`La suma de los números es: ${suma}. El promedio es: ${promedio}`);
// }