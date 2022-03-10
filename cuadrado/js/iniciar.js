addEventListener("load", (event)=>{
	iniciarMovimiento()
	generarEscenario()
	detectar()
	lniveles()
	document.getElementById("txts").innerHTML = intro;
	}, false
)