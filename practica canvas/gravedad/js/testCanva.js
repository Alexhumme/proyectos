var elementoC;
function iniciarJuegoC(){
    elementoC = new elemento(20, 20, 20, 20, "", "red");
    juegoCanva.iniciarArea();
}
var juegoCanva = {
    canva : document.getElementById("testCanva"),
    iniciarArea : function(){
        this.ctx = this.canva.getContext("2d");
        this.intervalo = window.setInterval(actualizarJuegoC, 20);
    }
}
function elemento(ancho, alto, x, y, tipo, color){
    this.ancho = ancho;
    this.alto = alto;
    this.x = x;
    this.y = y;
    this.tipo = tipo;
    this.color = color;
    this.velx = 0;
    this.vely = 0;
    this.gravedad = 0.5;
    this.velGravedad = 0;
    this.actualizar = function(){
        ctx = juegoCanva.ctx;
        ctx.fillStyle = color;
        ct.fillRect(this.x,this.y,this.ancho,this.alto);
    }
    this.mover = function(){
        this.velGravedad += this.gravedad;
        this.x += this.velx;
        this.y += this.vely;
    }
}
function actualizarJuegoC(){
    elementoC.actualizar();
}