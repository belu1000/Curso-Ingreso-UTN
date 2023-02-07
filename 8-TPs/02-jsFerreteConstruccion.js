/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
// ALUMNA BELEN PANTOJA Divion J
// TP 2 Con CORRECCIONES

function Rectangulo() {
    let altura;
    let base;
    let resultado;
    const cantAlambre = 3;

    altura = document.getElementById("txtIdLargo").value;
    altura = parseFloat(altura);
    base = document.getElementById("txtIdAncho").value;
    base = parseFloat(base);

    // perimetro = 2 * (base + altura)
    resultado = (2 * (base + altura)) * cantAlambre;
    resultado = resultado.toFixed(2);

    alert(" Se necesita un total de  " + resultado + " metros de alambre");

}
function Circulo() {
    let radio;
    const PI = 3.14;
    const CANTIDADALAMBRE = 3;
    let resultado;
    let perimetro;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    // Perímetro de un círculo = 2. π x r
    perimetro = 2 * PI * radio;

    resultado = perimetro * CANTIDADALAMBRE;

    alert("Se necesita un total de " + resultado + " metros de alambre");
}
function Materiales() {
    let altura;
    let base;
    const CEMENTO = 2;
    const CAL = 3;
    let superficie;
    let resultadoCemento;
    let resultadoCal;

    altura = document.getElementById("txtIdLargo").value;
    altura = parseFloat(altura);
    base= document.getElementById("txtIdAncho").value;
    base = parseFloat(base);

    superficie = altura * base;

    resultadoCemento = superficie* CEMENTO;
    resultadoCal = superficie * CAL;

    console.log("ResultaCal: " + resultadoCal+ "tipo de dato " +typeof resultadoCal);

    alert( " Necesitas de cal " + resultadoCal +" Y de cemento " + resultadoCemento );
}