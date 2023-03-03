//Se hace generalmente DENTRO DEL WHILE
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
/////USADO CON SUS CONTADORES Y ACUMULADORES DE C/U
switch (trabajo) {
    case 'corte':
        porcentajeIncremento = 20;
        contCorte = contCorte + 1;
        break;

    case 'tintura':
        porcentajeIncremento = 50;
        contTintura++;

        break;

    default:
        porcentajeIncremento = 0;
        contPeinado++;
        break;
}