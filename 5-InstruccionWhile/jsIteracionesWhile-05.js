/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
// Alumna Belen Pantoja dni 39201936 Div J Ejercicios While 5
function mostrar() {
let pedirDato;
const MACULINO = "masculino";
const FEMENINO = "femenino";

pedirDato = prompt("Ingrese el genero");

while (isNaN(pedirDato) == false || pedirDato != MACULINO && pedirDato != FEMENINO) {
	pedirDato = prompt("Re ingrese el genero");

}
document.getElementById("txtIdSexo").value = "Este es el genero  " + pedirDato;
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