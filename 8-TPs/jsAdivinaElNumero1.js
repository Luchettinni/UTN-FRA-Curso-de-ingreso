/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100) +1;
	console.log(numeroSecreto);
  contadorIntentos = 0;
}

function verificar()
{
  var numeroIngresado;
  numeroIngresado = numero.value;
  numeroIngresado = parseInt(numeroIngresado);

  contadorIntentos = contadorIntentos + 1;
  intentos.value = contadorIntentos; 

  console.log(numeroIngresado);
  
  if (numeroIngresado == numeroSecreto)
  {
    if (contadorIntentos < 4) 
    {
      alert("Mas suerte que avlaro en el csgo");
    } else
    {
      alert("essaaa, sos un puto genio adivino crack master dios capo de la vida");
    }
    
  } else
  {
    if (numeroIngresado > numeroSecreto)
    {
      alert("Casi casi eh, un poquito menos y estamos");
    } else
    {
      alert("la pecheaste, higher up the stakes you punk.");
    }
  }
}