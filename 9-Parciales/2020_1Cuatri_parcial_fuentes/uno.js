
function mostrar()
{
let datoIngresado;
let salidaDato;
let cantidadUnidades;
let marca;
let contadorFactura = 0;
const MAXPEDIDOS = 5;

datoIngresado = prompt("Ingrese los productos de prevención de contagio de acuerdo a : A- Barbijo, C-Jabon o alcohol");

while(contadorFactura < MAXPEDIDOS){
    
    
    while (isNaN(datoIngresado)== false
    ||(datoIngresado <99 || datoIngresado >301)) {
        datoIngresado= prompt("Re ingrese los productos de contagio de acuerdo a : A- Barbijo, C-Jabon o alchool");
        }
    
    switch (datoIngresado) {
        case "A":
            salidaDato="Barbijo";
        case "C":
            salidaDato="Jabon";
            salidaDato="alcohol"
            break;
    }
    
    cantidadUnidades =prompt("Ingresa las cantidad de Unidades de acuerdo a las siguientes marcas : L - Marca LOPY, R- Marca RODO, K- Marca KINI,");
    cantidadUnidades = parseInt(cantidadUnidades);
    
    while (cantidadUnidades <= 0 || cantidadUnidades >=1000) {
            cantidadUnidades =prompt("Re ingresa la cantidad de Unidades  de acuerdo a las siguientes marcas : L - Marca LOPY, R- Marca RODO, K- Marca KINI");
            cantidadUnidades = parseInt(cantidadUnidades);
        }
    switch (cantidadUnidades) {
        case "L":
            marca= "LOPY";
            break;
        case "R":
            marca="Rodo";
            break;
        case "k":
            marca = "Kini";
    
            break;
    
        default:
            "Error ingresa las marcas correpondientes"
    
            break;
    }
}

document.write() =cantidadUnidades
}
