/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
// alumno Belen Pantoja
// tp n3
function FahrenheitCentigrados() {
    let fahrenheit;
    let resultado;
    const VALORFAHERENHEIT = 1.8;
    const VALORCENTIGRADO = 32;

    fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit = parseInt(fahrenheit);

    resultado = (fahrenheit - 32) / VALORFAHERENHEIT;
    resultado = resultado.toFixed(2);

    // ej: "32 Fahrenheit son 0 centígrados"
    alert( fahrenheit + " Fahrenheit son " + resultado + " Centígrados ");

}

function CentigradosFahrenheit() {
    let centigrados;
    let fahrenheit;
    const VALORCENTIGRADO = 32;
    const VALORFAHERENHEIT = 1.8;

    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseInt(centigrados);

    fahrenheit = centigrados * VALORFAHERENHEIT  + VALORCENTIGRADO;
    fahrenheit = fahrenheit.toFixed(2);

    alert(centigrados + " centigrados es igual a " + fahrenheit + " fahrenheit");
}
