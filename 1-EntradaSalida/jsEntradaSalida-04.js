/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
// Alumno: Belen Pantoja
// Ejercicio N4
function mostrar()
{
	let nombre;
	nombre = prompt("Ingrese un nombre");
    document.getElementById("txtIdNombre").value = nombre;
	alert(nombre);
}


