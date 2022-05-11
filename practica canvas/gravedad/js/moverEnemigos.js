var enemigos = [];

function moverEnemigos(){
   for (let enemigo of enemigos){ 
      enemigo.x+=enemigo.xd;
      if( 
         (((enemigo.x-elementoC.x)**(2))+((enemigo.y-elementoC.y)**(2)))**(1/2) > -fragmentos &&
         (((enemigo.x-elementoC.x)**(2))+((enemigo.y-elementoC.y)**(2)))**(1/2) < fragmentos &&
         (((enemigo.y-elementoC.y)**(2))+((enemigo.y-elementoC.y)**(2)))**(1/2) > -fragmentos &&
         (((enemigo.y-elementoC.y)**(2))+((enemigo.y-elementoC.y)**(2)))**(1/2) < fragmentos 
         ){enemigo.img.src = "imgs/enemigo.png";}else{enemigo.img.src = "imgs/enemigoDark.png";}
      enemigo.dibujar();
      enemigo.mover();
   }
}

