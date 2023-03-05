// Segun referencial del parcial

// Ejercicio 3:


// En un gimnasio se necesita un programa que permita ingresar datos de 50 socios Por cada socio, se ingresa:

// Nombre completo,
// Tarifa Base (3500, no se podrá ingresar otro valor),
// Edad (entre 18 y 100 años),
// Altura (en centímetros, mayor a 100 y menor a 250),
// Peso (en kilogramos, mayor a 30 y menor a 200),
// Rutina de entrenamiento: Debe elegir entre las opciones "Cardio", "Musculación" o "Funcional".

// Se pide calcular e informar por alert o document write:

// 1-Los socios que realicen:
//     A-Musculación, tendrán un descuento del 20%.
//     B-Cardio, tendrán un descuento del 20 %.
//     C-Funcional, un incremento del 15%
// 2-La actividad que más recaudó sin considerar el incremento o el descuento.
// 3-La cantidad de socios que hacen Musculación y tienen entre 35 y 40 años de edad inclusive.
// 4-El  Nombre del socio con mayor peso, que hace "Funcional".
// 5-La diferencia entre el total recaudado sin descuento/incremento 
//y el total recaudado con descuento/incremento.


function mostrar() {
	let socioNombre;
	let contadorGenral = 0;
	let acumuladorNeto = 0;
	let tarifaBase;
	let tarifaNeta;
	let altura
	let modificadorPrecio;
	let contadorCardio = 0;
	let contadorMusculacion = 0;
	let contadorFuncional = 0;
	let acumuladorFuncional = 0;
	let acumuladorRMusculacion = 0;
	let acumuladorCardio = 0;
	let diferenciaNetoBruto;
	let cantidSocioMusculacion=0;
	let banderadDelMasPesado=false
	let maximoPeso;
	let nombreDelMasPesado;

	while (contadorGenral < 50) {
		socioNombre = prompt("Ingrese el socio ");

		tarifaBase = prompt("Ingrese la tarifa base");
		tarifaBase = parseInt(tarifaBase);
		while (isNaN(tarifaBase) == false || tarifaBase != 3500) {
			tarifaBase = prompt("Re Ingrese la tarifa");
			tarifaBase = parseInt(tarifaBase);
		}

		altura = prompt("Ingrese la altura");
		altura = parseInt(altura);
		while (isNaN(altura) == false || altura < 100 && altura < 250) {
			altura = prompt("Ingresa la altura");
			altura = parseInt(altura);
		}

		edad = prompt("Ingresa la Edad");
		edad = parseInt(edad);
		while (isNaN(edad) == false || edad < 18 && edad > 100) {
			edad = prompt("Re ingrese la edad");
			edad = parseInt(edad);
		}

		peso = prompt("Ingresa el peso");
		peso = parseInt(peso);
		while (isNaN(peso) == false || peso < 30 && peso < 200) {
			peso = prompt("Re ingrese el peso");
			peso = parseInt(peso);
		}

		rutina = prompt("Ingresa la rutina teniendo en cuenta : Cardio, Musculacion o Funcional");
		while (isNaN(rutina) == false || rutina != "Cardio" && rutina != "Musculación" && rutina != "Funcional") {
			rutina = prompt("Re ingresa la rutina ");
		}

		// 4-El  Nombre del socio con mayor peso, que hace "Funcional".
		switch (rutina) {
			case "Cardios":
				modificadorPrecio = -20;
				contadorCardio = contadorCardio + 1;
				acumuladorCardio = acumuladorCardio + tarifaBase;
				break;
			case "Musculacion":
				modificadorPrecio = -20;
				contadorMusculacion = contadorMusculacion + 1;
				acumuladorRMusculacion = acumuladorRMusculacion + tarifaBase;
				if(edad>=35 && edad <=40){
					cantidSocioMusculacion =cantidSocioMusculacion +1;
				}
				break;
			case "Funcional":
				modificadorPrecio = 15;
				contadorFuncional = contadorFuncional + 1;
				acumuladorFuncional = acumuladorFuncional + tarifaBase;
				if(banderadDelMasPesado=false){
					maximoPeso=peso;
					nombreDelMasPesado = socioNombre;
					banderadDelMasPesado= true;
				}
				else{
					if(peso >maximoPeso){
						maximoPeso=peso;
						nombreDelMasPesado = nombreDelMasPesado;
					}
				}
				break
		}
		tarifaNeta = tarifaBase + (tarifaBase * modificadorPrecio / 100);
		acumuladorNeto = acumuladorNeto + tarifaNeta;
	}//FIN WHILE

	diferenciaNetoBruto = acumuladorCardio + acumuladorFuncional + acumuladorRMusculacion - acumuladorNeto;

	if (acumuladorCardio > acumuladorFuncional && acumuladorCardio > acumuladorRMusculacion) {
		actividadMasRentable = "La actividad mas rentable es Cardio " + acumuladorCardio;
	}
	else {
		if (acumuladorRMusculacion > acumuladorFuncional && acumuladorRMusculacion > acumuladorCardio) {
			actividadMasRentable = "La actividad mas rentable es Musculacion " + acumuladorRMusculacion;
		}
		else {
			actividadMasRentable = "La actividad mas rentable es Funcional " + acumuladorFuncional;
		}
	}

	
	alert(actividadMasRentable);
	alert("La diferencia entre el total bruto y el total neto es de:" + diferenciaNetoBruto);
	alert("El total de los socios que hacen musculacion y tienen entre 35 y 40 años es de :" + cantidSocioMusculacion);
	alerrt("el nombre del socio con mas peso es "+nombreDelMasPesado+" y su peso es"+ maximoPeso);
}//FIN FUNCION
