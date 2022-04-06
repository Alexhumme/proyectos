// EJECUTAR TODAS LAS FUNCIONE NECESARIAS AL INICIAR EL JUEGO

addEventListener("load", (event)=>{
	iniciarMovimiento();
	generarEscenario();
	detectar();
	lniveles();
	window.setInterval(()=>{eventos.animaciones.girar()}, 20);
	window.setInterval(()=>{eventos.animaciones.parpadear()}, 1200);
	document.getElementById("txts").innerHTML = intro;
	}, false
)