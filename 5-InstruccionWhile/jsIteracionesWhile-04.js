/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar(){
		let pedirDato;
		const MAXIMO = 9;
		const MINIMO = 0;

		pedirDato = prompt(" Ingrese un numero entre 0 & 9");
		pedirDato = parseInt(pedirDato);
	
		while (isNaN(pedirDato) ||pedirDato >=MAXIMO ||pedirDato <= MINIMO) {
			pedirDato = prompt("Re ingrese otro numero entre 0 & 9");
			pedirDato = parseInt(pedirDato);
		}
		document.getElementById("txtIdNumero").value = "Ingresaste " +  pedirDato;
	}
// }
// function mostrar() {
// 	let pedirDato;
// 	const MAXIMO = 9;  
  
// 	pedirDato = prompt("Ingrese un número entre 0 y 9");
// 	pedirDato = parseInt(pedirDato);
  
// 	while (isNaN(pedirDato) || pedirDato >= MAXIMO) { {
// 	  pedirDato = prompt("Vuelva a ingresar un número válido entre 0 y 9");
// 	  pedirDato = parseInt(pedirDato);
// 	}
// 	alert("Ingresaste " + pedirDato);
//   }
  
// }


// function mostrar()
// {
// 	var numeroIngresado;
// 	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
// 	numeroIngresado = parseInt(numeroIngresado);

// 	alert(numeroIngresado);
	
// 	while (numeroIngresado < 0|| numeroIngresado >= 9) {
// 	alert("Ingresaste mal el numero ")
// 	numeroIngresado = prompt("Re ingrese el numero entre 0 y 9¨");
// 	numeroIngresado = parseInt(numeroIngresado);
// 	}
// 	document.getElementById("txtIdNumero").value = numeroIngresado
// }//FIN DE LA FUNCIÓN