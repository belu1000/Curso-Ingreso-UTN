/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
// Alumna Belen Pantoja dni 39201936 Div J Ejercicios While 8
function mostrar()
{
let contador = 0;
let acumuladorPost =  0;
let pedirDato;
let banderaPositivo=false;
let banderaNegativos= false;
let acumuladorDeNeg= 1;
let respuesta = "si";

while (respuesta == "si") {
	contador = contador + 1;
	pedirDato = prompt("Escribi un numero " );
	pedirDato = parseFloat(pedirDato);
	respuesta = prompt("Desea escribir más numeros ", "si");
	
	if (pedirDato < 0){
		acumuladorDeNeg = acumuladorDeNeg * pedirDato;
		//Para saber si ingreso negativos cambio la bandera a true;
		banderaNegativos = true;
	}
	else {
		if (pedirDato > 0) {
			acumuladorPost = acumuladorPost + pedirDato;
			banderaPositivo = true;
		}
	}
	console.log("El numero es   =  " + pedirDato );
}
if (banderaNegativos == true) {
	document.getElementById("txtIdProducto").value = "El producto de los Negativos es  " + acumuladorDeNeg;
}
else{
	document.getElementById("txtIdProducto").value = "No se ingresaron numeros Negativos ";
}

if (banderaPositivo == true) {
	document.getElementById("txtIdSuma").value = "La suma de los Positivos es  " + acumuladorPost;
}
else{
	document.getElementById("txtIdSuma").value = "No se ingresaron numeros Positivos "
}
}//FIN DE LA FUNCIÓN