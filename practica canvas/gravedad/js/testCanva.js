var elementoC;
var tecla;

function iniciarJuegoC(){
    elementoC = new elemento(20, 20, 20, 20, "", "red");
    juegoCanva.iniciarArea();
    document.addEventListener("keypress", (e)=>{
        tecla = e.key;
    });
}
var juegoCanva = {
    canva : document.getElementById("testCanva"),
    iniciarArea : function(){
        this.ctx = this.canva.getContext("2d");
        this.intervalo = window.setInterval(actualizarJuegoC, 20);
    },
    limpiar : function(){
        this.ctx.clearRect(0,0,this.canva.width,this.canva.height);
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
    this.rebote = 0.6;
    this.dibujar = function(){
        ctx = juegoCanva.ctx;
        ctx.fillStyle = color;
        ctx.fillRect(this.x,this.y,this.ancho,this.alto);
    }
    this.mover = function(tecla){
        if (elementoC.y < juegoCanva.canva.height/2 ){this.gravedad = 1.5;}
        this.velGravedad += this.gravedad;
        this.x += this.velx;
        this.y += this.vely + this.velGravedad;
        this.contacto();
        if (tecla == "w"){acelerarY(-1)}
        if (tecla == "a"){elementoC.x-=5}
        if (tecla == "d"){elementoC.x+=5}
    }
    this.contacto = function(){
        var suelo = juegoCanva.canva.height - this.alto;
        if (this.y > suelo) {
            this.y = suelo;
            this.gravedad = -(this.velGravedad*this.rebote);
        }
    }
}

function acelerarY(n){
    if (n<0){ 
        if (elementoC.y>juegoCanva.canva.height-elementoC.alto-1){
            elementoC.gravedad = n;
        }
    }else{
        elementoC.gravedad = n;
    }
    
}
function actualizarJuegoC(){
    console.log(elementoC.y);
    juegoCanva.limpiar();
    elementoC.mover(tecla);
    elementoC.dibujar();
}