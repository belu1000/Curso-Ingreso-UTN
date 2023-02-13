//Alumna Belen Pantoja  39201936 div J   Ejercicio If  6
function mostrar() {
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18) {
		alert("Es un adulto");
	}

	else {
		if (edad >= 13 && edad <= 17) {
			alert("Es un adolecente");
		}
		else {
			alert("Es un niño");
		}
	}
}
  //FIN DE LA FUNCIÓN 
