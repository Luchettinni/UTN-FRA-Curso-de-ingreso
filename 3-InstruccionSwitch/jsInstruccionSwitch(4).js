
var palabritas;
function mostrar()
{

var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Febrero":
        palabritas = "Este mes tiene 28 días (fun fact, si es año biciesto son 29).";
    break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        palabritas = "Este mes tiene 30 dias (fun fact, los palitos de la selva no provienen de la selva).";
    break;

    default:
        palabritas = "Este mes tiene 31 dias (fun fact, la persona que esta leyendo esto esta respirando).";
    break;
}

alert(palabritas);


}