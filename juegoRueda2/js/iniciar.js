addEventListener("load", iniciarJuego(), false)

function iniciarJuego() {
    myGameArea.iniciar();
}
  
var juego = {
    canvas : document.createElement("canvas"),
    iniciar : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}