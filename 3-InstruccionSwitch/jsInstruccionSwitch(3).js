
var palabritas;
function mostrar()
{

var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Febrero":
        palabritas = "Este mes no tiene más de 29 días.";
    break;

    default:
        palabritas = "Este mes tiene 30 o más días.";
    break;
}

alert(palabritas);


}