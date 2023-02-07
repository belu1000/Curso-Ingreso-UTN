function mostrar() {
	//tomo la edad

	let edad;
	let esAdolescente;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	
	if (edad >=13 && edad <= 17) {
		alert("sos adolecente");
	}

	
	// 1ERA FORMA
	// if (edad >= 13) {
	// 	if (edad <= 17){
	// 		alert("Es adolecente");
	// 	}
	// }

	// 2DA FORMA
	// if (edad >=13 && edad <= 17) {
	// 	alert("sos adolecente");
	// }

	//3ER FORMA
	// esAdolescente = edad >= 13 && edad <= 17;
	// if (esAdolescente) {
	// 	alert(" Es adolecente");
	// }



}






//FIN DE LA FUNCIÓN
