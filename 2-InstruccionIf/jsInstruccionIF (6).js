function mostrar()
{
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    if (edad <= 13) { 
        alert("sos joven"); } else if (edad >= 18) { alert("sos viejardo") } else { alert("sos puto") }
}