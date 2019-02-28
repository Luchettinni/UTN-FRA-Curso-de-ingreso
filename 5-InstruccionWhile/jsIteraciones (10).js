function mostrar()
{
	var numero;
	var numeroNegativo;
	var numeroPositivo
	var contador;
	var contadorNegativos; 
	var contadorPositivos;
	var contadorDeCeros;
	var contadorDeNumerosPar;
	var respuesta;
// --------------------------
	numero = 0;
	numeroPositivo = 0;
	numeroNegativo = 0;
	contador = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorDeCeros = 0;
	contadorDeNumerosPar = 0;
	respuesta="si";
// --------------------------


	while(respuesta!='no')
	{	
		//contador ++;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);

		
		if (numero == 0)
		{
			contadorDeCeros ++;
		} else
		{
			if (numero < 0)
			{
				numeroNegativo = (numeroNegativo + numero);
				contadorNegativos ++;
			}else
			{
				if (numero > 0)
				{
					numeroPositivo = (numeroPositivo + numero);
					contadorPositivos ++;
				}
			}
		}
		if ( numero % 2 == 0 && numero !=0 )
		{
			contadorDeNumerosPar ++;
		}
		respuesta = prompt("ingrese no para salir");
	}

	promedioDePos = numeroNegativo/contadorNegativos;
	promedioDeNeg = numeroPositivo/contadorPositivos;

	console.log("Suma de negativos " + numeroNegativo);
	console.log("Suma de positivos " + numeroPositivo);
	console.log("total de numeros negativos " + contadorNegativos);
	console.log("Total de numeros positivos " + contadorPositivos);
	console.log("Total de ceros " + contadorDeCeros);
	console.log("Total de numeros pares " + contadorDeNumerosPar);
	console.log("Promedio de negativos " + promedioDeNeg);
	console.log("Promedio de positivos " + promedioDePos);
}
