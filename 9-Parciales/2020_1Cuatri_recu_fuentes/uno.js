// Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más caro de los jabones, la cantidad de unidades y el fabricante
// b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
// c) Cuántas unidades de Barbijos se compraron en total


function mostrar()
{
	let tipoDeProducto;
	let precio 
	let cantidadUnidades;
	let marca;
	let fabricante;
	const MAX_PEDIDOS= 5;
	let contador=0;
	
	while( contador< MAX_PEDIDOS){
		tipoDeProducto=prompt("Ingresa los tipos  productos");

		while (tipoDeProducto==false||tipoDeProducto!="barbijo"&&tipoDeProducto!="jabon"&&tipoDeProducto!="alcohol") 
		{
			tipoDeProducto=prompt("Re ingresa los tipos de productos ")
		}

		precio=prompt("Ingrese el precio de los productos ");
		precio=parseInt(precio)
		while (isNaN(precio)==false||precio<99 && precio>301) 
		{
			precio=prompt("Re ingrese los precio de los productos ");
			precio=parseInt(precio);
		}
		
		cantidadUnidades=prompt("Ingresa las cantidades de los productos");
		cantidadUnidades=parseInt(cantidadUnidades);
		while (isNaN(cantidadUnidades)==false|| cantidadUnidades<=0 && cantidadUnidades>=1001) {
			cantidadUnidades=prompt("Re ingresa las cantidad de Unidades de los productos ");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marca=prompt("Ingresa las marcas de los productos teniendo en cuenta las mismas : loco y pipo");
		while (isNaN(marca)==true|| marca!= "Loco" && marca!= "pipo")
		{
			marca=prompt("Re ingresa las marcas de los productos en cuenta las mismas : loco o pipo");

		}
		fabricante=prompt("Ingresa los fabricantes teniendo en cuenta : lala o bm");
		while (isNaN(fabricante)==true|| fabricante!= "lala" && fabricante!= "bm") 
		{
			fabricante=prompt("Re ingresa los fabricantes en cuenta : lalao bm");
		}
		
		
		
		
		contador = contador + 1;    
	}
alert("el producto que ingreso es "+productos)




}
