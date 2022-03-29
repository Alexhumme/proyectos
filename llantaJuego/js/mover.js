var x = 0;
var y = 0;

var rueda = document.getElementById("rueda");
var eje = document.getElementById("eje");
var brazo = document.getElementById("l2");

rueda.style.top = y + "px";
rueda.style.left = x + "px";

function mover(tecla){
	switch (tecla){
		case "ArrowUp":
			y -= 10;
			//cuadrado.style.transform = "rotate(180deg)"
			brazo.style.top = y + "px";
			break;
		case "ArrowDown":
			y += 10;
			//cuadrado.style.transform = "rotate(0deg)"
			brazo.style.top = y + "px";
			break;
		case "ArrowLeft":
			x -= 14;

			rueda.style.transform = "rotate("+ x+"deg)"
			rueda.style.top = x**(1/11) + "px";
			rueda.style.left = x + "px";
            eje.style.transform = "rotate("+ 15*x**(1/2)+"deg)"
			break;
		case "ArrowRight":
			x += 40;

			rueda.style.transform = "rotate("+ (x*2)+"deg)"
			rueda.style.left = x/(x) + "px";
			brazo.style.left = x/2;
            eje.style.transform = "rotate("+ (2*x)+"deg)"
			break;
		case "q":
			x = x*99999999;
			break;
	}
}

function iniciarMovimiento(){                                     
	document.addEventListener("keydown", ()=>mover(event.key), false)
}