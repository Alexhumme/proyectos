function llavesR(){
	let llaves =  0
	for (let i = 0; i < paneles.length; i++){
		if (paneles[i].className == "p3 panel"){llaves++}
	}
	return llaves
}

llaves = llavesR()

function comer(fruta){
	llaves -= 1;
	document.getElementById("puntaje").innerHTML = "llaves restantes: " + llaves;
	fruta.className = "p0"
	console.log("comiste");
}
function morir(obstaculo){
	x = 350;
	y = 150;
	cuadrado.style.top = y+"px";
	cuadrado.style.left = x+"px";
	document.getElementById("escenario").innerHTML = ""
	generarEscenario()
	llaves = llavesR()
	document.getElementById("puntaje").innerHTML = "llaves restantes: " + llaves;
}
function ganar(){ alert("ganaste"); }
function colision(tecla){ 
	switch (tecla){
		case "ArrowUp":
			y += 50;
			//cuadrado.style.transform = "rotate(180deg)"
			cuadrado.style.top = y + "px";
			cuadrado.style.backgroundImage = "url('img/conejoW.png')";
			break;
		case "ArrowDown":
			y -= 50;
			//cuadrado.style.transform = "rotate(0deg)"
			cuadrado.style.top = y + "px";
			cuadrado.style.backgroundImage = "url('img/conejoS.png')";
			break;
		case "ArrowLeft":
			x += 50
			//cuadrado.style.transform = "rotate(90deg)"
			cuadrado.style.left = x + "px"
			cuadrado.style.backgroundImage = "url('img/conejoA.png')"
			break;
		case "ArrowRight":
			x -= 50
			//cuadrado.style.transform = "rotate(-90deg)"
			cuadrado.style.left = x + "px"
			cuadrado.style.backgroundImage = "url('img/conejoD.png')"
			break;
	}
	console.log("estas en una pared"); 
}
