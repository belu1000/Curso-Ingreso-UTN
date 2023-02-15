/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	
	alert("Usted ingreso  " + sexoIngresado);
	sexoIngresado = sexoIngresado.toLocaleLowerCase();

	while (sexoIngresado !="f" && sexoIngresado != "m") {
		sexoIngresado = prompt ("Re ingrese el sexo ");
		sexoIngresado = sexoIngresado.toLocaleLowerCase();
	}
	document.getElementById("txtIdSexo.value=sexoIngresado").value = sexoIngresado;
}//FIN DE LA FUNCIÓN