/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
let pedirDato;
const MACULINO = "m";
const FEMENINO = "f";

pedirDato = prompt("Ingrese el genero");

while (isNaN(pedirDato) == false || pedirDato != MACULINO && pedirDato != FEMENINO) {
	pedirDato = prompt("Re ingrese el genero");

}
alert("Este es el genero  " + pedirDato);
}





















// function mostrar()
// {
// 	let sexoIngresado;
// 	sexoIngresado = prompt("ingrese f ó m .");
	
// 	alert("Usted ingreso  " + sexoIngresado);
// 	sexoIngresado = sexoIngresado.toLocaleLowerCase();

// 	while (sexoIngresado !="f" && sexoIngresado != "m") {
// 		sexoIngresado = prompt ("Re ingrese el sexo ");
// 		sexoIngresado = sexoIngresado.toLocaleLowerCase();
// 	}
// 	document.getElementById("txtIdSexo.value=sexoIngresado").value = sexoIngresado;
// }//FIN DE LA FUNCIÓN