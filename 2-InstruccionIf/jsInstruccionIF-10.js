function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let  nuemero;
	nuemero = Math.floor(Math.random()) * 10;

	
		if(nuemero > 4 && nuemero < 8)
		{
		   alert("Aprobado");
			
				if(nuemero >= 9 && nuemero <= 10)
				alert("Exelente");
				else {

				}
			
		   }
		else
		{
			if (nuemero < 4) {
				alert("Vamos,la proxima se puede");
				
			}
		}//FIN DE LA FUNCIÓN
	}
