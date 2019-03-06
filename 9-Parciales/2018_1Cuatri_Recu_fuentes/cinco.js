function mostrar()
{
    var diaDeSemana

    diaDeSemana = prompt("ingrese que dia de la semana es");

    switch(diaDeSemana)
    {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("a trabajar");
            break;
        case "sabado":
        case "domingo":
            alert("buen finde!");
            break;
        default:
            alert(diaDeSemana +" no es un dia valido");
            break;
    }
}
