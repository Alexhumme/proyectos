var paneles = document.getElementsByClassName("panel") 

function detectar(){
	document.addEventListener("keydown", ()=>{
		for (let i = 0; i < paneles.length; i++){
			if (cuadrado.style.top == paneles[i].style.top & cuadrado.style.left == paneles[i].style.left){
				switch (paneles[i].className) {
					case "p0 panel": break;
					case "p1 panel": colision(event.key); break;
					case "p2 panel": morir(paneles[i]); break;
					case "p3 panel": comer(paneles[i]); break;
					case "p4 panel": ganar(); break;
				}
			} 
		}
	}
	,false) 
}