// DIBUJAR UN CUADRO
    //invocar la hoja (canva)
var canva1 = document.getElementById("canva1");
    //invocar el lapiz de la hoja
var lapiz1 = canva1.getContext("2d");
    //hacer que el lapiz sea rojo
lapiz1.fillStyle = "#FF0000";
    //crear rectangulo relleno con x, y, ancho, alto
lapiz1.fillRect(50, 10, 100, 75);
//

