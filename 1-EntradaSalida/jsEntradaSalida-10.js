/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
//alumno Belen Pantoja  Div J 
// Ejercicio 10bIs
function mostrarAumento()
{
	let importe;
	let resultado;
	const PORCENTAJE = 25;
	let porcentaje;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
    porcentaje = (importe * 25 ) / 100;
	resultado =  Math.round( importe - porcentaje);
	document.getElementById("txtIdResultado").value = resultado;
}
