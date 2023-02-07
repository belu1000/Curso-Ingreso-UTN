/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
// Alumna Belen Pantoja Div J 
// Ejercicio 7
function sumar() {
	let numeroUno;
	let numeroDos;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);


	alert(numeroUno + numeroDos);
}

function restar() {

	let numeroUno;
    let numeroDos;
	let resultado;


	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);
    
	resultado = numeroUno - numeroDos;
	

	alert(" La resta es " + resultado);
}

function multiplicar() {
	let numeroUno;
	let numeroDos;
	let resultado;

	
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno * numeroDos;
    alert("El resultado de la Multiplicacion es  " + resultado);
}

function dividir() {

	let numeroUno;
	let numeroDos;
	let resultado;
    
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroDos = parseInt(numeroDos);
    

	resultado = numeroUno / numeroDos;
	alert("El resultado de la division es  " + resultado);

	console.log("Despues de parcear  entero, numeroUno es de tipo " + typeof numeroUno + ", numeroDos es de tipo " + typeof numeroDos);
	console.log("Resultado es de tipo " + typeof resultado);

}

