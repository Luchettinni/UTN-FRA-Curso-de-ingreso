/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var ancho;
var largo;

function Rectangulo () 
{
    alvaroSeLaCome();
    resultado = ((largo + ancho) * 2) * 3;
    alert(resultado);
}
function Circulo () 
{
    alvaroSeLaCome();
    resultado = (radio * 2 * 3.14);
    alert(resultado);
}
function Materiales () 
{
    alvaroSeLaCome();
    perimetro = (largo * ancho);
    resultado = perimetro * 2; // bolsas de cemento
    resultado2 = perimetro * 3; // bolsas de cal
    
    alert("necesitaras " + resultado + " de bolsas de cemento"+ "y " + resultado2 + " bolsas de cal ");
}
function alvaroSeLaCome() 
{ 
    radio = document.getElementById("Radio").value;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseFloat (largo);
    ancho = parseFloat (ancho);
    radio = parseFloat (radio);
}