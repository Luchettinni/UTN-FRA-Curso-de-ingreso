
function mostrar()
{
    var contador;
    var contadorDeCombustible;

    var velocidadIngresada;
    var combustible;

    var velocidadMasBaja;
    var velocidadMasAlta;
    var combustibleDelMasBajo;

    var velocidadPromedio;

//---------------------------------
    contador = 0;
    contadorDeCombustible = 0;

    velocidadIngresada = 0;
    combustible;

    velocidadMasBaja = 0;
    velocidadMasAlta = 0;

    velocidadPromedio = 0;
//---------------------------------

    while (contador < 5)
    {

    velocidadIngresada = prompt("ingrese la velocidad (en Km)");
    velocidadIngresada = parseInt(velocidadIngresada);
    while (velocidadIngresada>250 || velocidadIngresada<0)
        {
            alert("recuerde que estar dentro de los 0 y 250 kilometros")
            velocidadIngresada = prompt("ingrese la velocidad (en Km)");
        }

    combustible = prompt('ingrese el tipo de combustible (solido o liquido) con "s" o "l"');
    while (combustible !="s" && combustible != "l")
        {
                alert("elija la letra correspondiente para liquido y solido!")
                combustible = prompt('ingrese el tipo de combustible (solido o liquido) con "s" o "l"');
        }

    if (velocidadIngresada <= velocidadMasBaja  || contador == 0) 
        {
            velocidadMasBaja = velocidadIngresada;
            combustibleDelMasBajo = combustible;
        }
        
    if (velocidadIngresada >= velocidadMasAlta && combustible == "s" || contador == 0)
        {
                velocidadMasAlta = velocidadIngresada;
         }

    if (combustible == "l" && velocidadIngresada > 100)
    {
        contadorDeCombustible ++;
    }

    velocidadPromedio = velocidadPromedio + velocidadIngresada;
    contador ++;
    }

    velocidadPromedio = velocidadPromedio / 5;
    alert("la velocidad promedio de los 5 vehiculos es de " + velocidadPromedio);
    alert("la velocidad mas baja es de " + velocidadMasBaja + " utilizando combustible " + combustibleDelMasBajo);
    alert("la cantidad de combustibles liquidos que superan los 100 km son " + contadorDeCombustible);
    alert(" la velocidad mas alta con los solidos es de " + velocidadMasAlta);
}


/*function mostrar()
{

var contador;
var contadorDeVarones

var notaMasBaja;
var sexoDeLaNotaMasBaja;

var notaDelAlumno
var sexoDelAlumno;

var sumaDeNotas;
var promedioDeNotas;

var notaDelMasJoven;
var sexoDelMasJoven;

var edadDelAlumno;
var edadMinima;

var contadorDeMujeres;
var edadPrimerMujer;
var notaPrimerMujer;

//-------------------------
contador = 0;
contadorDeVarones = 0;

notaMasBaja = 0;
sexoDeLaNotaMasBaja;

sumaDeNotas = 0;
promedioDeNotas = 0;

notaDelMasJoven = 0;
sexoDelMasJoven;

edadDelAlumno = 0;
edadMinima = 0;

contadorDeMujeres = 0 ;
edadPrimerMujer = 0;
notaPrimerMujer;

    while(contador < 5)
    {
//--------------------------------------- validacion de resultados
        notaDelAlumno = prompt("Ingrese la nota del alumno");
        notaDelAlumno = parseFloat(notaDelAlumno);

        while (notaDelAlumno>10 || notaDelAlumno<0)
        {
            alert("capo, ingresa una nota entre 0 y 10.");
            notaDelAlumno = prompt("Ingrese la nota del alumno");
            notaDelAlumno = parseFloat(notaDelAlumno);
        }

        sexoDelAlumno = prompt('Indique el sexo del alumno con una "m" para masculino o con "f" para femenino');
        while (sexoDelAlumno != "m" && sexoDelAlumno != "f")
        {
            alert("asegurate de haber escrito bien el sexo del alumno con las letras asignadas.");
            sexoDelAlumno = prompt('Indique el sexo del alumno con una "m" para masculino o con "f" para femenino');
        }
        
        edadDelAlumno = prompt("Ingrese la edad del alumno"); 
        while(edadDelAlumno>90 || edadDelAlumno<10)
        {
            alert("escriba una edad coherente, menso.")
            edadDelAlumno = prompt("Ingrese la edad del alumno"); 
        }

// -------------------------------------- Fin de validacion de resultados

        if(notaDelAlumno <= notaMasBaja || contador == 0) 
        {
            notaMasBaja = notaDelAlumno;
            sexoDeLaNotaMasBaja = sexoDelAlumno;
        }

        if (sexoDelAlumno == "m" && notaDelAlumno >= 6 && edadDelAlumno >= 18)
        {
            contadorDeVarones ++;
        }

        if (edadDelAlumno < edadMinima || contador == 0)
        {
            notaDelMasJoven = notaDelAlumno;
            sexoDelMasJoven = sexoDelAlumno;
        }

        if ( sexoDelAlumno == "f" && contadorDeMujeres == 0)
        {
            edadPrimerMujer = edadDelAlumno;
            notaPrimerMujer = notaDelAlumno;
            contadorDeMujeres++
        }

        sumaDeNotas = sumaDeNotas + notaDelAlumno;
        contador ++;
    }

    promedioDeNotas = sumaDeNotas / 5;

    switch(contadorDeMujeres)
    {
        case 1: 
        alert("la nota de la primera mujer y su edad es" + notaPrimerMujer + " " + edadPrimerMujer);

        default: alert("no hubo mujeres");
    } 
    alert("la nota del mas joven es " + notaDelMasJoven + " y su sexo es " + sexoDelMasJoven);
    alert("La nota mas baja entre los alumnos es " + notaMasBaja + " y el sexo de ese alumno es " + sexoDeLaNotaMasBaja);
    alert("la cantidad de varones mayores a 18 años que sacaron 6 de nota o mas: " + contadorDeVarones)
    alert("el promedio de los alumnos es de " + promedioDeNotas);

}*/
