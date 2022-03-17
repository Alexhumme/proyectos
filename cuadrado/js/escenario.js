// LISTA DE NIVELES
niveles = [
	nivel0, nivel1, nivel2, nivel3, nivel4
]

// POSICION DE CADA PANEL
var xb = 0
var yb = 0

// LLENAR EL "ESCENARIO" DE PANELES
/*
1. limpiar
2. entrar a  nivel
3. leer fila
4. leer clase del panel
*/
function generarEscenario(){
	
	document.getElementById("escenario").innerHTML = "";
	for (let i=0; i < niveles[nivel].length; i++){
		xb = 0
		for (let o=0; o < niveles[nivel][i].length; o++){
			if (niveles[nivel][i][o] == "PA"|| niveles[nivel][i][o] == "PB"){
				document.getElementById("escenario").innerHTML += "<div id='"+niveles[nivel][i][o]+"' class='panel' style='top: "+yb+"px;left: "+xb+"px;'> </div>"
				xb += 50
			}else{
				document.getElementById("escenario").innerHTML += "<div class='"+niveles[nivel][i][o]+" panel' style='top: "+yb+"px;left: "+xb+"px;'> </div>"
				xb += 50
			}
		}
		yb += 50
	}
	xb = 0
	yb = 0
}