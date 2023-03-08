// * Apellido:
//  * Nombre:
//  * Comisión:
//  * Tutor:
//  * 
// Ejercicio 1
// La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
// jugadores que la integran.
// Para ellos se pide realizar una app.

// Se debe ingresar por cada jugador

// -Nombre del jugador
// -Nacionalidad
// -Posición (Arquero, Defensor, Mediocampista o Delantero)
// -Cantidad de Tarjetas Rojas recibidas
// -Goles 

// Se necesita saber

// a)El goleador del torneo
// b)El jugador Argentino con menos rojas recibidas.
// c)El porcentaje de jugadores Ingleses de la liga

// NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.

function mostrar() {
	let nombreJugador;
	let nacionalidad;
	let posicion;
	let cantidadTarjetasRojas;
	let goles;
	let respuesta = false;
	let bandera=false;
	let menorJugadorArgentTarjetasRojas;
	let nombreDelJugadorArgentinoTr;
	let acumuladorIngles=0;
	let porcentajeIngleses;
	let acumulador=0;

	while (respuesta == false) {

		nombreJugador = prompt("Ingrese el nombre del jugador ");

		while (isNaN(nombreJugador) == false) {
			nombreJugador = prompt("Re ingrese el nombre del jugador ");
		}

		nacionalidad = prompt("Ingrese la nacionalidad del jugador ");
		while (isNaN(nacionalidad) == false) {
			nacionalidad = prompt("Re ingrese la nacionalidad");
		}

		posicion = prompt("Ingrese la posicion");
		while (isNaN(posicion) == false || posicion != "Arquero" && posicion != "Defensor" && posicion != "Mediocampista" && posicion != "Delantero") {
			posicion = prompt("Re ingrese la posicion");
		}

		cantidadTarjetasRojas = prompt("Ingresa la cantidad tarjetas rojas");
		cantidadTarjetasRojas = parseInt(cantidadTarjetasRojas);
		while (isNaN(cantidadTarjetasRojas) == false) {
			cantidadTarjetasRojas = prompt("Re ingrese la cantidad tarjetas rojas");
			cantidadTarjetasRojas = parseInt(cantidadTarjetasRojas);
		}

		goles = prompt("Ingresa los goles");
		goles = parseInt(goles)
		while (isNaN(goles) ==true) {
			goles = prompt("Re ingresa los goles")
			goles = parseInt(goles)
		}

		switch (nacionalidad) {
			case "Argentina":
				if(bandera==false){
					menorJugadorArgentTarjetasRojas=cantidadTarjetasRojas;
					nombreDelJugadorArgentinoTr = nombreJugador;
					bandera= true;
				}
				else{
					if(cantidadTarjetasRojas<menorJugadorArgentTarjetasRojas){
						menorJugadorArgentTarjetasRojas=cantidadTarjetasRojas;
						nombreDelJugadorArgentinoTr = nombreJugador;
					}
				}
				
				break;
			case "Ingles":
				acumuladorIngles=acumuladorIngles+goles;
			default:
				break;

		acumulador=acumulador+nombreJugador;
		}

		porcentajeIngleses=(acumuladorIngles/acumulador)*100;





	}


}