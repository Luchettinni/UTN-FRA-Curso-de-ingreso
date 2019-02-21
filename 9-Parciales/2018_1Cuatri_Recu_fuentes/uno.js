
function mostrar()
{
    base = prompt("Por favor, introduzca la base de un rectangulo.");
    altura = prompt("ahora, introduzca la altura del triangulo.");
    base = parseInt(base);
    altura = parseInt(altura);
    resultado = (base*altura) /2;
    resultado2 = base*3;
    
    alert("el perimetro de su rectangulo es " + resultado2);
    alert("la superficie de su rectangulo es " + resultado);
}
