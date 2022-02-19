var paneles = document.getElementsByClassName("panel") 

function detectar(){
	document.addEventListener("keydown", ()=>{
		for (let i = 0; i < paneles.length; i++){
			if (cuadrado.style.top == paneles[i].style.top & cuadrado.style.left == paneles[i].style.left){
				switch (paneles[i].id) {
					case "PA": 
						teleport(paneles[i]); break;
					case "PB": 
						teleport(paneles[i]); break;
					default: console.log("hm");
				}
				switch (paneles[i].className) {
					case "p0 panel": break;
					case "p1 panel": colision(event.key); break;
					case "p2 panel": morir(paneles[i]); break;
					case "p3 panel": comer(paneles[i]); break;
					case "p4 panel": ganar(); break;
					case "p5 panel": abrir(paneles[i], event.key); break;
					case "p6 panel": recolectar(paneles[i]); break;
				}
			} 
		}
	}
	,false) 
}