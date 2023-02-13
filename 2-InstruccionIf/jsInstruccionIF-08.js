//Alumna Belen Pantoja  39201936 div J   Ejercicio If  8
function mostrar() {
	//tomo la edad  
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad >= 18 && estadoCivil == "Soltero") {
		alert("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN
