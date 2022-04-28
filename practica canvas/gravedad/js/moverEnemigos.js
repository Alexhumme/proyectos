var enemigos = [];

function crearEenemigos(){

}
function moverEnemigos(){
   for (let enemigo of enemigos){
       enemigo.dibujar();
       enemigo.mover();
   }
}

