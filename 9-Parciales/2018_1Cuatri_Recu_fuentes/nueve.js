function mostrar()
{
    //--------------------------
    var respuesta;
    var contador;

    var nombreDeAnimal;
    var pesoDelAnimal;
    var temperaturaDelHabitad;

    var temperaturasPares;
    var contadorsCeroGrados;

    var animalMasPesado;
    var nombreMasPesado;
    var temperaturaMasPesado;

    var promedioPeso;

    var masPesadoBajoCero;
    var menosPesadoBajoCero;
    //--------------------------
    contador = 0;

    temperaturasPares = 0;
    contadorsCeroGrados = 0;

    animalMasPesado = 0;
    temperaturaMasPesado = 0;

    promedioPeso = 0;

    masPesadoBajoCero = 0;
    menosPesadoBajoCero = 0;
    //--------------------------

    while(respuesta != "no")
    {
        // Ingreso de datos ----------------------------------------------------
        nombreDeAnimal = prompt("ingrese el nombre del animal");

        pesoDelAnimal = prompt("ahora, especifique el peso de dicho animal");
        pesoDelAnimal = parseInt(pesoDelAnimal);
        while (pesoDelAnimal <1 || pesoDelAnimal > 1000 || isNaN(pesoDelAnimal))
        {
            pesoDelAnimal = prompt("el peso debe ser entre 1 y 1000, vuelva a introducir un numero");
            pesoDelAnimal = parseInt(pesoDelAnimal);
        }

        temperaturaDelHabitad = prompt("por ultimo, la temperatura de su habitad natural");
        temperaturaDelHabitad = parseInt(temperaturaDelHabitad);
        while (temperaturaDelHabitad < -30 || temperaturaDelHabitad >30 || isNaN(temperaturaDelHabitad))
        {
            temperaturaDelHabitad = prompt("esa temperatura no es valida. vuelva a intentarlo");
            temperaturaDelHabitad = parseInt(temperaturaDelHabitad);
        }
        // ---------------------------------------------------------------------
        
        if (temperaturaDelHabitad%2 == 0 && temperaturaDelHabitad != 0)
        {
            temperaturasPares++;
        }

        if ( pesoDelAnimal > animalMasPesado || contador == 0 )
        {
            animalMasPesado = pesoDelAnimal;
            nombreMasPesado = nombreDeAnimal;
            temperaturaMasPesado = temperaturaDelHabitad;
        }

        if (temperaturaDelHabitad < 0)
        {
            contadorsCeroGrados++;
        }

        if (temperaturaDelHabitad < 0 && pesoDelAnimal > masPesadoBajoCero || contador == 0)
        {
            masPesadoBajoCero = pesoDelAnimal;
        }

        if (temperaturaDelHabitad < 0 && pesoDelAnimal < menosPesadoBajoCero || contador == 0)
        {
            menosPesadoBajoCero = pesoDelAnimal;
        }

        contador++;
        
        promedioPeso = promedioPeso + pesoDelAnimal;

        respuesta = prompt('desea continuar agregando animales? (escriba "no" para salir) ');
    }

    promedioPeso = promedioPeso / contador;

    alert("cantidad de temperaturas pares: " + temperaturasPares);
    alert("el animal mas pesado es " + nombreMasPesado + " y su temperatura es de " + temperaturaMasPesado);
    alert("cantidad de animales que viven a menos de 0 grado: " + contadorsCeroGrados);
    alert("el promedio de peso es: " + promedioPeso);
    alert("el peso maximo del bajo cero es: " + masPesadoBajoCero + " y el minimo de peso es: " + menosPesadoBajoCero);
}