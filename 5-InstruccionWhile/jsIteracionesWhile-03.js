/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
// Alumna Belen Pantoja dni 39201936 Div J Ejercicios While 3
function mostrar()
{
	let claveIngresada;
	const CLAVE= "utn750";
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != CLAVE) {
		claveIngresada = prompt("Re ingrese el número clave");

	}
	alert("Entraste correctamente");
}//FIN DE LA FUNCIÓN







