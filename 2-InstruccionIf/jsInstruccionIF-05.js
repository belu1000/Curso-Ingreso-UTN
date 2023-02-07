function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 13 || edad > 17 )
	{
		alert("No sos adolecente" )
    }
    
	// if (edad >  17) 
	// {
	// alert(" No sos adolecente")
    // }

	// if(edad > 12){
	// 	if (edad < 18) {
	// 		alert("Es adolecente")
	// }  
	// }

}

//FIN DE LA FUNCIÓN
