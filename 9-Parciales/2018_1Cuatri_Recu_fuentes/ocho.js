function mostrar()
{

    var respuesta;
    
    var pais;
    var superficie;

    var contadorSuperficieImpar;
    var contadorSuperficieMenor;
    var ContadorSuperficieMayor;
    var contadorSuperficieIgual;

    var contador;
    var primerPais;

    var superficieMenor;
    var nombreMenor;
    var sumaDeSuperficie;
// ---------------------------------
    respuesta;

    pais;
    superficie = 0;

    contadorSuperficieImpar = 0;
    contadorSuperficieMenor = 0;
    ContadorSuperficieMayor = 0;
    contadorSuperficieIgual = 0;

    contador = 0;
    primerPais = "";
    
    superficieMenor = 0;
    nombreMenor;
    sumaDeSuperficie = 0;
// ----------------------------------
    while (respuesta != "no")
    {
        pais = prompt("ingrese el nombre de un pais");

        superficie = prompt("ingrese la superficie del pais");
        superficie = parseInt(superficie);

        if (superficie %2 != 0)
        {
            contadorSuperficieImpar ++;
        }

// ---------------------------------------------------------------------
        if (superficie < 100)
        {
            contadorSuperficieMenor ++;
        } else
        {
            if (superficie > 100)
            {
                ContadorSuperficieMayor++;
            } else
            {
                contadorSuperficieIgual++;
            }
        }
// ---------------------------------------------------------------------
        if (superficie > 100 && primerPais=="")
        {
            primerPais = pais;
        }
// ---------------------------------------------------------------------
        if (superficie < superficieMenor || contador == 0)
        {
            superficieMenor = superficie;
            nombreMenor = pais;
        }
// ---------------------------------------------------------------------
        contador++;
        sumaDeSuperficie = sumaDeSuperficie+superficie;
        respuesta = prompt("desea continuar agregando paises?");
// ---------------------------------------------------------------------
    }
    sumaDeSuperficie = sumaDeSuperficie / contador;
    alert("cantidad de paises con superficie impar: " + contadorSuperficieImpar);
    alert("la cantidad de paises con superficie mayor a 100 son " + ContadorSuperficieMayor + ", la cantidad de paises con superficie menor a 100 son " + contadorSuperficieMenor + ", y la cantidad de paises con superficie igual a 100 son " + contadorSuperficieIgual);
    alert('el primer pais en superar los 100 de superficie es:' + primerPais);
    alert("el promedio de las superficies es de " + sumaDeSuperficie);
    alert("el nombre del que menos territorio tiene es " + nombreMenor);

}
