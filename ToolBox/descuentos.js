//DESCUENTOS
if(dato>2 ){
    descuento= (acumuladorPrecioTotalWhileGrande * 5)/100;
}
else{
    (dato>4){
    descuento= (acumuladorPrecioTotalWhileGrande * 10)/100;
    }
}
// segunda forma de resolverla ,como   el profe 
if(dato>2 ){
    descuento= 5;
}
else{
    (dato>4){
    descuento= 10;
    }
}
//FUERA DEL WHILE
resultadoDescuento= (acumuladorPrecioTotalWhileGrande * descuento)/100;

///////COMO LO HACE EL PROFE DENTRO DEL WHILE GRANDE 
// CALCULO DE DESCUENTO
if (edad < 12) {
    descuento = (PRECIO_BASE * 20) / 100;
} else {
    descuento = 0;
}