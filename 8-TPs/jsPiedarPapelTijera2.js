var eleccionMaquina;
var HP = 100;
var SP = 100;
var EnemyHP = 100;
var turn = 1;

function comenzar()
{

	document.getElementById("FormIngreso").style.display = "1"; 
	document.getElementsByClassName("col-3 col-s-12")[0].style.display = "1";

	 //Random Title Generator

	var RGDNumber = Math.floor(Math.random()*5) + 1;

	console.log(RGDNumber);
	var RGDTitle1 = "A childish game, made by an unknown student.";
	var RGDTitle2 = "You should pay attention to my game and definitely not to this text.";
	var RGDTitle3 = "Yup, this is a random generated title and it's working perfectly fine!";
	var RGDTitle4 = "Alvaro Juan Elena, you killed my father. prepare to die.";
	var RGDTitle5 = "Ahhh un titulo en español, muuuucho mejor...";

	var currentTitle;

	switch (RGDNumber)
	{
		case 1:
			currentTitle = RGDTitle1;
		break; 

		case 2:
			currentTitle = RGDTitle2;
		break; 

		case 3:
			currentTitle = RGDTitle3;
		break; 

		case 4:
			currentTitle = RGDTitle4;
		break; 

		case 5:
			currentTitle = RGDTitle5;
		break; 

	} 

	document.getElementsByTagName("h5")[0].innerHTML = currentTitle;

	 //Random Title Generator

}