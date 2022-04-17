// funcion para corregir la salida del escenario
var limx = 0;
var limy = 0;

function reentrar(){
    if (elementoC.x - elementoC.ancho < 0 || 
        elementoC.x + elementoC.ancho > juegoCanva.canva.width){
        elementoC.x = 30;
        limx = elementoC.velx;
    }
    if (elementoC.y - elementoC.alto < 0 || 
        elementoC.y + elementoC.alto > juegoCanva.canva.height){
        elementoC.y = 30;
        limy  = elementoC.velGravedad;
    }
}