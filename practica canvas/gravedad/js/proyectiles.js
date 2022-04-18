var proyectiles = [];
var Cpro = 5;
var proX, proY;
var disparo = false;

function generarProyectiles(){
    for (let i=0 ; i< Cpro; i++){
        proyectiles.push( new elemento(3,3, proX, proY, true, "jugador",0,0,1,9999, "blue"))
    }
}
function dibujarProjectiles(){
    for (let proyectil of proyectiles){
        if (disparo == false){
            proX = elementoC.x;
            proY = elementoC.y;
            proyectil.x = proX;
            proyectil.y = proY;
        }else{
            proX = proX;
            proY = proY;
        }
        proyectil.dibujar();
    }
}
function disparar(x, y){
    let x1 = x-elementoC.x, y1 = y-elementoC.y;
    let n = (((x1**(2))+(y1**(2)))/36)**(1/2);
    let x2 = x1/n, y2 = y1/n;
    disparo = true;
    proyectiles[0].velx = x2;
    proyectiles[0].velGravedad = y2;
}