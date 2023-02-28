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




function mostrar() {
	let respuesta = "si"
	let trabajos;
	let nombreCliente;
	let precioProductos;


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

		while(edadCliente<7&&nombreCliente>100 ){
			edadCliente = prompt(" Re Ingresa la edad del cliente");

		}
		//precio base
		precioProductos = prompt("Ingrese precio de productos ");
        precioProductos = parseInt(precioProductos);
        while (isNaN(precioProductos) == true || precioProductos <1000) {
            precioProductos = prompt("Re Ingresa los precios de los productos");
            precioProductos = parseInt(precioProductos);
        }

		if(edadCliente <12){
			precio
		}

	}

	alert("El trabajo realizado es "+trabajo + " y el nombre del cliente es  "+nombreCliente+"el precio es "+ precioProductos);
}