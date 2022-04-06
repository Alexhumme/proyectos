// MANERA EN QUE SE DETECTA QUE BLOQUE PISA EL JUGADOR

var paneles = document.getElementsByClassName("panel");

// FUNCION QUE EJECUTA CODIGO SEGUN EL PANEL
function activarEventos(key){
	for (let i = 0; i < paneles.length; i++){
		if (cuadrado.style.top == paneles[i].style.top & cuadrado.style.left == paneles[i].style.left){
			// PANELES DE TELETRANSPORTE
			switch (paneles[i].id) {
				case "PA":
					eventos.teleport(paneles[i], "PA"); break;
				case "PB":
					eventos.teleport(paneles[i], "PB"); break;
			}
			// OTROS PANELES
			switch (paneles[i].className) {
				case "p0 panel": break;
				case "p1 panel": eventos.colision(key); break;
				case "p2 panel p2": eventos.morir(nivel); alert("moriste, vuelve a empezar :("); break;
				case "p3 panel": eventos.comer(paneles[i]); break;
				case "p4 panel": eventos.ganar(); break;
				case "p5 panel": eventos.abrir(paneles[i], key); break;
				case "p6 panel": eventos.recolectar(paneles[i]); break;
			}
		} 
	}
}

// FUNCION QUE EJECUTA LA ANTERIOR CADA QUE OPRIMES UNA TECLA
function detectar(){
	document.addEventListener("keydown", (e)=>{
		activarEventos(e.key)
	}
	,false) 
}