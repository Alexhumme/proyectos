// MANERA EN QUE SE DETECTA QUE BLOQUE PISA EL JUGADOR

var paneles = document.getElementsByClassName("panel");


// FUNCION QUE EJECUTA CODIGO SEGUN EL PA
function activarEventos(key){
	for (let i = 0; i < paneles.length; i++){
		if (cuadrado.style.top == paneles[i].style.top & cuadrado.style.left == paneles[i].style.left){
			// PANELES DE TELETRANSPORTE
			switch (paneles[i].id) {
				case "PA":
					teleport(paneles[i], "PA"); break;
				case "PB":
					teleport(paneles[i], "PB"); break;
			}
			// OTROS PANELES
			switch (paneles[i].className) {
				case "p0 panel": break;
				case "p1 panel": colision(key); break;
				case "p2 panel": morir(); break;
				case "p3 panel": comer(paneles[i]); break;
				case "p4 panel": ganar(); break;
				case "p5 panel": abrir(paneles[i], key); break;
				case "p6 panel": recolectar(paneles[i]); break;
			}
		} 
	}
}

// FUNCION QUE EJECUTA LA ANTERIOR CADA QUE OPRIMES UNA TECLA
function detectar(){
	document.addEventListener("keydown", ()=>{
		activarEventos(event.key)
	}
	,false) 
}