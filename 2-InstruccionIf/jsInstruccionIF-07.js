function mostrar() {
	//tomo la edad  
	let edad;
	let estadoCivil;


	estadoCivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 18) {
		if (edad == " soltero") {
			alert("Es muy pequeño para NO ser soltero");
		}
	}
	else {
		if (edad > 18)

			}

}

//FIN DE LA FUNCIÓN
