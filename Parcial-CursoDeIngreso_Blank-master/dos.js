// Segun referencial del parcial

// Ejercicio 2:
// Para una escuela de música se necesita un programa que permita ingresar los datos de los estudiantes, hasta que el cliente quiera. 
// Por cada estudiante, se ingresa:
// Nombre completo,
// Instrumento que toca (validar "guitarra", "piano", "batería"),
// Edad (entre 7 y 18),
// Horas de estudio por semana (más de 0 y menos de 57),
// Precio por hora (desde 200 hasta 500).

// Se pide informar por alert o document write: 

// 1-Si el estudiante realiza más de 30 Hs semanales, tiene un descuento del 10% sobre el precio bruto. 
// Informar el total recaudado de todos los estudiantes y los casos cuando corresponde descuento).
// 2-El estudiante con más horas de estudio por semana de batería. 
// 3-Cantidad de estudiantes que tocan piano y tienen más de 12 años. 
// 4-La actividad que posee menos estudiantes.
function mostrar() {
    let respuesta = "si"
    let nombre;
    let instrumento;
    let edad;
    let horas;
    let precio;

    let acumTotalRecaudado = 0;
    const DESCUENTO = 10;
    let bandera = false;
    let estudianteMasHorasNombre;
    let estudianteMasHorasCantidad;
    let contEstudiantesPiano = 0;    
    while (respuesta == "si") {        
        nombre = prompt("Ingrese el nombre  del estudiante");
        while (isNaN(nombre) == false) {
            nombre = prompt("Re ingrese el nombre ");
        }

        instrumento = prompt("Ingrese el instrumento");
        while (isNaN(instrumento) == false || instrumento != "guitarra" && instrumento != "piano" && instrumento != "batería") {
            instrumento = prompt("Re ingrese el intrumento");
        }

        edad = prompt("Ingrese la edad");
        edad = parseInt(edad);
        while (isNaN(edad) == true || edad < 7 && edad > 18) 
        {
            edad=prompt("Re ingrese la edad");
            edad=parseInt(edad);
        }

        horas=prompt("Ingrese las horas");
        horas=parseInt(horas);
        while (isNaN(horas)==true||horas < 0 && horas >57) {
            horas=prompt("Re ingresa las horas ");
        }

        precio=prompt("Ingrese el precio");
        precio=parseInt(precio);
        while (isNaN(precio)==true||precio<200 && precio>500) {
            precio=prompt("RE ingres eel precio ");
        }
        respuesta = prompt("Desea seguir ingresando?");
        
        if(horas > 30){
            precio = precio * DESCUENTO / 100;
            alert("Se aplico un descuento ");
        }
        switch (instrumento) {
            case "guitarra":
                
                break;
            case "piano":
                if(edad > 12){
                    contEstudiantesPiano = contEstudiantesPiano + 1;
                }
                break;
            case "batería":
                if(bandera == false){
                    estudianteMasHorasNombre = nombre;
                    estudianteMasHorasCantidad = horas;
                }
                else{
                    if(horas > estudianteMasHorasCantidad){
                        estudianteMasHorasNombre = nombre;
                        estudianteMasHorasCantidad = horas;
                    }
                }
                break;
            default:
                break;
        }
        acumTotalRecaudado = acumTotalRecaudado + precio;
    }

    alert("El total recaudado por los alumnos es de :" + acumTotalRecaudado);
    alert("El estudiante con mas horas se llama" + estudianteMasHorasNombre + "e hizo " + estudianteMasHorasCantidad + " de horas");
    alert("Total de alumnos que tocan piano y tienen mas de 12 años es de :"+ contEstudiantesPiano);
}
