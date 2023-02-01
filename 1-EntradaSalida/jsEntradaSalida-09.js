/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
// Alumno Belen Pantoja
function mostrarAumento() {// declaro variables
	let importe;
	let resultado;
	let proporcion;
	const porcentaje = 10;




	// obtengo el valor que me ingresa el user
	importe = document.getElement("txtIdSueldo").value;


	importe = parseInt(importe)
	// sacamos la proporcion en base al porcentaje
	proporcion = (importe * porcentaje) / 100;

	resultado = (importe + proporcion);
	// Incrementamos
	document.getElementById("txtIdResultado").value = resultado;
	alert(importe + proporcion / 100);

}
