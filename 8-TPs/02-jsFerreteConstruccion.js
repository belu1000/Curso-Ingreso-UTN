/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
// ALUMNA BELEN PANTOJA
// TP 2 

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let resultado ;
    const cantAlambre = 3;
    
    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);
    perimetro = document.getElementById("txtIdRadio").value;
    perimetro = parseInt(perimetro);
    

    perimetro + largo * 2 + ancho *2;
    resultado = perimetro * cantAlambre;
    
    alert(" Se necesita un total de  " + resultado);

}
function Circulo () 
{
	let radio;
    let perimetro;
    const PT = 3.14;
    const cantAlambre = 3;
    let resultado;


    radio = document.getElement("txtIdLargo").value;
    radio = parseInt(radio);

    perimetro = 2 * PI * radio;
    alert(perimetro);

    resultado = perimetro * 3;

    alert ("Se necesita un total de " + resultado);




}
function Materiales () 
{   let ancho;
    let largo;
    const CEMENTO = 2;
    const CALL = 3;
    let totalCall;
    let areRectangulo;
    let totalCemento;

    

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);
	
    areRectangulo - ancho * areRectangulo;

    totalCemento = CEMENTO * areaRectangulo;
    totalCall = CALL * areaRectangulo;
    alert (" Se requiere de call " + totalCall " & se necesita " + totalCemento);
}