// Segun referencial del parcial
// Ejercicio 1


// Para una peluquería se necesita un programa que permita ingresar datos de los trabajos realizados hasta
// que el usuario quiera.
// Por cada trabajo, se ingresa:
// A. Trabajo: ("corte", "tintura", "peinado").
// B. Nombre del cliente,
// C. Edad del cliente (entre 8 y 100)
// D. Precio base (1000).
//
Informar:
// 1. Si el cliente tiene menos de 12 años, tendrá un descuento del 20% sobre el precio base.
// 2. Si el trabajo a realizarse es “corte”, tendrá un incremento del 20% sobre el precio base, si es “tintura”
// 50%.
// 3. El nombre del cliente que mas gasto.
// 4. El trabajo realizado al cliente con menor edad.
// 5. El importe total facturado
// 6. El porcentaje de trabajos realizados Ej: ["corte": 30%, "tintura": 40%, "peinado": 30%]



// Pedir datos por prompt y mostrar por document write o alert.
/////////////////////////////////////////////////////////////////////
// Uno
// Para una peluquería se necesita un programa que permita ingresar datos de los trabajos realizados hasta
// que el usuario quiera.
// Por cada trabajo, se ingresa:
// A. Trabajo: ("corte", "tintura", "peinado").
// B. Nombre del cliente,
// C. Edad del cliente (entre 8 y 100)
// D. Precio base (1000).
// Informar:
// 1. Si el cliente tiene menos de 12 años, tendrá un descuento del 20% sobre el precio base.
// 2. Si el trabajo a realizarse es “corte”, tendrá un incremento del 20% sobre el precio base, si es “tintura”
// 50%.
// 3. El nombre del cliente que mas gasto. => max en base a lo que gasto
// 4. El trabajo realizado al cliente con menor edad. => min o max en base a la edad del cliente
// 5. El importe total facturado => acumulador de precioFinal
// 6. El porcentaje de trabajos realizados Ej: ["corte": 30%, "tintura": 40%, "peinado": 30%] => contador de corte, tintura, peinado
// Pedir datos por prompt y mostrar por document write o alert.


function mostrar() {
	let respuesta = "si"
	let trabajos;
	let nombreCliente;
	let precioProductos;
	const DESCUEN_NIÑO = 20;
	const INCREMENTO_CORTE = 20;
	const INCREMENTO_TINTURA = 50;
	let descuento;
	let incremento_Corte;
	let incremento_Tintura;
	let banderaPrimeravuelta = false;
	let maxCliente;
	let facturaClienteMax;
	let banderaPrimeraMenor= false;
	let menorTrabajoPorEdad;
	let contador =0;
	let acumulador=0;
	let menorClienteEdad;


	while (respuesta == "si") {
		trabajos = prompt("Ingresa los siguientes datos de los trabajos a realizar: corte, tintura, peinado");

		respuesta = prompt("desea seguir ingresando mas trabajos?");
		//trabajos a realizar
		while (isNaN(trabajos) == false || trabajos != "corte" && trabajos != "tintura" && trabajos != "peinado") {
			trabajos = prompt("Re ingrese los trabajos a realizar");
		}
		//nombre cliente
		nombreCliente = prompt("Nombre del cliente");
		while (isNaN(nombreCliente) == false) {
			nombreCliente = prompt("Re ingresa el nombre del cliente");
		}
		//Eddad del cliente
		edadCliente = prompt("Ingresa la edad del cliente");
		edadCliente=parseInt(edadCliente);

		while (edadCliente < 7 && edadCliente > 100) {
			edadCliente = prompt(" Re Ingresa la edad del cliente");

		}
		//precio base
		precioProductos = prompt("Ingrese precio de productos ");
		precioProductos = parseInt(precioProductos);
		while (isNaN(precioProductos) == true || precioProductos < 1000) {
			precioProductos = prompt("Re Ingresa los precios de los productos");
			precioProductos = parseInt(precioProductos);
		}

		if (banderaPrimeravuelta == false) {
			maxCliente = nombreCliente;
			facturaClienteMax = precioProductos; 
			banderaPrimeravuelta = true;
		}
		else {
			if (precioProductos > maxCliente) {
				maxCliente = nombreCliente; 
				facturaClienteMax = precioProductos; 				
			}
		}
		//  El trabajo realizado al cliente con menor edad.
		//TIPS : ME FIJ EN EL DATO PRIMARIO UNA VEZ SACADO EL MINIMO (ESTE CASO LA EDAD), DESPUES DATO SECUNDARIO QUE ES EL TRABAJO .
		// PARA PODER SACAR EL TRABAJO REAZLIZADO CON EL CLIENTE DE MENOR EDAD(SACAR TRABAJO)

		if(banderaPrimeraMenor==false){
			menorTrabajoPorEdad=trabajo;
			menorClienteEdad=edadCliente
		}
		else{
			if(edadCliente<menorClienteEdad){
				menorTrabajoPorEdad=trabajo;	
				menorClienteEdad=edadCliente;	
			}
		}
		contador=contador+1;
		acumulador=acumulador+trabajos;
	}
	///////// FIN WHILE 
	// 1. Si el cliente tiene menos de 12 años, tendrá un descuento del 20% sobre el precio base.
	if (edadCliente < 12) {
		descuento = (precioProductos * DESCUEN_NIÑO) / 100;
		precioProductosDescuento= precioProductos-descuento
		alert("El cliente tiene un descuento del 20% sobre el precio base " + precioProductosDescuento);
	}
	// 2. Si el trabajo a realizarse es “corte” incremento del 20% sobre el precio base, si es “tintura”50%
	switch (trabajos) {
		case "corte":
			incremento_Corte = (precioProductos * INCREMENTO_CORTE) / 100;
			precioProductosIncremento=precioProductos+incremento_Corte;
			break;
		case "tintura":
			incremento_Tintura = (precioProductos * INCREMENTO_TINTURA) / 100;
			precioProductosIncrementoTintura=precioProductos+incremento_Tintura;
			break;
	
		default:

			break;
	}
	if (trabajos === "corte") {
		incremento_Corte = (precioProductos * INCREMENTO_CORTE) / 100;
		precioProductosIncremento=precioProductos+incremento_Corte;
		// alert("El cliente " + nombreCliente + " tiene un aumento del precio base del 20%" + precioProductosIncremento);
	}
	else {
		if (trabajos === "tintura") {
			incremento_Tintura = (precioProductos * INCREMENTO_TINTURA) / 100;
			precioProductosIncrementoTintura=precioProductos+incremento_Tintura;
			// alert("El cliente " + nombreCliente + " tiene un aumento del precio base del 50%" + precioProductosIncrementoTintura);
		}
		
	}
// 3. El nombre del cliente que mas gasto. de todos los clientes quien pago el srv más caro
alert("El cliente con mas gasto es  " + maxCliente+"gasto"+facturaClienteMax);
// 4. El trabajo realizado al cliente con menor edad.
alert("El trabajo realizado ES "+ menorTrabajoPorEdad+ "Y el cliente con menor edad es "+menorClienteEdad)	
// 5. El importe total facturado
acumulador=acumulador+precioProductos;
}