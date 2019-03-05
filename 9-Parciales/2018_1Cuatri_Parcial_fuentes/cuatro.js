function mostrar()
{
    var numero1;
    var numero2;
    var resultado;

    numero1 = prompt("ingrese un numero");
    numero2 = prompt("ingrese otro numero nuevamente");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado = 0;
    
    if (numero1 == numero2)
    {
        alert("los numeros que ingresaste:" + numero1 + ", " + numero2 + " son iguales");
    } else
    {
        if (numero1 > numero2)
        {
            resultado = numero1 - numero2;
        } else
        {
            resultado = numero1 + numero2;
        }
    }

    if(resultado > 10)
    {
        alert("la suma es " + resultado + " y es mayor a 10");
    }
console.log(resultado);
}
