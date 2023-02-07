function mostrar() {
	//tomo la edad  
	let edad;
	let estadoCivil;


	estadoCivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 18) {
			if (edad == 18)
			{
				alert(" ")
			}
	}
	alert("Es muy pequeño para NO ser soltero");
}
//FIN DE LA FUNCIÓN
