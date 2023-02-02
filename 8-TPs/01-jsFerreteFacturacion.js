/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{  let precioUno;
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
function Promedio () 
{
      let precioUno;
        let precioDos;
        let precioTres;
        let resultado;
        let suma;
     
     
        precioUno = document.getElementById("txtIdPrecioUno").value;
        precioDos = document.getElementById("txtIdPrecioDos").value;
        preciotres = document.getElementById("txtIdPrecioTres").value;

        suma = precioUno + precioDos + precioTres;

        alert(suma / 3);

function PrecioFinal () 
{
        
      let precioUno;
      let precioDos;
      let precioTres;
      let resultado;
      let 
   
   
      precioUno = document.getElementById("txtIdPrecioUno").value;
      precioDos = document.getElementById("txtIdPrecioDos").value;
      precioTres = document.getElementById("txtIdPrecioTres").value;
     
        suma = precioUno + precioDos + precioTres
        prompt()

        alert()
	
}