function mostrar()
{
	//tomo la edad  
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad)
	
	soltero = document.getElementById("estadoCivil ").value;

	if(edad > 17 && estadoCivil == "soltero")
	{
		alert("Es soltero y no es menor");

	}


}//FIN DE LA FUNCIÓN
