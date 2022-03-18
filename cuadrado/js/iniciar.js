// EJECUTAR TODAS LAS FUNCIONE NECESARIAS AL INICIAR EL JUEGO

addEventListener("load", (event)=>{
	iniciarMovimiento();
	generarEscenario();
	detectar();
	lniveles();
	window.setInterval(parpadear, 1000);
	document.getElementById("txts").innerHTML = intro;
	}, false
)