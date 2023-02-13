function mostrar() {
	let estacionIngresada;
	let destino;
	let PRECIOFIJO = 15000
	let porcentajeMonto;
	let precioFinal;
	estacionIngresada = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					porcentajeMonto = (PRECIOFIJO * 20) / 100;
					precioFinal = PRECIOFIJO + porcentajeMonto;
					break;
				case "Mar del plata":
					porcentajeMonto = (PRECIOFIJO * 20) / 100;
					precioFinal = PRECIOFIJO - porcentajeMonto;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentajeMonto = (PRECIOFIJO * 10) / 100;
					precioFinal = PRECIOFIJO - porcentajeMonto;
					break;
			} 
		}

			switch (estacionIngresada) {
				case "Verano":
					switch (destino) {
						case "Bariloche":
							porcentajeMonto = (PRECIOFIJO * 20) / 100;
							precioFinal = PRECIOFIJO - porcentajeMonto;
							break;
						case "Mar del plata":
							porcentajeMonto = (PRECIOFIJO *20) / 100;
							precioFinal = PRECIOFIJO + porcentajeMonto;
							break;
						case "Cataratas":
						case "Cordoba":
							porcentajeMonto = (PRECIOFIJO * 10) / 100;
							precioFinal = PRECIOFIJO + porcentajeMonto;
							break;
					}
					break;
			}

			switch (estacionIngresada) {
				case "Primavera":
				case "Otoño":
					switch (destino) {
						case "Bariloche":
							porcentajeMonto = (PRECIOFIJO * 10) / 100;
							precioFinal = PRECIOFIJO + porcentajeMonto;
							break;
						case "Mar del plata":
							porcentajeMonto = (PRECIOFIJO * 10) / 100;
							precioFinal = PRECIOFIJO +porcentajeMonto;
							break;
						case "Cataratas":
							porcentajeMonto = (PRECIOFIJO* 10) / 100;
							precioFinal = PRECIOFIJO + porcentajeMonto;
							break;
						case "Cordoba":
							precioFinal = PRECIOFIJO;
						default:
							break;
					}
					break;
			}
alert(" Este es su precio Final " + precioFinal);

}//FIN DE LA FUNCIÓN