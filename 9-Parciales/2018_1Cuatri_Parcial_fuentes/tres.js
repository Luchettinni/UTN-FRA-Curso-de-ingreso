function mostrar()
{
    precio = prompt("cual es el precio del producto?");
    descuento = prompt("cual es el descuento que desea aplicarle?");

    precio = parseInt(precio);
    descuento = parseInt(descuento);

    resultado = precio - (( precio * descuento ) / 100);

    document.getElementById("elPrecioFinal").value = resultado;
}
