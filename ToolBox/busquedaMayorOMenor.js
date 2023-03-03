///BUSQUEDA SOLO MAYOR 

if(bandera=false){
    maximo=dato;
    otroDatoDelMayor = otroDatoPedido;
    bandera= true;
}
else{
    if(dato >maximo){
        maximo=dato;
        otroDatoDelMayor = otroDatoPedido;
    }
}

///BUSQUEDA  MAYOR Y MENOR
if(bandera=false){
    maximo=dato;
    minimo=dato;
    otroDatoDelMayor = otroDatoPedido;
    otroDatoMenor = otroDAtoPedido;
    bandera= true;
}
else{
    if(dato >maximo){
        maximo=dato;
        otroDatoDelMayor = otroDatoPedido;
    }
    else {
        if(dato <minimo){
            minimo=dato;
            otroDatoMenor = otroDAtoPedido;
        }
    }    
}
///////////////////////
//COMO LO HACE EL PROFE
// BUSQUEDA DEL MAYOR Y MENOR
if (banderaMasgasto == 'si' || precioFinal > maxGasto) {
    maxGasto = precioFinal; //con esto evaluo
    maxNombre = nombre; // esto muestro
    banderaMasgasto = 'no';
}

if (banderaMinEdad == 'si' || edad < minEdad) {
    minEdad = edad; //con esto evaluo
    minTrabajo = trabajo; // esto voy a mostrar
    banderaMinEdad = 'no';
}