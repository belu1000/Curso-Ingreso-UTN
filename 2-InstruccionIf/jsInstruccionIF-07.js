//Alumna Belen Pantoja  39201936 div J   Ejercicio If  6
function mostrar() {
	//tomo la edad  
	let edad;
	let estadoCivil;


	estadoCivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 18) {
		if (estadoCivil == "Casado") {
			alert("Es muy pequeño para  NO ser soltero");
		}
		else {
			if (estadoCivil == "Divorciado") {
				alert("Es muy pequeño para  NO ser soltero");
			}
		}
	}
}
//FIN DE LA FUNCIÓN
