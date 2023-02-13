function mostrar() {
	//tomo el mes
	let mesDelAño;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias");

			break;
		case "Febrero":
			alert("Tiene 28 dias");

			break;
		case "April":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;

		default:
			break;
	}

}//FIN DE LA FUNCIÓN