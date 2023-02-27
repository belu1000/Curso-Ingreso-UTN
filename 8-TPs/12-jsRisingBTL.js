// /*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
// 12.   Los datos requeridos son los siguientes:
// A.	Edad, entre 18 y 90 años inclusive.
// B.	Sexo, “M” para masculino y “F” para femenino
// C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
// D.	Sueldo bruto, no menor a 8000.
// E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
// F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
//  */
// // Alumna Belen Pantoja Div J TP 12 While
function ComenzarIngreso() {
// 	// definicion de variables
	let edadIngresada;

// 	// CONSIGNA A
	edadIngresada = prompt("Ingresa tu edad");
	edadIngresada = parseInt(edadIngresada);
	while (isNaN(edadIngresada) == true || edadIngresada <= 17 || edadIngresada >= 91) {
		edadIngresada = prompt("Re ingresa tu edad ");
		edadIngresada = parseInt(edadIngresada);
	}
	document.getElementById("txtIdEdad").value = edadIngresada;

	// / CONSIGNA B
	let sexoIngresado;
	const MASC = "m";
	const FEME = "f";

	sexoIngresado = prompt("Ingrese su Genero");

	while (isNaN(sexoIngresado) == false 
	|| (sexoIngresado != FEME && sexoIngresado != MASC)) {
		sexoIngresado = prompt("Re ingrese su Genero");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;

// 	// Consiga C
	let estadoCivil;
	let salidaEstadoCivil;

	estadoCivil = prompt("Ingrese su estado civil de acuerdo a : 1 Soltero, 2 Casado, 3 Divorciado, 4 Viudo");
	estadoCivil = parseInt(estadoCivil);

	while(isNaN(estadoCivil)== true || estadoCivil <= 0 || estadoCivil >=5){
		estadoCivil = prompt("Re ingresa un estado Civil valido");
		estadoCivil = parseInt(estadoCivil);

	}
	switch (estadoCivil) {
		case "1":
			salidaEstadoCivil= "Soltero";
			break;
		case "2":
			salidaEstadoCivil ="Casado";
			break;
		case "3":
			salidaEstadoCivil = "Divorciado";
			break;
		case "4":
			salidaEstadoCivil = "Viudo";
			break;
		default: 
			alert("Error no ingresaste ningun estado civil  valido");
			break;
	}
document.getElementById("txtIdEstadoCivil").value = salidaEstadoCivil;

// // Consigna D
let sueldoBruto;

sueldoBruto =prompt("Ingresa un sueldo bruto superior a 8000");
sueldoBruto =parseInt(sueldoBruto);

while(isNaN(sueldoBruto)==true || sueldoBruto < 8000){
	sueldoBruto = prompt("Re ingresa un sueldo bruto superior a 8000")
	sueldoBruto = parseInt(sueldoBruto);
}
document.getElementById("txtIdSueldo").value = "Sueldo bruto es  " +sueldoBruto;

// consiga E
let legajo;

legajo = prompt("Ingresa un numero de 4 digitos sin 0 adelante");
legajo = parseInt(legajo);
while (isNaN(legajo)== true || legajo <1000 || legajo >= 10000) {
	legajo = prompt("Re ingresa un numero de 4 digitos");
	legajo = parseInt(legajo);
}
document.getElementById("txtIdLegajo").value = "Numero de Legajo es  "+legajo;

// consigan F
let Nacionalidad = prompt("Ingresa tu nacionalidad  teniendo en cuenta : A -para Argentino, E-Extranjeros, N-Nacionalizados");
let salidaNacionalidad;

while(isNaN(Nacionalidad)== false 
||(Nacionalidad != "A" && Nacionalidad != "E" && Nacionalidad != "N")){
	Nacionalidad = prompt("Re ingresa la nacionalidad teniendo en cuenta : A -para Argentino, E -Extranjero, N -Nacionalizados");
}

switch (Nacionalidad) {
	case "A":
		salidaNacionalidad ="Argentina";
		break;
	case "E":
		salidaNacionalidad ="Extranjeros";
	break
	case "N":
		salidaNacionalidad ="Nacionalizados";
	break;
}
document.getElementById("txtIdNacionalidad").value ="Nacionalida es "+salidaNacionalidad;
}
