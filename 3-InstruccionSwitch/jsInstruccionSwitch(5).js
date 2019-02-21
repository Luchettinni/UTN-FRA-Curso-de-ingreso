
var palabritas;
function mostrar()
{
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);
	
switch (laHora)
{
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        palabritas = "es de mañana";
    break;

    default:
        palabritas = "no es de mañana";
        //window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0");
    break;
}

alert(palabritas);

}