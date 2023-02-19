/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
let numeroIngresado ;
let respuesta = "si";
let min;
let max;
let banderaPriVuelta = false;

while (respuesta == "si" ) {
     numeroIngresado = prompt("Ingrese un  numero ");
     numeroIngresado = parseFloat(numeroIngresado);

     //Para saber si estamos en la primera vuelta o no 
    if(banderaPriVuelta == false){
        max = numeroIngresado;
        min = numeroIngresado;

        banderaPriVuelta = true;
    }
    //Se va ejecutar a partir de la segunda vuelta
    else{
        if (numeroIngresado > max  ) { 
            max = numeroIngresado;
        }
        else{
            if (numeroIngresado < min ) {
                min = numeroIngresado;
            }
        }
    }

        
    respuesta = prompt("Desea Ingresar más numeros ", "si");
}
document.getElementById("txtIdMaximo").value = "Tu maximo es  " + max;
document.getElementById("txtIdMinimo").value ="Tu minimo es " + min;



	
}





























// function mostrar()
// {	// declarar variables
// 	let banderaDelPrimero;
// 	let numeroIngresado;
// 	let numeroMaximo = 10
// 	let numeroMinimo = 0
// 	let respuesta;
// 	let contador;
// 	//iniciar variables
// 	banderaDelPrimero=0;
// 	respuesta='s';

// 	contador=0;

// 	while(respuesta=="s")
// 	{
// 		numeroIngresado = prompt("Ingrese un numero");
// 		numeroIngresado = parseInt(numeroIngresado);
// 		respuesta=prompt("desea continuar?");
// 		if (banderaDelPrimero == 0) 
// 		{
// 			numeroMaximo = numeroIngresado;
// 			numeroMinimo = numeroIngresado;
// 			banderaDelPrimero = 1

// 			contador = contador + 1;
// 			if (contador == 1)
// 			{
// 				numeroMaximo = numeroIngresado;
// 				numeroMinimo = numeroIngresado;
// 			}
			
// 			else
// 			 {
// 				if (numeroIngresado > numeroMaximo){
// 					numeroMaximo = numeroIngresado;
// 				}
// 				if (numeroIngresado < numeroMinimo){
// 					numeroMinimo = numeroIngresado;
// 				}
// 			}
// 		}
		
// 		respuesta = prompt("Desea continuar");

// 	}
// 	document.getElementById("txtIdMaximo").value=numeroMaximo;
// 	document.getElementById("txtIdMinimmo").value=numeroMinimo;
// }//FIN DE LA FUNCIÓN