/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  let precioUno;
  let precioDos;
  let precioTres;
  let resultado;



  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;

  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);

  resultado = precioUno + precioDos + precioTres;

  alert(" EL RESULTADO DE LA SUMA ES " + resultado);


}
function Promedio() {
  let precioUno;
  let precioDos;
  let precioTres;
  let suma;
  let resultadoDeSuma;

  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioUno = parseInt(precioUno);
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioDos = parseInt(precioDos);
  precioTres = document.getElementById("txtIdPrecioTres").value;
  precioTres = parseInt(precioTres);


  suma = precioUno + precioDos + precioTres;
  resultadoDeSuma = suma / 3;

  alert( " El resultado del Promedio es " +  resultadoDeSuma);
}



  function PrecioFinal() {

    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    const IVA = 21;
    let resultadoIva;
    let resultadoFinal;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);
    suma = precioUno + precioDos + precioTres;
    resultadoIva = (suma * IVA ) / 100;
    resultadoFinal = resultadoIva;
    
    alert("El precio final es " + resultadoFinal );

  }