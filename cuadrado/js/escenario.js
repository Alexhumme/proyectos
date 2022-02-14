escenario = [
l1 = ["p1","p1","p1","p1","p1","p1","p1","p1","p1","p1","p1"],
l2 = ["p1","p3","p2","p0","p0","p0","p0","p0","p0","p0","p1"],
l3 = ["p1","p1","p0","p1","p0","p0","p1","p1","p1","p1","p1"],
l4 = ["p1","p0","p0","p1","p1","p0","p1","p0","p0","p0","p1"],
l5 = ["p1","p0","p1","p1","p0","p0","p1","p0","p1","p0","p1"],
l6 = ["p1","p0","p0","p1","p0","p0","p0","p0","p1","p1","p1"],
l7 = ["p1","p0","p1","p1","p1","p2","p1","p1","p1","p0","p1"],
l8 = ["p1","p0","p0","p0","p0","p0","p0","p0","p0","p3","p1"],
l9 = ["p1","p0","p2","p0","p0","p0","p0","p0","p0","p0","p1"],
l10 =["p1","p0","p0","p0","p0","p0","p0","p0","p0","p0","p1"],
l11= ["p1","p1","p1","p1","p1","p1","p1","p1","p1","p1","p1"]
]

var xb = 0
var yb = 0

function generarEscenario(){
	for (let i=0; i < escenario.length; i++){
		xb = 0
		for (let o=0; o < escenario[i].length; o++){
			document.getElementById("escenario").innerHTML += "<div class='"+escenario[i][o]+" panel' style='top: "+yb+"px;left: "+xb+"px;'> </div>"
			xb += 50
		}
		yb += 50
	}
	xb = 0
	yb = 0
}