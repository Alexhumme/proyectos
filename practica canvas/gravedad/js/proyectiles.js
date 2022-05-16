var proyectiles = 0; var proyectil;
var Cpro = 5;
var proX, proY;
var disparo = false;

function generarProyectiles(){
    /*if (proyectiles>=1){*/proyectil = new elemento(3,3, proX, proY, true, "proyectil", "",0,0,1,9999, "blue");/*}*/
}
function dibujarProjectiles(){
    if (proyectiles>=1){
        if (disparo == false){
            proX = elementoC.x-2;
            proY = elementoC.y-15;
            proyectil.x = proX;
            proyectil.y = proY;
        }else{
            proX = proyectil.x;
            proY = proyectil.y;
            proyectil.x = proX;
            proyectil.y = proY;
        }
        proyectil.dibujar();
        proyectil.mover();
    }
}
function disparar(x, y){
    if (proyectiles>=1){
        let x1 = x-elementoC.x, y1 = y-elementoC.y;
        let n = (((x1**(2))+(y1**(2)))/150)**(1/2);
        let x2 = (x1/n), y2 = (y1/n);
        disparo = true;

        proyectil.velx = x2;
        proyectil.velGravedad = y2;
    }
}