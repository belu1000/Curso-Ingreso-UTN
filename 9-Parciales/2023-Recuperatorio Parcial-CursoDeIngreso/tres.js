// Segun referencial del parcial

// Los alumnos que aprobaron el examen de ingreso de la UTN, fueron a festejar a un bar donde compraron bebidas y comida, 
// al pedir la cuenta deben calcular y dividir los gastos, saben que la mesera tardará media hora en volver con la cuenta 
// por lo que deciden escribir un programa que lo calcule por ellos. 

// Se pide ingresar datos hasta que el usuario quiera:

// Nombre,
// Bebida elegida (“Cerveza”, “Fernet”, “Coca-Cola”),
// Cantidad de bebidas pedidas (no puede ser menor a 1),
// Comida elegida (“Papitas”, “Rabas”, “Hamburguesa”),
// El precio base de cada una de las bebidas es de 500$.
// El precio base de las comidas es de 1000$

// Una vez ingresados todos los datos calcular e informar mediante alert o document.write:

// 1-Informar el total gastado con descuentos y aumentos, teniendo en cuenta que: 
//     A-La “Cerveza” tenía un descuento del 20% sobre el precio base. 
//     B-Las “Rabas” un 50% de aumento de precio base.
// 2-El promedio de dinero gastado por persona (sin incluir propina).
// 3-Sobre el total a pagar, calcular la propina a la mesera (15%). 
// 4-El nombre de la persona que pidió la mayor cantidad de “Fernet”.
function mostrar()
{
	let respuesta="si"
	let bebida;
	let cantidadDeBebidasPerdidas;
	let comida;
	const PRECIOBASEBEBIDAS= 500;
	const PRECIOBASECOMIDA=1000;
	let descuento;
	let nombre;
	let incremento;
	let mayorPersonaFernet;
	let nombrePersFernet;
	let totalButo;

	while (respuesta=="si") {
		
		nombre=prompt("Ingrese el nombre");

		
		bebida=prompt("ingresa la bebida");
		while (isNaN(bebida)==false||bebida!="Cerveza"&&bebida!="Fernet"&&bebida!="Coca-cola") {
			bebida=prompt("Re ingrese la bebida");
		}

		cantidadDeBebidasPerdidas=prompt("Ingrese la cantidad de bebidas perdidas ");
		cantidadDeBebidasPerdidas=parseInt(cantidadDeBebidasPerdidas);
		while (isNaN(cantidadDeBebidasPerdidas)==true|| cantidadDeBebidasPerdidas<1) {
			cantidadDeBebidasPerdidas=prompt("Re Ingrese la cantidad de bebidas perdidas");
		}

		comida=prompt("Ingresa la comida elegida");
		while (isNaN(comida)==false||comida!="Papitas" && comida!="Rabas"&&comida!="Hamburguesas") {
			comida=prompt("Re ingresa la comida ");
		}

		switch (bebida) {
			case "Cerveza":
				decuento=20;
				break;
			case "Fernet":
				if(bandera==false){
					mayorPersonaFernet=cantidadDeBebidasPerdidas;
					nombrePersFernet=nombre;
				}
				else{
					if(cantidadDeBebidasPerdidas>mayorPersonaFernet){
						mayorPersonaFernet=cantidadDeBebidasPerdidas;
						nombrePersFernet=nombre;
					}
				}

				break;
			case "Coca-cola"
		}

		switch (comida) {
			case "Rabas":
				incremento=50;
				break;
		
			default:
				break;
		}





		respuesta=prompt("Desea segur agregando");

	}



alert("EL nombre de la persona con mayor cantidAd de fernet es "+nombrePersFernet);



}	
