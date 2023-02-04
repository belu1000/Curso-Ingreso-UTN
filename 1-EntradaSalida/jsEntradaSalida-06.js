/*
Cambio test
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
    let resultado;
    

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
    
	// parseInt(numeroUno);
	// parseInt(numeroDos); 

	console.log("Antes de parsear a entero, numeroUno es de tipo " + typeof numeroUno + ", numeroDos es de tipo " + typeof numeroDos);
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	console.log("Despues de parsear a entero, numeroUno es de tipo " + typeof numeroUno + ", numeroDos es de tipo " + typeof numeroDos);

	resultado = numeroUno + numeroDos;

	console.log("El resultado es igual a " + resultado);
	console.log("El resultado es de tipo  " + typeof resultado);
	
    // tipo1 = typeof numeroUno;
	// tipo2 = typeof numeroDos; 
	
	// alert(tipo1);
	// alert(tipo2);
	alert(" la suma de los numero es igual a " + resultado);
}

