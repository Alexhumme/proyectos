addEventListener("load", (event)=>{
	iniciarMovimiento()
	generarEscenario()
	detectar()
	document.getElementById("txts").innerHTML = intro;
	}, false
)