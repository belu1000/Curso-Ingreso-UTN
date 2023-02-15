





































// ///////////////////////////////////////////////////////////////////////////////////////////////////////
/// Alumna Belen Pantoja dni 39201396 dIV J TP4 switch  CON CORRECIONES 
function CalcularPrecio() {
let cantidadDelamparas;
let marca;
let precioDescuento;
let precioFinal;
let IIBB;
const PRECIO_LAMP = 35;

cantidadDelamparas = document.getElementById("txtIdCantidad").value;
cantidadDelamparas = parseInt(cantidadDelamparas);

marca = document.getElementById("Marca").value;

switch (cantidadDelamparas) {
    case 5:
        switch (marca) {
            case "ArgentinaLuz":
                precioDescuento = (PRECIO_LAMP *40) /100;
                precioFinal = (PRECIO_LAMP * cantidadDelamparas)  - precioDescuento;
                
                break;
            case "JeLuz":
            case "Hazlluminazion":
            case "Osram":
            precioDescuento = (PRECIO_LAMP * 30) / 100;
            precioFinal = PRECIO_LAMP - precioDescuento;
            break;
        }
    break;
    case 4:
        switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
            precioDescuento = (PRECIO_LAMP * 25) / 100;
            precioFIinal = (PRECIO_LAMP * cantidadDelamparas) - precioDescuento;
                break;
            case "JeLuz":
            case "Hazlluminazion":
            case "Osram":
            precioDescuento = (PRECIO_LAMP * 20 )/ 100;
            precioFinal = (PRECIO_LAMP * cantidadDelamparas) - precioDescuento;
        }
    break;
    case 3:
        switch (marca) {
            case "ArgentinaLuz":
                precioDescuento = (PRECIO_LAMP * 15) /100;
                precioFinal = (PRECIO_LAMP * cantidadDelamparas) - precioDescuento;
            break;
            case "FelipeLamparas":
                precioDescuento = (PRECIO_LAMP * 10) / 100;
                precioFinal = (PRECIO_LAMP * cantidadDelamparas) - precioDescuento;
                break;
        }
    break;
    default :
    if (cantidadDelamparas >=6 ) {
        precioDescuento = (PRECIO_LAMP * 50) /100;
        precioFinal = (PRECIO_LAMP * cantidadDelamparas)  - precioDescuento;
    }
}
document.getElementById("txtIdprecioDescuento").value = precioDescuento;
if (precioFinal >120){
    precioDescuento = (PRECIO_LAMP * 10) / 100;
    precioIIBB = (PRECIO_LAMP * cantidadDelamparas) + precioDescuento;
}
alert("Usted pago" + precioIIBB + " siendo el " + precioDescuento + " que se pago");
}      

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////























































////////////////////////////////////// Profesor ejercicio IF/ELSE
// function CalcularPrecio ()
// {
//     let cantLamparas;
//     let marcLamparas;
//     let descuento;
//     let precioFinal;
//     let precioBruto;
//     let proporcion;
//     let mensaje;
//     const IIBB = 10;
//     const PRECIO_LAMP = 35;

//     descuento = 0;

//     cantLamparas = document.getElementById("txtIdCantidad").value; 

//     cantLamparas = parseInt(cantLamparas);

//     marcLamparas = document.getElementById("Marca").value;

//     mensaje = "Compre: " + cantLamparas + " de la marca: " + marcLamparas + " y obtuve un ";

//     if(cantLamparas > 5)
//     {
//         //Punto "A"
//         descuento = 50;        
//     }
//     else
//     {
//         if(cantLamparas > 4)
//         {
//             if(marcLamparas == "ArgentinaLuz")
//             {
//                 //Punto "B"
//                 descuento = 40;           
//             }
//             else
//             {
//                 descuento = 30;
//             }
//         }    
//         else
//         {
//             if(cantLamparas > 3)
//             {
//                 if(marcLamparas == "ArgentinaLuz" || marcLamparas == "FelipeLamparas")
//                 {
//                     descuento = 25;
//                 }
//                 else
//                 {
//                     descuento = 20;
//                 }                
//             }
//             else
//             {
//                 if(cantLamparas > 2)
//                 {
//                     if (marcLamparas == "ArgentinaLuz")
//                     {
//                         descuento = 15;
//                     }
//                     else
//                     {
//                         if (marcLamparas == "FelipeLamparas")
//                         {
//                             descuento = 10;
//                         }
//                         else
//                         {
//                             descuento = 5;
                    
//                         }
//                     }    
//                 }
//             }
//         }    
//     }
    
//     mensaje = mensaje + descuento + " porcentaje";

//         precioBruto = cantLamparas * PRECIO_LAMP;
    
//     proporcion = (precioBruto * descuento) / 100;

//     precioFinal = precioBruto - proporcion;

//     if(precioFinal>120){
//         proporcion = precioFinal * IIBB/100;
//         precioFinal = precioFinal + proporcion;
//         mensaje = mensaje + "me aplicaron impuestos";
        
//     }
    
//     alert(mensaje);
//     alert(precioFinal);
// }





 ///////////// /////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////
 /////////////////////INTETO 1 BELEN 
// {
// let cantidadDeLamparas;
// let marca;
// let precioDescuento;
// let valorporcentaje;
// let precioFinal;
// const PRECIO_LAMPARAS = 35

// cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
// cantidadDeLamparas = parseInt(cantidadDeLamparas);

// marca = document.getElementById("Marca").value;

// precioDescuento = document.getElementById("txtIdprecioDescuento").value;
// precioDescuento = parseInt(precioDescuento);

// valorporcentaje = (cantidadDeLamparas * PRECIO_LAMPARAS ) / 100;

// precioFinal =  
// if (cantidadDeLamparas >=  6) {
//     descuento = ((valorPorcentaje * 50 ) /100) - 50;
        
//         else {
//             if (valorlamparas == 5)
//             descuento = ((valorPorcentaje * 40) / 100);
            
//             else {
//                 if (can)
//             }
//         }
// }