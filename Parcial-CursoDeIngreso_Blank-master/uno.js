// Segun referencial del parcial

// Ejercicio 1:
// Para una tienda de deportes se necesita un programa que permita ingresar los datos de los jugadores de fútbol que han comprado una camiseta, 
// hasta que el cliente quiera. 
// Por cada jugador, se ingresa:

// Nombre del jugador,
// Equipo al que pertenece (validar "Barcelona", "Real Madrid", "Bayern Munich"),
// Posición en el campo (validar "delantero", "defensa", "portero"),
// Edad (entre 18 y 40),
// Precio de la camiseta (más de 5 dígitos, sin ceros a la izquierda).



// Se pide informar por alert o document write:

// 1-El porcentaje de camisetas vendidas por equipo [Barcelona: 40%, Real Madrid: 40%, Bayern Munich: 20%] la suma debe dar 100%.
// 2-El importe total recaudado por la venta de camisetas.
// 3-Promedio de edad de los jugadores que compraron camisetas de Barcelona.

function mostrar() {
	let datoCliente;
	let respuesta = "si";
	let nombre;
	let equipo;
	let posicion;
	let edad;
	let precio;
	const PORCENTAJE_BARCELONA = 40;
	const PORCENTAJE_REAL_MADRID = 40;
	const PORCENTAJE_BAYERN_MUNICH = 20;
	acumPrecioFinal = 0;
	acumuladorBarcelona = 0;
	contadorBarcelona = 0;
	acumuladorRealM = 0;
	contadorRealM = 0;
	acumuladorBayerM = 0;
	contadorBayernM = 0;
	let porcentajefinal;
	
	
	let totalCamisetas = 0;
	let acumEdadJugadores = 0;
	let promedioEdadJugadores;

	while (respuesta == "si") {
		datoCliente = prompt("ingresar los datos de los jugadores de fútbol que han comprado una camiseta")

		nombre = prompt("Ingrese el nobre del jugador");
		while (isNaN(nombre) == false) {
			nombre = prompt("Re ingrese el nombre de los jugadores");
		}

		equipo = prompt("Ingrese los equipos");
		while (isNaN(equipo) == false || equipo != "Barcelona" && equipo != "Real Madrid" && equipo != "Bayern Munich") {
			equipo = prompt("Re ingrese los equipos");

		}

		posicion = prompt("Ingrese la posicion en el campo ");
		while (isNaN(posicion) == false || posicion != "delantero" && posicion != "defensa" && posicion != "portero") {
			posicion = prompt("Re Ingrese la posicion en el campo");
		}

		edad = prompt("Ingrese la edad del jugador");
		edad = parseInt(edad);
		while (edad < 18 && edad > 40) {
			edad = prompt("Re ingrese la edad");
			edad = parseInt(edad);
		}

		precio = prompt("Ingrese los precios de las camisetas");
		precio = parseInt(precio);
		while (isNaN(precio) == true || precio < 9000 && precio > 10000) {
			precio = prompt("Re ingrese el precio ");
		}

		switch (equipo) {
			case "Barcelona":
				acumuladorBarcelona = acumuladorBarcelona + precio;
				contadorBarcelona = contadorBarcelona + 1;
				acumEdadJugadores = acumEdadJugadores + edad;
				break;
			case "Real Madrid":
				acumuladorRealM = acumuladorRealM + precio;
				contadorRealM = contadorRealM + 1;
				break
			case "Bayern Munich":
				acumuladorBayerM = acumuladorBayerM + precio;
				contadorBayernM = contadorBayernM + 1;
				break;
		}
		respuesta = prompt("desea continuar?");
		acumPrecioFinal = acumPrecioFinal + precio;
		
		contador = contador + 1;
	}
	totalCamisetas =acumuladorBarcelona + acumuladorRealM + acumuladorBayerM;
	porcentajeBarcelona = (acumuladorBarcelona / totalCamisetas) * 100;
	porcentajeMadrid = (acumuladorRealM / totalCamisetas) * 100;
	porncentajeBayernMunich = (acumuladorBayerM / totalCamisetas) * 100;

	promedioEdadJugadores = acumEdadJugadores / contador;

	alert("el importe total de camisetas es " + acumPrecioFinal);
	alert("Porcentaje de camisetas de barcelona: %"+porcentajeBarcelona);
	alert("Porcentaje de camisetas de Real Madrid: %"+porcentajeMadrid);
	alert("Porcentaje de camisetas de Bayern Munich: %"+porncentajeBayernMunich);
	alert("El promedio de edad de los jugadores es de :" + promedioEdadJugadores);
}
