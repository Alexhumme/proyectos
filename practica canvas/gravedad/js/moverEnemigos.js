var enemigos = [];

function moverEnemigos(){
   for (let enemigo of enemigos){ 
      enemigo.x+=enemigo.xd;
      enemigo.dibujar();
      enemigo.mover();
   }
}

