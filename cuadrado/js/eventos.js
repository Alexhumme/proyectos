function llavesR(){
	let llaves =  0
	for (let i = 0; i < paneles.length; i++){
		if (paneles[i].className == "p3 panel"){llaves++}
	}
	return llaves
}

var llaves = llavesR()
function teleport(panel){
		console.log(panel.id);
		cuadrado.style.top = panel.style.top;
		cuadrado.style.left = panel.style.left;
}
function comer(fruta){
	//frutas -= 1;
	//document.getElementById("puntaje").innerHTML = "frutas restantes: " + fruta;
	fruta.className = "p0"
	console.log("comiste");
}
function recolectar(llave){
	llaves += 1;
	document.getElementById("puntaje").innerHTML = "llaves : " + llaves;
	llave.className = "p0"
	console.log("conseguiste llave");
}
function morir(obstaculo){
	x = 450;
	y = 50;
	cuadrado.style.top = y+"px";
	cuadrado.style.left = x+"px";
	document.getElementById("escenario").innerHTML = ""
	generarEscenario()
	llaves = 0
	document.getElementById("puntaje").innerHTML = "llaves: " + llaves;
}
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
}
function abrir(puerta, tecla){
		if(llaves>0){
			llaves--;
			puerta.style.top = (y+1)+"px"
			puerta.style.backgroundImage = "url('img/puerta2a.png')";
			document.getElementById("puntaje").innerHTML = "llaves: " + llaves;
			var abierto = -abierto
		}else{
			colision(tecla)
		}
}
function ganar(){ alert("ganaste"); }