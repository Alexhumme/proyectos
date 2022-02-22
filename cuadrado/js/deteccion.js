var paneles = document.getElementsByClassName("panel") 

function activarEventos(key){
	for (let i = 0; i < paneles.length; i++){
		if (cuadrado.style.top == paneles[i].style.top & cuadrado.style.left == paneles[i].style.left){
			switch (paneles[i].id) {
				case "PA":
					teleport(document.getElementById("PB")); break;
				case "PB":
					teleport(document.getElementById("PA")); break;
			}
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

function detectar(){
	document.addEventListener("keydown", ()=>{
		activarEventos(event.key)
	}
	,false) 
}