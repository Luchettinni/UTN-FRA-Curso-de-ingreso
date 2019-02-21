var eleccionMaquina;
var HP = 100;
var SP = 100;
var EnemyHP = 100;
var turn = 1;

function comenzar()
{
	variablecitas();
	EnemyHP = Math.floor(Math.random() * 300) +100;
	document.getElementById("EnemyHP").value = "Enemy HP = " + EnemyHP;
	document.getElementById("HP").value = "Health points " + HP;
	document.getElementById("SP").value = "Stamina points = " + SP;


}
function Atk()
{
	if (turn == 1 && SP > 0) {
	Damage = Math.floor(Math.random() * 35) +10; // random damage.

	if (15 > SP) { alert("you don't have enough stamina to make this move"); }
		else { 
			EnemyHP = EnemyHP -  Damage; 
			SP = SP -15; 
			document.getElementById("EnemyHP").value = "Enemy HP = " + EnemyHP;
			document.getElementById("SP").value = "Stamina points = " + SP;
			alert("you dealt " + Damage + " damage and lost 15 Stamina points");
			} 
		}
		turn --;
		document.getElementById("FormIngreso").getElementsByTagName("h1")[0].innerHTML = "Enemy turn";
		turnoDelBot();	
}

//FIN DE LA FUNCIÓN
function papel()
{

}//FIN DE LA FUNCIÓN
function tijera()
{
	
}//FIN DE LA FUNCIÓN

function turnoDelBot()
{	setTimeout(function(){
	if (turn == 0) { 
	Damage = Math.floor(Math.random() * 35) +10;
	HP = HP -  Damage;
	document.getElementById("HP").value = "Health points " + HP;
	alert("enemy dealt " + Damage);
	turn ++;
	document.getElementById("FormIngreso").getElementsByTagName("h1")[0].innerHTML = "Its your turn";
	} }, 1000);	
}

function mostrarResultado()
{

}
function variablecitas ()
{
	HP = parseInt(HP);
	SP = parseInt(SP);
	EnemyHP = parseInt(EnemyHP);
}