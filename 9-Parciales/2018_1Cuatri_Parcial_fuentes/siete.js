function mostrar()
{
//-----------------------------
    var contador;

    var notaIngresada;
    var generoIngresado;
    var sumaDeNotas;
    var notaMinima;
    var generoDeLaNotaMinima;
//-----------------------------
    contador = 0;
    notaIngresada = 0;
    sumaDeNotas = 0;
    notaMinima = 0;
//-----------------------------
    while(contador < 5)
    {
        //-----------------------------
        notaIngresada = prompt("Ingrese la nota del alumno");
        while (notaIngresada > 10 || notaIngresada <0)
        {
            alert("Introduzca la nota correctamente.");
            notaIngresada = prompt("Ingrese la nota del alumno");
        }
        notaIngresada = parseInt(notaIngresada);
        //-----------------------------
        generoIngresado = prompt('Ingrese el genero del alumno con "f" para femenino y "m" para masculino.' );
        while (generoIngresado != "m" && generoIngresado != "f")
        {
            alert("el genero asignado es inexistente")
            generoIngresado = prompt('Ingrese el genero del alumno con "f" para femenino y "m" para masculino.' );
        }
        //-----------------------------
        if (notaIngresada < notaMinima || contador == 0)
        {
            notaMinima = notaIngresada;
            generoDeLaNotaMinima = generoIngresado;
        }
        //-----------------------------
        sumaDeNotas = sumaDeNotas + notaIngresada;
        contador ++;

    }
    sumaDeNotas = sumaDeNotas / 5;
    alert("el promedio de todas las notas es de " + sumaDeNotas);
    alert("la nota mas baja de los 5 alumnos es" + notaMinima + " y su genero es " + generoDeLaNotaMinima);
}
