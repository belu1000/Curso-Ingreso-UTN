function mostrar() {
	let numero;
	const MAX = 10;
	const MIN = 1;
	//Genero el número RANDOM entre 1 y 10 
	numero = Math.random() * (MAX - MIN) + MIN;
	numero = Math.floor(numero);
	alert(numero);
}//FIN DE LA FUNCIÓN
