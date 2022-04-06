var eventos = {
	llavesR : function(){ // contar cantidad de llaves en el nivel
		let llaves =  0;
		for (let i = 0; i < paneles.length; i++){
			if (paneles[i].className == "p3 panel"){llaves++}
		}
		return llaves;
	},
	teleport : function(panel, tipo){
		// destipar el panel inicial
		panel.id = "";

		// buscar el otro teletransportador
		let tp = document.getElementById(tipo); 

		// convertir texto a numeros
		x = tp.style.left.split();
		x = x.splice(x.indexOf("p"));
		x = x.splice(x.indexOf("x"));
		x = parseInt(x.join(""));
		y = tp.style.top.split();
		y = y.splice(y.indexOf("p"));
		y = y.splice(y.indexOf("x"));
		y = parseInt(y.join(""));
		
		// actualizar posicion
		cuadrado.style.top = y-1+"px";
		cuadrado.style.left = x-1+"px";
		
		// retipar el panel inicial
		panel.id = tipo;
	},
	comer : function(fruta){
		frutas += 1;
		document.getElementById("frutas").innerHTML = "frutas: " + frutas;
		fruta.className = "p0";
		console.log("comiste");
	},
	recolectar : function(llave){
		llaves += 1;
		document.getElementById("puntaje").innerHTML = "llaves : " + llaves;
		llave.className = "p0";
		console.log("conseguiste llave");
	},
	animaciones : {
		parpadear : ()=>{
			var p_mortales = document.getElementsByClassName("p2");
			for (let panel of p_mortales) {
				if (panel.className = "p2 panel p2"){
					activarEventos("");
				}
				panel.className = "p2 panel " + ser[w];
			}
			v = -v;
			w = w+v;
		},
		girar : ()=>{
			var salida = document.getElementsByClassName("p4")[0];
			rot += 2;
			salida.style.transform = "rotate("+rot+"deg)";
		}
	
	},
	morir : function(n){
		x = 450;
		y = 50;
		llaves = 0;
		nivel = n;
		cuadrado.style.top = y+"px";
		cuadrado.style.left = x+"px";
		cuadrado.style.backgroundImage = "url('img/conejoS.png')";
		document.getElementById("escenario").innerHTML = "";
		document.getElementById("nivel").innerHTML = "nivel: " + (nivel);
		document.getElementById("puntaje").innerHTML = "llaves: " + llaves;
		generarEscenario();
	},
	colision : function(tecla){ // te devuelve a tu posicion anterior si encuentras un muro
		switch (tecla){
			case "ArrowUp":
				y += 50;
				cuadrado.style.top = y + "px";
				cuadrado.style.backgroundImage = "url('img/conejoW.png')";
				break;
			case "ArrowDown":
				y -= 50;
				cuadrado.style.top = y + "px";
				cuadrado.style.backgroundImage = "url('img/conejoS.png')";
				break;
			case "ArrowLeft":
				x += 50
				cuadrado.style.left = x + "px";
				cuadrado.style.backgroundImage = "url('img/conejoA.png')";
				break;
			case "ArrowRight":
				x -= 50
				cuadrado.style.left = x + "px";
				cuadrado.style.backgroundImage = "url('img/conejoD.png')";
				break;
		} 
	},
	abrir : function(puerta, tecla){
		if(llaves>0){
			llaves--;
			puerta.style.top = (y+10)+"px";
			puerta.style.backgroundImage = "url('img/puerta2a.png')";
			document.getElementById("puntaje").innerHTML = "llaves: " + llaves;
		}else{
			eventos.colision(tecla)
		}
	},
	ganar : function(){
		x = 450;
		y = 50;
		cuadrado.style.top = y+"px";
		cuadrado.style.left = x+"px";
		document.getElementById("escenario").innerHTML = ""
		alert("HAS GANADO EL NIVEL", nivel); 
		nivel++;
		document.getElementById("nivel").innerHTML = "nivel: " + (nivel);
		generarEscenario();
	}
}
var rot = 0;
var llaves = eventos.llavesR();
var frutas = 0;
var ser = ["p0","p2"];
var v = 1;
var w = 1;