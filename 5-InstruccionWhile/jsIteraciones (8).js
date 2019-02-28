function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	var edad;
	var contadorAlumnos;
	contadorAlumnos=0;

	while(true)
	{
		edad = prompt("edad ingresada");
		edad = parseInt(edad);

		if(edad == 66) 
		{
			break;
		}
		
		contadorAlumnos ++;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}