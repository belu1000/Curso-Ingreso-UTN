//Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
//Tipo validad("arena";"cal";"cemento")
//Cantidad de bolsas,
//Precio por bolsa (más de cero ),

// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)
// d) Informar el tipo con mas cantidad de bolsas.
// f) El tipo mas caro


function mostrar()
{
  let datoIngresado;
  let respuesta="si"
  let cantidadBolsa;
  let contador=0;
  let acumulador=0;

  while (respuesta=="si") {
    datoIngresado=prompt("Ingresa los datos de la compra : Arena , Cal, Cemento");
    
    while (isNaN(datoIngresado)==false|| datoIngresado=="arena"&&datoIngresado=="cal"&&datoIngresado=="cemento"){
      console.log("Error al ingresar el producto(" + datoProductos + ").Entro al while de validacion");
      datoProductos = prompt("Re ingresa los productos de la compra ");
    }
    //Pedir cantidades 
    cantidadBolsa=prompt("Cuantas  bolsas desea ingresar");
    cantidadBolsa=parseInt(cantidadBolsa);
    while ( isNaN(cantidadBolsa)==false|| cantidadBolsa>0) {
    }
    //Pedir  precio por bolsa
    precioXbolsa=prompt("Ingrese el precio por bolsa");
    precioXbolsa=parseInt(precioXbolsa);
    while (isNaN(precioXbolsa)==false||precioXbolsa>0) {
    }
    
    switch (key) {
      case value:
        
        break;
        
        default:
          break;
        }
        
        contador= contador+1
        acumulador=acumulador+datoIngresado
        
        
        respuesta= prompt("Desea seguir ingresando ","si");

  }
  



}
