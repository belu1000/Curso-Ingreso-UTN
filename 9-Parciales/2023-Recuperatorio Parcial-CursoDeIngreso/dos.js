// Segun referencial del parcial
// La heladería “Sabores Octavio” le solicita que realice un programa que se encargue de 
// encuestar a sus clientes y así obtener datos comerciales relevantes. 
// Se pide que ingrese hasta que el usuario quiera:

// Nombre del cliente,
// Edad (desde los 10 hasta los 100),
// Cantidad de helado vendida en gramos (compra mínima 250),
// Sabor de helado (“Vainilla”, “Frutilla”, “Chocolate”).

// Una vez ingresados todos los datos se pide informar mediante alert o document.write:

// 1-Por cada sabor, la cantidad de personas que lo pidieron. 
// 2-Promedio de edad de los clientes que pidieron helado sabor “Frutilla”. 
// 3-Nombre y edad del cliente que compró la mayor cantidad de helado sabor “Chocolate”.
// 4-Informar el sabor más vendido.
function mostrar()
{

    let respuesta= "si";
    let nombreCliente;
    let edadesCliente;
    let cantidadHelados;
    let saborHelados;
    let contadorChocolate=0;
    let contadorFrutilla=0;
    let contadorVainilla=0;
    let banderaChocolate=false;
    let nombreMasChoco;
    let edadClienteMasChoco;
    let saborMasvendido;
    let promedioFrutilla;
    let contador=0;

    while (respuesta=="si") {
        nombreCliente=prompt("Escribi el nombre del cliente ");

        while (isNaN(nombre)==false) {
            nombreCliente=prompt("Re ingresa el nombre del cliente");
        }

        edadesCliente=prompt("Ingresa la edad del cliente");
        edadesCliente=parseInt(edadesCliente);
        while (isNaN(edadesCliente)==true|| edadesCliente<10 && edadesCliente>100) {
            edadesCliente=prompt("Re ingresa la edad del cliente");
            edadesCliente=parseInt(edadesCliente);
        }

        cantidadHelados=prompt("Ingresa la cantidad de helados");
        cantidadHelados=parseInt(cantidadHelados);
        while (isNaN(cantidadHelados)==true||cantidadHelados<250 ) {
            cantidadHelados= prompt("Ingresa las cantidades de helados");
            cantidadHelados=parseInt(cantidadHelados);
        }

        saborHelados=prompt("Ingresa el sabor de helador ");
        while (isNaN(saborHelados)==false|| saborHelados!="Vainilla"&& saborHelados!="Frutilla"&& saborHelados!="Chocolate") {
            saborHelados=prom("Re ingresa los sabores de helador");
        }

        switch (saborHelados) {
            case "Vainilla":
                contadorVainilla=contadorVainilla+1;
                acumuladorVainilla=acumuladorVainilla+saborHelados;
                
                break;
            case "Frutilla":
                contadorFrutilla=contadorFrutilla+1;
                acumuladorFrutilla=acumuladorFrutilla+saborHelados;
                break;
            case "Chocolate":
                contadorChocolate=contadorChocolate+1;
                acumuladorChocolate=acumuladorChocolate+saborHelados;
                if(banderaChocolate==false){
                    maxchocolate=cantidadHelados;
                    nombreMasChoco= nombre;
                    edadClienteMasChoco=edad;
                }
                else{
                    if(cantidadHelados>maxchocolate){
                        maxchocolate=cantidadHelados;
                        nombreMasChoco= nombre;
                        edadClienteMasChoco=edad; 
                    }   
                }
                break;
        }


        contador= contador +1;
        respuesta=prompt("Desea seguir ingresando");
    }
promedioFrutilla=(acumuladorFrutilla/contadorFrutilla)*100;

if(acumuladorFrutilla>acumuladorVainilla && acumuladorFrutilla>acumuladorChocolate){
    saborMasvendido="Frutilla es el sabor mas vendido"+acumuladorFrutilla;
}
else{
    if(acumuladorChocolate>acumuladorFrutilla && acumuladorChocolate>acumuladorVainilla){
        saborMasVendido= "Chocolate es el sabor mas vendido "+acumuladorChocolate;
    }
    else
    saborMasVendido="Vainilla es el sabor mas vendido "+acumuladorVainilla;
}



alert("El promedio de los clientes que consumieron frutilla es "+ promedioFrutilla)
alert("el nombre del cliente que compro mas chocolate es "+nombreMasChoco +"y la edad es "+ edadesCliente);
alert("la cantidad de personas que pidieron Chocolate es "+contadorChocolate+ " ,Vainilla  "+contadorVainilla+ ",Y de Frutilla es "+contadorFrutilla);
alert("El sabor mas vendido es " + saborMasvendido); 
}
