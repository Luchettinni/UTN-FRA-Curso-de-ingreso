
function mostrar()
{

var contador;
var notaMasBaja;
var sumaDeNotas;
var notaDelAlumno
var sexoDelAlumno;
var sexoDeLaNotaMasBaja;
var promedioDeNotas;

contador = 0;
notaMasBaja = 0;
sumaDeNotas = 0;
sexoDeLaNotaMasBaja = 0;
promedioDeNotas = 0;

    while(contador < 5)
    {
        notaDelAlumno = prompt("Ingrese la nota del alumno");
        notaDelAlumno = parseFloat(notaDelAlumno);

        if (notaDelAlumno>10 || notaDelAlumno<0)
        {
            alert("capo, ingresa una nota entre 0 y 10.");
            break;
        }

        sexoDelAlumno = prompt('Indique el sexo del alumno con una "m" para masculino o con "f" para femenino');
        if (sexoDelAlumno != "m" && sexoDelAlumno != "f")
        {
            alert("asegurate de haber escrito bien el sexo del alumno con las letras asignadas.");
            break;
        }

        if(notaDelAlumno <= notaMasBaja || contador == 0 ) 
        {
            notaMasBaja = notaDelAlumno;
            sexoDeLaNotaMasBaja = sexoDelAlumno;
        }

        sumaDeNotas = sumaDeNotas + notaDelAlumno;
        contador ++;
    }

    promedioDeNotas = sumaDeNotas / 5;

    alert("el promedio de los alumnos es de " + promedioDeNotas + " y la suma de todas las notas es " + sumaDeNotas);
    alert("La nota mas baja de los alumnos es " + notaMasBaja + " y el sexo del alumno es " + sexoDeLaNotaMasBaja );
}
