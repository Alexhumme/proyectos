var x = 450
var y = 50
var cuadrado = document.getElementById("cuadradoRojo");

cuadrado.style.top = y + "px"
cuadrado.style.left = x + "px"
cuadrado.style.backgroundImage = "url('img/conejoS.png')"

function mover(tecla){
	switch (tecla){
		case "ArrowUp" || "w":
			y -= 50;
			//cuadrado.style.transform = "rotate(180deg)"
			cuadrado.style.top = y + "px";
			cuadrado.style.backgroundImage = "url('img/conejoW.png')";
			break;
		case "ArrowDown":
			y += 50;
			//cuadrado.style.transform = "rotate(0deg)"
			cuadrado.style.top = y + "px";
			cuadrado.style.backgroundImage = "url('img/conejoS.png')";
			break;
		case "ArrowLeft":
			x -= 50
			//cuadrado.style.transform = "rotate(90deg)"
			cuadrado.style.left = x + "px"
			cuadrado.style.backgroundImage = "url('img/conejoA.png')"
			break;
		case "ArrowRight":
			x += 50
			//cuadrado.style.transform = "rotate(-90deg)"
			cuadrado.style.left = x + "px"
			cuadrado.style.backgroundImage = "url('img/conejoD.png')"
			break;
	}
}

function iniciarMovimiento(){                                     
	document.addEventListener("keydown", ()=>mover(event.key), false)
}