var estringer;

function mostrar()
{
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero":
        estringer = "que comiences bien el año!!!";
    break;

    case "Marzo":
        estringer = "A clases!!!";
    break;

    case "Julio":
        estringer = "Se vienen las vacaciones!!!";
    break;

    case "Diciembre":
        estringer = "Felices fiestas!!!";
    break;

    default:
        estringer = "Hola mund-. ehhh digo, hola usuario!!! que mes aburrido que elegiste, eh?";;
    break;
}

alert (estringer);

}