function mostrar()
{
    var precio;
    var descuentoDelPrecio;
    var IVA;

    var resultadoDelDescuento;
    var resultadoConDescuento;

    precio = prompt("Ingrese el precio del producto ");
    precio = parseInt(precio);

    descuentoDelPrecio = prompt("Ingrese un descuento");
    descuentoDelPrecio = parseInt(descuentoDelPrecio);
    
    resultadoDelDescuento = (precio * descuentoDelPrecio) / 100;
    resultadoConDescuento = precio - resultadoDelDescuento;

    IVA = 20;
    resultadoMasIVA = ((precio * IVA) / 100) + resultadoConDescuento;

    alert("el " + descuentoDelPrecio + "% de " + precio + " es: " + resultadoDelDescuento + "...el precio con el descuento aplicado es " + resultadoConDescuento + " y el IVA es de " + IVA + "%");
    document.getElementById("elPrecioFinal").value = resultadoMasIVA;
}
