/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.ok
2-Suma de los positivos.ok
3-Cantidad de positivos.ok
4-Cantidad de negativos.ok
5-Cantidad de ceros.ok
6-Cantidad de números pares.ok
7-Promedio de positivos.ok
8-Promedios de negativos.ok
9-Diferencia entre positivos y negativos, (positvos-negativos). */
// Alumna Belen Pantoja DNI 39201936 Div J Ejercicio While 10
function mostrar()
{
	//declarar contadores y variables 
	let contadorPosit = 0;
	let contadorNeg = 0;
	let pedirDato;
	let contadorCero = 0;
	let contadorNumPares = 0;
	let acumuladorDeNeg= 0;
	let acumuladorDePost = 0;
	let promedioPost;
	let promedioNeg;
	let diferencia;
	let respuesta = "si";
	

	while(respuesta=="si")
	{
		pedirDato = prompt("Ingrese un numero");
		pedirDato = parseInt(pedirDato);

		respuesta=prompt("desea continuar?");
		if (pedirDato < 0){
			acumuladorDeNeg = acumuladorDeNeg + pedirDato;
			contadorNeg = contadorNeg + 1;
			promedioNeg = acumuladorDeNeg /contadorNeg;
		}
		else{
			if (pedirDato > 0){
				acumuladorDePost = acumuladorDePost + pedirDato;
				contadorPosit = contadorPosit + 1;
				promedioPost = acumuladorDePost / contadorPosit;
			}
			else{
				contadorCero= contadorCero + 1;
			}
		}
		if(pedirDato % 2 == 0){
			contadorNumPares = contadorNumPares +1;
		}
	}
	diferencia = acumuladorDePost - acumuladorDeNeg;

	document.write("la suma de negativos es : "+acumuladorDeNeg);
	document.write("<br>");
	document.write("la suma de positivos es  : "+acumuladorDePost);
	document.write("<br>");
	document.write("la cantidad de numeros posivos es  : "+contadorPosit);
	document.write("<br>");
	document.write("la cantidad de numero Negativos es : "+contadorNeg);
	document.write("<br>");
	document.write("la cantidad de Ceros es : "+contadorCero);
	document.write("<br>");
	document.write("la cantidad de numeros Pares es : "+contadorNumPares);
	document.write("<br>");
	document.write("El promedio de los positivos es : "+promedioPost);
	document.write("<br>");
	document.write("El promedio de los negativos es : "+promedioNeg);
	document.write("<br>");
	document.write("La diferencia entre los Positivos y los negativos es : "+diferencia);
}//FIN DE LA FUNCIÓN