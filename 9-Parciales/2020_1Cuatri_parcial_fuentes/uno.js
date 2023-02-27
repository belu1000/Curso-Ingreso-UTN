// Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
// b) Del tipo con mas unidades, el promedio por compra
// c) Cuántas unidades de jabones hay en total

function mostrar()
{
    let datoProductos;
    let precioProductos;
    let cantidadUnidades;
    let marcas;
    let fabricantes;
    let contadorProductos= 0;
    let acumuladorProductos=0
    const menor = 100;
    const max= 300;
    let precioMenorAlcohol; 
    let unidadesAlcohol;
    let fabricanteAlcohol;
    let banderaPrimeraAlcohol=false;
    let banderaPrimeraMasUnidades= false;
    let  masUnidades;
    let promedioCompras;
    let acumuladorBarbijo=0;
    let acumuladorJabon=0;
    let acumuladorAlcohol=0;
    let contadorBarbijo=0;
    let contadorJabon=0;
    let contadorAlcohol=0;

    while(contadorProductos < 3 ){
        datoProductos = prompt("Ingresa los productos de Prevencion de contagio teniendo en cuenta :  Barbijo,  Jabon , Alcohol");    
    
        // PEDIR TIPO (validar "barbijo" , "jabón" o "alcohol") 
        while(isNaN(datoProductos) == false||datoProductos != "Barbijo" && datoProductos != "Jabon" && datoProductos != "Alcohol"){
            console.log("Error al ingresar el producto("+ datoProductos + ").Entro al while de validacion");
            datoProductos =prompt("Re Ingresa los productos de Prevencion de contagio teniendo en cuenta :  Barbijo,  Jabon , Alcohol");
        }
        
    // PEDIR PRECIO (validar entre 100 y 300)
        precioProductos = prompt("Ingrese precio de productos ");
        precioProductos= parseInt(precioProductos);
        while(isNaN(precioProductos)== true || precioProductos <99 || precioProductos >300){
            precioProductos = prompt("Re Ingresa los precios de los productos");
            precioProductos=parseInt(precioProductos);
        }

    //PEDIR CANTIDAD DE UNIDADES (no puede ser 0 o negativo y no debe superar las 1000 unidades)
        cantidadUnidades= prompt("Ingrese las cantidades de unidades de los productos");
        cantidadUnidades=parseInt(cantidadUnidades);
        while ( cantidadUnidades <=0 || cantidadUnidades >1000){
            cantidadUnidades= prompt("Re ingrese las cantidades de unidade");
            cantidadUnidades=parseInt(cantidadUnidades);
        }
    //PEDIR MARCA
        marcas = prompt("Ingrese las marcas de los productos : Marcas rodo, addidas, loco");
        while(marcas != "rodo" && marcas != "addidas" && marcas != "loco"){
            marcas = prompt("Re ingrese las marcas");
        }
    //PEDIR FABRTICANTE
        fabricantes = prompt("Ingrese los fabricantes : Fabricante kunkun, topo");
        while(fabricantes != "kunkun"&& fabricantes!="topo" ){
            fabricantes = prompt("Re ingrese los fabricantes");
        }
        ////COMPARO EL PRECIO DE LOS ALCOHOLES 
        if(datoProductos== "Alcohol"){
            if(banderaPrimeraAlcohol == false){///USO LA BANDERA PARA ASIGNAR EL - CUANDO NO TENES REFERENCIA 
                precioMenorAlcohol=precioProductos;
                unidadesAlcohol=cantidadUnidades;
                fabricanteAlcohol=fabricantes;
                banderaPrimeraAlcohol= true;
            }
            else{
                if (precioProductos<precioMenorAlcohol){///COMPARO EL MENOR DE LOS ALCOHOLES
                    precioMenorAlcohol = precioProductos;
                    unidadesAlcohol=cantidadUnidades;
                    fabricanteAlcohol=fabricantes;
                }
            }
        }
        switch (datoProductos) {
            case "Barbijo":
                acumuladorBarbijo= acumuladorBarbijo + cantidadUnidades;
                contadorBarbijo= contadorBarbijo + 1;
            case "Alcohol":
                acumuladorAlcohol=acumuladorAlcohol+cantidadUnidades;
                contadorAlcohol= contadorAlcohol + 1;
            case"Jabon":
                acumuladorJabon=acumuladorJabon+cantidadUnidades
                contadorJabon= contadorJabon + 1;
                break;
        }


        contadorProductos= contadorProductos + 1;
        acumuladorProductos= acumuladorProductos + datoProductos;
    
        console.log("Fin de la vuelta nro" + contadorProductos);
    }
    // a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
    alert("El alcohol más varato vale "+precioMenorAlcohol+" Las cantidades son " +unidadesAlcohol+" El fabricante es "+fabricanteAlcohol);
    // b) Del tipo con mas unidades, el promedio por compra
    if(acumuladorBarbijo>acumuladorJabon&&acumuladorAlcohol)
    alert("El tipo con mas unidades es "+masUnidades+"y el promedio es "+promedioCompras);
    // c) Cuántas unidades de jabones hay en total

    alert(datoProductos);
}
