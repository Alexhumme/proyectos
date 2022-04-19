// funcion para corregir la salida del escenario
var limx = 0;
var limy = 0;

function reentrar(elemento){
    if (elemento.x - elemento.ancho < 0 || 
        elemento.x + elemento.ancho > juegoCanva.canva.width){
        elemento.x = 30;
        limx = elemento.velx;
    }
    if (elemento.y - elemento.alto < 0 || 
        elemento.y + elemento.alto > juegoCanva.canva.height){
        elemento.y = 30;
        limy  = elemento.velGravedad;
    }
}