/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	let resultado;

     //asigno el valor del  contenido en el elemento html 
	 // y ese valor lo asigno a la variable 
	 // lectura del valor del contenido en el elemento html
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	// concatenando los datos tomados (procesando)
	resultado = " tu nombre es "+ nombre + " tu edad es "+ edad;
    // le muestro al usuario el resultado del proceso 
	alert(resultado);
}

	
	


