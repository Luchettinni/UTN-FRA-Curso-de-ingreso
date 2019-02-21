
function mostrar()
{
estadoCivil2 = document.getElementById("estadoCivil").value;
if (estadoCivil2 == "Soltero" ) { estadoCivil = true; } else { estadoCivil = false;}

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if (edad <= 17 && estadoCivil == false) { alert ("usted esta mintiendo");}
}