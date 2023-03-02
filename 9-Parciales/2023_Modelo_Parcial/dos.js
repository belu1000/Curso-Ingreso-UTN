// Segun referencial del parcial 
// Ejercicio 2

// De 5 representantes de atención al cliente que pertenecen a un call center se deben tomar y validar los
// siguientes datos.
// A. Nombre.
// B. Legajo (numero de 4 dígitos, sin ceros a la izquierda)
// C. Cantidad de llamadas atendidas (entre 1 y 60)
// D. Tiempo total de conversación en hs (entre 1 y 5)
// E. Especialidad (Telefonica, RRSS, WhatsApp)


// function mostrar() {
//     let datoIngresado;
//     let legajo;
//     let cantidadLlamadasAtendidas;
//     let tiempoTotalConversacion;
//     const MAXIMO = 5;
//     let contador = 0

//     datoIngresado = prompt("Ingrese los datos del cliente Nombre");

//     while (contador < MAXIMO) {
//         while (isNaN(datoIngresado) == false) {
//             datoIngresado = prompt(" Re Ingrese los datos del cliente Nombre");
//         }

//         // pedir numero de legajo
//         legajo = prompt("ingrese el numero de legajo");
//         legajo = parseInt(legajo)

//         while (isNaN(legajo) == true || legajo < 999 && legajo > 10000) {
//             legajo = prompt("Re Ingrese el numero de legajo");
//         }
//         //Cantidad de llamas atendidas
//         cantidadLlamadasAtendidas = prompt("Ingresa las cantidades de llamasdas atendidas");
//         cantidadLlamadasAtendidas = parseInt(cantidadLlamadasAtendidas);

//         while (isNaN(cantidadLlamadasAtendidas) == true || cantidadLlamadasAtendidas < 0 && cantidadLlamadasAtendidas > 60) {
//             cantidadLlamadasAtendidas = prompt("Re Ingresa las cantidades");
//             cantidadLlamadasAtendidas = parseInt(cantidadLlamadasAtendidas);
//         }
//         //tiempo total de conversacion
//         tiempoTotalConversacion = prompt("Ingrese el tiempo de convercion");
//         tiempoTotalConversacion = parseInt(tiempoTotalConversacion);

//         while (isNaN(tiempoTotalConversacion) == true || tiempoTotalConversacion < 1 && tiempoTotalConversacion > 5) {
//             tiempoTotalConversacion = prompt("Re ingrese el tiempo de conversacion");
//             tiempoTotalConversacion = parseInt(tiempoTotalConversacion);
//         }
//         //////ESPECIALIDAD 
//         especialidad = prompt("Ingrese la especialidades que desee teniendo en cuenta : Telefonica, RRSS, WhatsApp")
//         while (isNaN(especialidad) == false || especialidad != "Telefonica" && especialidad != "RRSS" && especialidad != "WhatsApp") {
// s
//             especialidad = prompt("Re ingrese la especialidad ");
//             switch (especialidad) {
//                 case "Telefonica":
//                 case "WhatsApp":
//                 case "RRSS":
//                     break;
//             }
//         }
//         contador= contador +1;
//         acumulador= acumulador
//     }





//     alert("Nombre del cliente " + datoIngresado + " , el numero de legajo es " + legajo + " ,las cantidades de llamadas atendidas son " + cantidadLlamadasAtendidas + " , el tiempo de las llamas son " + tiempoTotalConversacion + " , y la especialidad es " + especialidad);
// }





// Ejercicio 2

// De 5 representantes de atención al cliente que pertenecen a un call center se deben tomar y validar los
// siguientes datos.
// A. Nombre.
// B. Legajo (numero de 4 dígitos, sin ceros a la izquierda)
// C. Cantidad de llamadas atendidas (entre 1 y 60)
// D. Tiempo total de conversación en hs (entre 1 y 5)
// E. Especialidad (Telefonica, RRSS, WhatsApp)



// Informar:
// 1. El total de llamadas atendidas de los representantes
// 2. El nombre del representante que mas llamados atendió de manera Telefonica.
// 3. El nombre del representante que menos tiempo converso de WhatsApp.
// 4. El promedio de conversación del grupo. Ej de calculo: totalConversado/totalLlamadasAtendidas

// Pedir datos por prompt y mostrar por document write o alert.

function mostrar()
{
    let nombre;
    let legajo;
    let cantidadLlamadas;
    let tiempoTotalConversacion;
    let especialidad;
    let acumuladorLlamadas = 0;
    let banderaLlamadaTelefonica = true;
    let nombreMaxTelefono;
    let maxLlamadaTelefono;
    let banderaWhatsapp = true;
    let nombreMinWhatsapp;
    let minTiempoWhatsapp;
    let totalConversado = 0;
    let promedioConversacion;
    
    


    for(let i = 0 ; i < 5 ; i++)
    {
        nombre = prompt("ingrese nombre");

        legajo = prompt("ingrese legajo de 4 digitos sin 0 a la izquierda");
        legajo = parseInt(legajo);
        while(!(legajo >= 1000 && legajo < 10000))
        {
            legajo = prompt("ingrese numero de 4 digitos sin 0 a la izquierda");
            legajo = parseInt(legajo);
        }
        
        cantidadLlamadas = prompt("ingrese cantidad Llamadas entre 1 y 60");
        cantidadLlamadas = parseInt(cantidadLlamadas);
        while(!(cantidadLlamadas >= 1 && cantidadLlamadas <= 60))
        {
            cantidadLlamadas = prompt("ingrese cantidad Llamadas entre 1 y 60");
            cantidadLlamadas = parseInt(cantidadLlamadas);
        }

        tiempoTotalConversacion = prompt("ingrese tiempo Total Conversacion entre 1 y 5");
        tiempoTotalConversacion = parseInt(tiempoTotalConversacion);
        while(!(tiempoTotalConversacion >= 1 && tiempoTotalConversacion <= 5))
        {
            tiempoTotalConversacion = prompt("ingrese tiempo Total Conversacion entre 1 y 5");
            tiempoTotalConversacion = parseInt(tiempoTotalConversacion);
        }

        especialidad = prompt("ingrese especialidad: Telefonica, RRSS, WhatsApp");
        while(!(especialidad == "Telefonica" || especialidad == "RRSS" || especialidad == "WhatsApp"))
        {
            especialidad = prompt("reingrese especialidad: Telefonica, RRSS, WhatsApp");
        }

        acumuladorLlamadas = acumuladorLlamadas + cantidadLlamadas;

        switch(especialidad)
        {
            case "Telefonica":
                if(banderaLlamadaTelefonica == true || cantidadLlamadas > maxLlamadaTelefono)
                {
                    nombreMaxTelefono = nombre;
                    maxLlamadaTelefono = cantidadLlamadas;
                    banderaLlamadaTelefonica = false;
                }
            break;
            case "WhatsApp":
                if(banderaWhatsapp == true || tiempoTotalConversacion < minTiempoWhatsapp)
                {
                    nombreMinWhatsapp = nombre;
                    minTiempoWhatsapp = tiempoTotalConversacion;
                    banderaWhatsapp = false;
                }
            break;

        }

        totalConversado = totalConversado + tiempoTotalConversacion;
    }
    
    promedioConversacion = totalConversado / acumuladorLlamadas;

    alert("el total de llamados atendidos es " + acumuladorLlamadas);
    alert("el nombre del que mas atendio " + nombreMaxTelefono);
    alert("el que menos converso por whatsapp " + nombreMinWhatsapp);
    alert("el promedio de conversacion es " + promedioConversacion);

}