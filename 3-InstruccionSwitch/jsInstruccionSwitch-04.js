function mostrar()
{
	//tomo el mes
	let mesDelAño; 
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Enero":
			alert("Tiene 31 dias");
		break
		case " Marzo":
			alert("Tiene 31 dias" );
		case "Mayo":
			alert("Tiene 31 dias" );
		case "Julio":
		    alert("Tiene 31 dias" );
		case "Agosto":
			alert("Tiene 31 dias" );
		case "Octubre":
			alert("Tiene 31 dias" );
		case "Diciembre":
			alert("Tiene 31 dias" );

		break;
		case "Febrero":
			alert("Tiene 28 dias" );

		break;
		case "April":
			alert("Tiene 30 dias" );
		case "Junio":
			alert("Tiene 30 dias" );
		case "Septiembre":
			alert("Tiene 30 dias" );
		case "Noviembre":
			alert("Tiene 30 dias" );
			break;
			
		default:
			break;
	}

}//FIN DE LA FUNCIÓN