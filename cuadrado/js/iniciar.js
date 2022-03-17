// EJECUTAR TODAS LAS FUNCIONE NECESARIAS AL INICIAR EL JUEGO

addEventListener("load", (event)=>{
	iniciarMovimiento()
	generarEscenario()
	detectar()
	lniveles()
	document.getElementById("txts").innerHTML = intro;
	}, false
)