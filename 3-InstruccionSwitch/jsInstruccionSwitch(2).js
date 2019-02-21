var estringer;

function mostrar()
{ 
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Julio":
    case "Agosto":
        estringer = "Abrigate que hace frio.";
    break;

    default:
        estringer = "Falta para el invierno";
    break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        estringer = "Ya pasamos el frio, ahora blah blah blah";
    break;

}

alert (estringer);


}