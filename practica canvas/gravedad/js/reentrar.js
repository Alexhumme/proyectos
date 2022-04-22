// funcion para corregir la salida del escenario
var limx = 0;
var limy = 0;

function reentrar(elemento){
    if (elemento.x - elemento.ancho < bloques[0].x){
        elemento.x = juegoCanva.canva.width-30;
    }
    if (elemento.x + elemento.ancho > bloques[52].x+bloques[52].ancho){
        elemento.x = 30;
        limx = elemento.velx;
    }
    if (elemento.y - elemento.alto < 0){
        elemento.y = juegoCanva.canva.height-30;
    }
    if (elemento.y + elemento.alto > juegoCanva.canva.height){
        elemento.y = 30;
        limy  = elemento.velGravedad;
    }
}