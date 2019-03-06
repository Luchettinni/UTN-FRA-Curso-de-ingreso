function mostrar()
{
    var notaIngresada;

    notaIngresada = prompt("ingrese la nota");
    notaIngresada = parseInt(notaIngresada);

    switch(notaIngresada)
    {   
        case 0:
        case 1:
        case 2:
        case 3:
            alert("la proxima se puede!")
            break;
        case 4:
        case 5:
        case 6:
            alert("raspando");
            if (notaIngresada < 5)
            {
                alert("debes preocuparte mas");
            }
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            alert("aprobado");
            if (notaIngresada > 8)
            {
                alert("muy bien");
            }
            break;
  
        default:
            alert("la nota es invalida");
            break;
    }
}
