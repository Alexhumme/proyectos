var x = 450
var y = 50
var cuadrado = document.getElementById("cuadradoRojo");
var fantasma = document.getElementById("fantasma");
var fantasmaX = document.getElementById("fantasmaX");
var fantasmaY = document.getElementById("fantasmaY");

cuadrado.style.top = y + "px"
cuadrado.style.left = x + "px"
cuadrado.style.backgroundImage = "url('img/conejoS.png')"

function mover(tecla){
	switch (tecla){
		case "ArrowUp":
			y -= 50;
			//cuadrado.style.transform = "rotate(180deg)"
			fantasmaY.style.top = 15 + y + "px";
			fantasmaY.style.visibility = "hidden";
			fantasma.style.top = 15 + y + "px";
			cuadrado.style.top = y + "px";
			cuadrado.style.backgroundImage = "url('img/conejoW.png')";
			break;
		case "ArrowDown":
			y += 50;
			//cuadrado.style.transform = "rotate(0deg)"
			fantasmaY.style.top = 15 + y + "px";
			fantasmaY.style.visibility = "hidden";
			fantasma.style.top = 15 + y + "px";
			cuadrado.style.top = y + "px";
			cuadrado.style.backgroundImage = "url('img/conejoS.png')";
			break;
		case "ArrowLeft":
			x -= 50
			//cuadrado.style.transform = "rotate(90deg)"
			fantasmaX.style.left = 15 + x + "px";
			fantasmaX.style.visibility = "hidden";
			fantasma.style.left = 15 + x + "px";
			cuadrado.style.left = x + "px";
			cuadrado.style.backgroundImage = "url('img/conejoA.png')";
			break;
		case "ArrowRight":
			x += 50
			//cuadrado.style.transform = "rotate(-90deg)"
			fantasmaX.style.left = 15 + x + "px";
			fantasmaX.style.visibility = "hidden"
			fantasma.style.left = 15 + x + "px";
			cuadrado.style.left = x + "px";
			cuadrado.style.backgroundImage = "url('img/conejoD.png')";
			break;
		case "r": morir(); break;
		case "R": morir(); break;
	}
}

function iniciarMovimiento(){                                     
	document.addEventListener("keydown", ()=>mover(event.key), false)
}