function mostrar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1 = prompt("Ingrese un numero");
    numero2 = prompt("Ingrese un segundo numero");
    resultado = 0;
    //---------------------------------
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if ( numero1 == numero2 )
    {
        alert(numero1 + ", " + numero2);
    } else
    {
        if (numero1 > numero2)
        {
            resultado = numero1 / numero2;
            alert(resultado);
        } else 
        {
            resultado = numero1 + numero2;
            if (resultado < 50)
            {
                alert ("la suma es " + resultado + " y es menor a 50.")
            } else
            {
                alert(resultado);
            }
        }
    }
}
