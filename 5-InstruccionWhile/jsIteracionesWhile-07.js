/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
// Alumna Belen Pantoja dni 39201936 Div J Ejercicios While 7
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let pedirNumero;
	let promedio;
	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta == "si" ) {
		contador = contador +1;
		pedirNumero = prompt("Escribi numero");
		pedirNumero = parseInt(pedirNumero);
		respuesta = prompt("Desea escribir más numeros? ", "si");
		acumulador = acumulador + pedirNumero;
	}
	if (acumulador == 0)  {
		document.getElementById("txtIdPromedio").value= "Error no se puede calcular el promedio de 0";
	}
	else {
		promedio = (acumulador/contador).toFixed(2);
		document.getElementById("txtIdPromedio").value = "El promedio es " + promedio;
	}
	document.getElementById("txtIdSuma").value = "la suma acumulada es " + acumulador;
}//FIN DE LA FUNCIÓN