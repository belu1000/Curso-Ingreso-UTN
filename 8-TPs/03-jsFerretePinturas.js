/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centigrados;
    let resultado;
    const VALORFaherenheit = 1.8;
    


    fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit = parseInt(fahrenheit);
	
    centigrados = (fahrenheit - 32) / 1.8;
    resultado = centigrados;

    alert(resultado);

}

function CentigradosFahrenheit () 
{   let centigrados;
    let fahrenheit;
    let resultado;
    const VALORCENTIGRADO = 32
    const VALORFAHERENHEIT = 1.8
    


    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseInt(centigrado);

    fahrenheit = centigrados * 1.8 + 32;
	resultados = fahrenheit

    alert(centigrados + " centigrados es igual a " + resultado + " fahrenheit")
}
