function llavesR(){
	let llaves =  0
	for (let i = 0; i < paneles.length; i++){
		if (paneles[i].className == "p3 panel"){llaves++}
	}
	return llaves
}

var llaves = llavesR();
function teleport(panel){
		x = panel.style.left.split();
		x = x.splice(x.indexOf("p"));
		x = x.splice(x.indexOf("x"));
		x = parseInt(x.join(""));
		y = panel.style.top.split();
		y = y.splice(y.indexOf("p"));
		y = y.splice(y.indexOf("x"));
		y = parseInt(y.join(""));
		
		cuadrado.style.top = y+"px";
		cuadrado.style.left = x+"px";
		/*
		fantasma.style.visibility = "visible";
		fantasmaX.style.visibility = "visible";
		fantasmaY.style.visibility = "visible";
		*/
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
function morir(){
	x = 450;
	y = 50;
	//nivel = 0;
	llaves = 0;
	fantasma.style.visibility = "hidden"
	//fantasmaX.style.visibility = "hidden"
	//fantasmaY.style.visibility = "hidden"
	cuadrado.style.top = y+"px";
	cuadrado.style.left = x+"px";
	cuadrado.style.backgroundImage = "url('img/conejoS.png')";
	document.getElementById("escenario").innerHTML = ""
	document.getElementById("nivel").innerHTML = "nivel: " + (nivel);
	document.getElementById("puntaje").innerHTML = "llaves: " + llaves;
	generarEscenario()
}
function colision(tecla){ 
	switch (tecla){
		case "ArrowUp":
			y += 50;
			//cuadrado.style.transform = "rotate(180deg)"
			fantasmaY.style.top = 15 + y + "px";
			fantasmaY.style.visibility = "hidden";
			fantasma.style.top = 15 + y + "px";
			cuadrado.style.top = y + "px";
			cuadrado.style.backgroundImage = "url('img/conejoW.png')";
			break;
		case "ArrowDown":
			y -= 50;
			//cuadrado.style.transform = "rotate(0deg)"
			fantasmaY.style.top = 15 + y + "px";
			fantasmaY.style.visibility = "hidden";
			fantasma.style.top = 15 + y + "px";
			cuadrado.style.top = y + "px";
			cuadrado.style.backgroundImage = "url('img/conejoS.png')";
			break;
		case "ArrowLeft":
			x += 50
			//cuadrado.style.transform = "rotate(90deg)"
			fantasmaX.style.left = 15 + x + "px";
			fantasmaX.style.visibility = "hidden";
			fantasma.style.left = 15 + x + "px";
			cuadrado.style.left = x + "px"
			cuadrado.style.backgroundImage = "url('img/conejoA.png')"
			break;
		case "ArrowRight":
			x -= 50
			//cuadrado.style.transform = "rotate(-90deg)"
			fantasmaX.style.left = 15 + x + "px";
			fantasmaX.style.visibility = "hidden";
			fantasma.style.left = 15 + x + "px";
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
function ganar(){
	x = 450;
	y = 50;
	fantasma.style.visibility = "hidden"
	//fantasmaX.style.visibility = "hidden"
	//fantasmaY.style.visibility = "hidden"
	cuadrado.style.top = y+"px";
	cuadrado.style.left = x+"px";
	document.getElementById("escenario").innerHTML = ""
	alert("HAS GANADO >:D"); 
	nivel++;
	document.getElementById("nivel").innerHTML = "nivel: " + (nivel);
	generarEscenario();

}