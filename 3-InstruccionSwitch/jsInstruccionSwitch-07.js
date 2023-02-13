//// // //Alumna Belen Pantoja  39201936 div J   Ejercicio switch 7
function mostrar() {
	let destinoIngresado

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("Sur Argentino");
			break;
		case "Mar del plata":
			alert("Este Argentino");
			break;
		case "Cataratas":
			alert("Norte Argentino");
		default:
			break;
	}
}//FIN DE LA FUNCIÓN