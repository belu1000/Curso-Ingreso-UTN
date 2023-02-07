/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
// Alumno Belen Pantoja Div J 
// Ejerecicio 9 bis
function mostrarAumento() {// declaro variables
	let importe;
	let resultado;
	
	const porcentaje = 10;
	// obtengo el valor que me ingresa el user
	importe = document.getElementById("txtIdSueldo").value;

	// Metodo 2
	importe = parseInt(importe);
	resultado = importe * 1.10;
	
	resultado = Math.round(resultado);
	document.getElementById("txtIdResultado").value = resultado;
	
	

}

// importe = parseInt(importe);
// Metodo 1 en el porcentaje
// sacamos la proporcion en base al porcentaje
// proporcion = (importe * porcentaje) / 100;
// resultado = (importe + proporcion);


// Metodo 2
// proporcion = importe * 0.10;
// resultado = (importe + proporcion);
// alert(resultado);

//mETODO 3
// resultado = importe * 1.10;
// resultado = parseInt(resultado);


