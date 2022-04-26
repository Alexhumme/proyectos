var elementoC;
var bloques = [];
var parar;
var fps = 0, segundo = 0, conteoFrames = 0;

function iniciarJuegoC(){
    elementoC = new elemento(7.5, 7.5, 70, 70, false, "jugador", "", 0.5, 0.1, 0.6, 20, "yellow");
    proX=elementoC.x; proY=elementoC.y;
    juegoCanva.iniciarArea(); 
    generarProyectiles();
}
function detectoresDeEventos(){
    document.addEventListener("keydown", (e)=>{
        juegoCanva.teclas = (juegoCanva.teclas || []);
        juegoCanva.teclas[e.keyCode] = true;
        parar = false;
        casoContacto(elementoC);
    }, false);
    document.addEventListener("keyup", (e)=>{
        juegoCanva.teclas[e.keyCode] = false;
        parar = true;
        acelerarY(2);
    }, false);
    window.addEventListener("mousedown", (e)=>{
        disparar(e.x-juegoCanva.canva.offsetLeft, e.y-juegoCanva.canva.offsetTop);
    }, false);
}
var juegoCanva = {
    canva : document.getElementById("testCanva"),
    iniciarArea : function(){
        this.canva.width = 600;
        this.canva.height = 250;
        this.ctx = this.canva.getContext("2d");
        this.intervalo = window.setInterval(actualizarJuegoC, 20);
        detectoresDeEventos();
    },
    limpiar : function(){
        bloques = [];
        this.ctx.clearRect(0,0,this.canva.width,this.canva.height);
    }
}

function acelerarX(n){
    if (elementoC.velx + n <= 2 && elementoC.velx + n >= -2){elementoC.velx += n;}
}
function acelerarY(n){
    if (n<0){ 
        if (elementoC.saltar){ elementoC.gravedad = n;}
    } else {
        elementoC.gravedad = n;
    }
}
function actCoordenadas(){
    if (juegoCanva.teclas){
        if (juegoCanva.teclas[65]){acelerarX(-0.1); retraso+=elementoC.velx}
        if (juegoCanva.teclas[68]){acelerarX(0.1); retraso+=elementoC.velx}
        if (juegoCanva.teclas[87]){acelerarY(-0.8); elementoC.saltar = false;}
    }
}
function consultarFrames(){
    var seg = Math.floor(Date.now()/1000);
    if (seg != segundo)
    {
        segundo = seg;
        fps = conteoFrames;
        conteoFrames = 1;
    } else {conteoFrames++};

    juegoCanva.ctx.font = "bold 6pt sans-serif";
    juegoCanva.ctx.fillStyle = "red";
    juegoCanva.ctx.fillText("FPS: "+ fps+ " || velocidad: "+ elementoC.velx + " || greavedad: " + elementoC.velGravedad + " || limite X: "+ limx + " || limite Y: " + limy, 10, 10)
}
function actualizarJuegoC(){
    juegoCanva.limpiar();
    actCoordenadas();
    generarEscenario(nivel,"bloque",15,15);
    generarEscenario(capa2,"jugador",3,3);
    moverEnemigos();
    consultarFrames();
    elementoC.mover();
    elementoC.dibujar();
    proyectiles[0].mover();
    dibujarProjectiles();
    

}