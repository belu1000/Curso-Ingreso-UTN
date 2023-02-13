function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	const MAX = 10;
	const MIN = 1;
	//Genero el número RANDOM entre 1 y 10 
	numero = Math.random() * (MAX - MIN) + MIN;
	numero = Math.floor(numero);
	console.log(numero);

	if (numero < 4) {
		alert("Desaprobo");
	}
	else {
		if (numero >= 4 && numero <= 8) {
			alert("Aprobo");
			
		}
		else {
			if (numero >=9 && numero <= 10){
				alert("Excelente");
			}
		}
	}

}
