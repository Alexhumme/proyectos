// POSICION DE CADA PANEL
var xb = 0;
var yb = 0;
var retraso = 0;
// LLENAR EL "ESCENARIO" DE PANELES
/*
1. limpiar
2. entrar a  nivel
3. leer fila
4. leer clase del panel
*/

// VARIABLES DE COLOR
var c0 = "white";
var c1 = "gray";
var c2 = "gray";
var img2 = "imgs/bloque1.png"

function generarEscenario(capa, tipo, ancho, alto, lista)
{	
	for (let y=0; y < capa.length; y++)
    {
		xb = 0 - retraso
		for (let x =0; x < capa[y].length; x++)
        {
            if (capa[y][x] != N){
                switch (capa[y][x])
                {
                    case 1: c = c1;break;
                    case 2: c = c2;break;
                    case 3: c = c2;break;
                    case 4: c = "orange";break;
                    case 5: c = "red";break;
                    default: c = c0;break;
                }
                lista.push( new elemento(ancho, alto, xb, yb, false, tipo, capa[y][x], 0.5, 0,1, 50, c) );
            }
            
			xb += 15
		}
		yb += 15
	}
	xb = retraso;
	yb = 0
    for (bloque of lista){
        bloque.dibujar();
    }
}