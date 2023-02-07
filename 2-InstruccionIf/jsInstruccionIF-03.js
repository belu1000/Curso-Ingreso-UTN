function mostrar() {

	//tomo la edad 

	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad)

	if (edad > 17) {
		mensaje = " Es Mayor de edad ";

	}
	else {		
		mensaje = " Es menor de edad";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
