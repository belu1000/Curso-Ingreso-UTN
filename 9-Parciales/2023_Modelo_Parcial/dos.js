// Segun referencial del parcial 
// Ejercicio 2

// De 5 representantes de atención al cliente que pertenecen a un call center se deben tomar y validar los
// siguientes datos.
// A. Nombre.
// B. Legajo (numero de 4 dígitos, sin ceros a la izquierda)
// C. Cantidad de llamadas atendidas (entre 1 y 60)
// D. Tiempo total de conversación en hs (entre 1 y 5)
// E. Especialidad (Telefonica, RRSS, WhatsApp)


function mostrar() {
    let datoIngresado;
    let legajo;
    let cantidadLlamadasAtendidas;
    let tiempoTotalConversacion;
    const MAXIMO = 5;
    let contador = 0

    datoIngresado = prompt("Ingrese los datos del cliente Nombre");

    while (contador < MAXIMO) {
        while (isNaN(datoIngresado) == false) {
            datoIngresado = prompt(" Re Ingrese los datos del cliente Nombre");
        }

        // pedir numero de legajo
        legajo = prompt("ingrese el numero de legajo");
        legajo = parseInt(legajo)

        while (isNaN(legajo) == true || legajo < 999 && legajo > 10000) {
            legajo = prompt("Re Ingrese el numero de legajo");
        }
        //Cantidad de llamas atendidas
        cantidadLlamadasAtendidas = prompt("Ingresa las cantidades de llamasdas atendidas");
        cantidadLlamadasAtendidas = parseInt(cantidadLlamadasAtendidas);

        while (isNaN(cantidadLlamadasAtendidas) == true || cantidadLlamadasAtendidas < 0 && cantidadLlamadasAtendidas > 60) {
            cantidadLlamadasAtendidas = prompt("Re Ingresa las cantidades");
            cantidadLlamadasAtendidas = parseInt(cantidadLlamadasAtendidas);
        }
        //tiempo total de conversacion
        tiempoTotalConversacion = prompt("Ingrese el tiempo de convercion");
        tiempoTotalConversacion = parseInt(tiempoTotalConversacion);

        while (isNaN(tiempoTotalConversacion) == true || tiempoTotalConversacion < 1 && tiempoTotalConversacion > 5) {
            tiempoTotalConversacion = prompt("Re ingrese el tiempo de conversacion");
            tiempoTotalConversacion = parseInt(tiempoTotalConversacion);
        }
        //////ESPECIALIDAD 
        especialidad = prompt("Ingrese la especialidades que desee teniendo en cuenta : Telefonica, RRSS, WhatsApp")
        while (isNaN(especialidad) == false || especialidad != "Telefonica" && especialidad != "RRSS" && especialidad != "WhatsApp") {
s
            especialidad = prompt("Re ingrese la especialidad ");
            switch (especialidad) {
                case "Telefonica":
                case "WhatsApp":
                case "RRSS":
                    break;
            }
        }
        contador= contador +1;
        acumulador= acumulador
    }





    alert("Nombre del cliente " + datoIngresado + " , el numero de legajo es " + legajo + " ,las cantidades de llamadas atendidas son " + cantidadLlamadasAtendidas + " , el tiempo de las llamas son " + tiempoTotalConversacion + " , y la especialidad es " + especialidad);
}
