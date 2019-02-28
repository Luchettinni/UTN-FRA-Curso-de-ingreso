function mostrar()
{

	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var respuesta;

	contador=0;
	respuesta="si";
	
	while(respuesta!='no')
	{	
		contador ++;
		numeroIngresado = prompt("ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (contador == 1)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			bandera = 1;	
		} else
		{
			if (numeroIngresado > numeroMaximo)
			{
			numeroMaximo = numeroIngresado;
			}

			if (numeroIngresado < numeroMinimo)
			{
			numeroMinimo = numeroIngresado;
			}

		}

		
		respuesta = prompt("ingrese no para salir");
	}
	console.log("el maximo es " +numeroMaximo);
	console.log("el minimo es " + numeroMinimo);



}