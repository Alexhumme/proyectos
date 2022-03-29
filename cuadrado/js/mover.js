//variables que guardan al personaje y su posicion
var x = 450;
var y = 50;
var cuadrado = document.getElementById("cuadradoRojo");

// posicion y apariencia iniciales
cuadrado.style.top = y + "px"
cuadrado.style.left = x + "px"
cuadrado.style.backgroundImage = "url('img/conejoS.png')"

function mover(tecla){
	switch (tecla){
		case "ArrowUp":
			y -= 50;
			cuadrado.style.top = y + "px";
			cuadrado.style.left = x + "px";
			cuadrado.style.backgroundImage = "url('img/conejoW.png')";
			
			break;
		case "ArrowDown":
			y += 50;
			cuadrado.style.top = y + "px";
			cuadrado.style.left = x + "px";
			cuadrado.style.backgroundImage = "url('img/conejoS.png')";
			break;
		case "ArrowLeft":
			x -= 50
			cuadrado.style.top = y + "px";
			cuadrado.style.left = x + "px";
			cuadrado.style.backgroundImage = "url('img/conejoA.png')";
			break;
		case "ArrowRight":
			x += 50
			cuadrado.style.top = y + "px";
			cuadrado.style.left = x + "px";
			cuadrado.style.backgroundImage = "url('img/conejoD.png')";
			break;
		case "r": eventos.morir(nivel); break;
		case "R": eventos.morir(nivel); break;
	}
}

function iniciarMovimiento(){                                     
	document.addEventListener("keydown", ()=>mover(event.key), false)
}