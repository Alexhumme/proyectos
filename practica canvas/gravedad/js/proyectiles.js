var proyectiles = [];
var Cpro = 5;
var proX, proY;
var disparo = false;

function generarProyectiles(){
    for (let i=0 ; i< Cpro; i++){
        proyectiles.push( new elemento(3, 3, proX, proY, true, "jugador",0,0,1,40, "blue"))
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
        proyectil.dibujar("jugador");
    }
}
function disparar(x, y){
    disparo = true;
    console.log("x: "+ x+ " y: "+ y);
    proyectiles[0].velx = x;
    proyectiles[0].velGravedad = y;
}