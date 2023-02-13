//// // //Alumna Belen Pantoja  39201936 div J   Ejercicio switch 8
function mostrar() {
	let destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace Frio");
			break;
		case "Mar del plata":
			alert("Hace calor");
			break;
		case "Cataratas":
			alert("Hace calor");
		default:
			break;
	}
}//FIN DE LA FUNCIÓN