// Segun referencial del parcial
// La administración de la UTN le solicita la creación de un programa informático 
// que sea capaz de recibir datos ingresados por el personal administrativo y realizar algunos cálculos básicos.
// Se pide que se ingresen los datos de un total de 40 alumnos:

// Nombre del alumno,
// Género (“M”, “F”, “NB”),
// Edad (desde los 18 hasta 99 inclusive),
// Nota de examen (del 1 al 10).

// Una vez ingresados los datos de los 40 alumnos se pide informar mediante alert o document.write:

// 1-Porcentaje de alumnos de cada género.
// 2-Cantidad de alumnos con nota de aprobación (6 o más) que tengan menos de 25 años.
// 3-El nombre y la nota del alumno más joven.


function mostrar()
{
const MAX_ALUMNOS = 40;
let  contador= 0;
let nombre;
let genero;
let edad;
let notaExamen;
let bandera= false;

while(contador < MAX_ALUMNOS){

	nombre=prompt("Ingresa el nombre");
	while (isNaN(nombre)==false) {
		nombre=prompt("Re ingresa el nombre");
	}
	
	genero=prompt("Ingresa el genero");
	while (isNaN(genero)==false|| genero!="M" && genero!="F"&& genero!="NB") {
		genero=prompt("Re Ingresa el genero");
	}
	
	edad=prompt("Ingresa la edad");
	edad=parseInt(edad);
	while (isNaN(edad)==true||edad <18 && edad>99) {
		edad=prompt("RE ingresa la edad ");
		edad=parseInt(edad);
	}
	
	notaExamen=prompt("Ingres la nota del examen ");
	notaExamen=parseInt(notaExamen);
	while (isNaN(notaExamen)==true||notaExamen<1 && notaExamen>10) {
		notaExamen=prompt("Re ingresa la nota del examen ");
		notaExamen=parseInt(notaExamen);
	}
	
	switch (genero) {
		case "F":			
			break;
		case "M":
			break;
		case "NB":
			break;
	}
	
	if(notaExamen>6){
		if(edad>25){
			alert("Los alumnos que tiene mas de 6 de nota  y tiene menos de 25")
		}
	}
	
	if(bandera==false){
		masjoven= 
	}
	
	contador = contador + 1;    
}

alert("El porcentaje de alumnos de casa genero es ")



}
