function CalcularPrecio ()
{
    let cantLamparas;
    let marcLamparas;
    let descuento;
    let precioFinal;
    let precioBruto;
    let proporcion;
    let mensaje;
    const IIBB = 10;
    const PRECIO_LAMP = 35;

    descuento = 0;

    cantLamparas = document.getElementById("txtIdCantidad").value; 

    cantLamparas = parseInt(cantLamparas);

    marcLamparas = document.getElementById("Marca").value;

    mensaje = "Compre: " + cantLamparas + " de la marca: " + marcLamparas + " y obtuve un ";

    if(cantLamparas > 5)
    {
        //Punto "A"
        descuento = 50;        
    }
    else
    {
        if(cantLamparas > 4)
        {
            if(marcLamparas == "ArgentinaLuz")
            {
                //Punto "B"
                descuento = 40;           
            }
            else
            {
                descuento = 30;
            }
        }    
        else
        {
            if(cantLamparas > 3)
            {
                if(marcLamparas == "ArgentinaLuz" || marcLamparas == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }                
            }
            else
            {
                if(cantLamparas > 2)
                {
                    if (marcLamparas == "ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    else
                    {
                        if (marcLamparas == "FelipeLamparas")
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                    
                        }
                    }    
                }
            }
        }    
    }
    
    mensaje = mensaje + descuento + " porcentaje";

        precioBruto = cantLamparas * PRECIO_LAMP;
    
    proporcion = (precioBruto * descuento) / 100;

    precioFinal = precioBruto - proporcion;

    if(precioFinal>120){
        proporcion = precioFinal * IIBB/100;
        precioFinal = precioFinal + proporcion;
        mensaje = mensaje + "me aplicaron impuestos";
        
    }
    
    alert(mensaje);
    alert(precioFinal);
}
