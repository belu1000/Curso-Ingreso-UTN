function mostrar()
{
	let estacionIngresada;
    let estacion
	estacionIngresada = document.getElementById("txtIdEstacion").value;
    estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			switch (estacionIngresada){
				case "Bariloche":
					break;
					default:
						mensaje = "No se viaja"
				
			}
			
			break;
		case "Verano":
			switch (estacionIngresada) {
				case "Mar del Plata"
				
			    break;

				default:
					mensaje = "No se viaja"
			}
			break
		case "Otono":
			mensaje = "No se viaja"

			break;
		case "Primavera":
			switch (estacionIngresada) {
				case "Bariloche":
					mensaje = "No se viaja"
					
					break;
			
				default:
					break;
			}
	
		default:
			break;
	}

	switch (estacionIngresada) {
		case Bariloche:
			
			break;
		case "Cataratas":
            switch (estacion) {
				case "Invierno":
					mensaje = "No se viaja ";
					
					break;
			
				default:
					mensaje = "No se viaja;
					break;
			}
	
	alert(estacionIngresada);
	alert(estacion);

}//FIN DE LA FUNCIÓN
}