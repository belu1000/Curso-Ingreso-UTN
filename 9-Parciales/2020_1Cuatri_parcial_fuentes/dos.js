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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















function mostrar()
{
  let datoIngresado;
  let respuesta="si"
  let cantidadBolsa;
  let contador=0;
  let acumulador=0;
  let contadorArena=0;
  let contadorCal=0;
  let contadorCemento=0;
  let acumuladorArena=0;
  let acumuladorCal=0;
  let acumuladorcemento=0;
  const DESCUENTOBAJO=15;
  const DESCUENTOALTO=25;
  let totalPagarSinDescuento;
  let totalPagarConDescuento;

  while (respuesta=="si") {
    datoIngresado=prompt("Ingresa los datos de la compra : arena , cal, cemento");
    
    while (isNaN(datoIngresado)==false|| datoIngresado=="arena"&&datoIngresado=="cal"&&datoIngresado=="cemento"){
      console.log("Error al ingresar el producto(" + datoProductos + ").Entro al while de validacion");
      datoIngresado = prompt("Re ingresa los productos de la compra ");
    }
    Pedircantidades 
    cantidadBolsa=prompt("Cuantas  bolsas desea ingresar");
    cantidadBolsa=parseInt(cantidadBolsa);
    while ( isNaN(cantidadBolsa)==false|| cantidadBolsa>0) {
      cantidadBolsa=prompt("Re ingrese cuantas cantidades desea ingresar");
      cantidadBolsa=parseInt(cantidadBolsa);
    }
    Pedirprecioporbolsa
    precioXbolsa=prompt("Ingrese el precio por bolsa");
    precioXbolsa=parseInt(precioXbolsa);
    while (isNaN(precioXbolsa)==false||precioXbolsa>0) {
      precioXbolsa=prompt("Re ingrese el precio por bolsa");
      precioXbolsa=parseInt(precioXbolsa);

    }
    
    switch (datoIngresado) {
      case "arena":
        acumuladorArena=acumuladorArena+datoIngresado;
        contadorArena=contadorArena+1;
      case "cal":
        acumuladorCal=acumuladorCal+datoIngresado;
        contadorCal=contadorCal+1;
      case "cemento":
        acumuladorCemento=acumuladorcemento+datoIngresado;
        contadorCemento= contadorCemento+1;
          break;
        }
    
    if(cantidadBolsa>10){
      porcentaje=(precioXbolsa*DESCUENTOBAJO)/100;
    }
    else{
      if(cantidadBolsa>30){
        porcentaje=(precioXbolsa*DESCUENTOALTO)/100;
      }
    }




        contador= contador+1
        acumulador=acumulador+datoIngresado
        
        
        respuesta= prompt("Desea seguir ingresando ","si");

  }
  

alert("El importe total a pagar sin descuento es  ")

}
