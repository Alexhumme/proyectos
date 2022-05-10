var elementoC, cursor;
var bloques = [];var especiales = [];
var parar; 
var fps = 0, segundo = 0, conteoFrames = 0, fragmentos = 200;

function iniciarJuegoC(){
    elementoC = new elemento(7, 7, 38, 210, false, "personaje","jugador", 0.5, 0.5, 0.2, 40, "yellow");
    cursor = new elemento(15,15,0,0,false,"cursor","",0,0,0,0,"");
    proX=elementoC.x; proY=elementoC.y;
    juegoCanva.iniciarArea(); 
    generarProyectiles();
    generarEscenario(capa2,"bloque",15,15,especiales);
    generarEscenario(capa3,"personaje",8,8,enemigos);
}
function detectoresDeEventos(){
    document.addEventListener("mousemove", (e)=>{
        cursor.x = e.x-juegoCanva.canva.offsetLeft;
        cursor.y = e.y-juegoCanva.canva.offsetTop;
    }, false);
    document.addEventListener("keydown", (e)=>{
        juegoCanva.teclas = (juegoCanva.teclas || []);
        juegoCanva.teclas[e.keyCode] = true;
        parar = false;
        casoContacto(elementoC,bloques);
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
        this.canva.style.cursor = "none";
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
    if (n>0 && elementoC.saltar){jugadorIMG=jugadorIMGs[0]}
    if (n<0 && elementoC.saltar){jugadorIMG=jugadorIMGs[2]}
}
function acelerarY(n){
    if (n<0){ 
        if (elementoC.saltar){
            elementoC.gravedad = n;
            if(elementoC.velx > 0){jugadorIMG=jugadorIMGs[1];}
            if(elementoC.velx < 0){jugadorIMG=jugadorIMGs[3];}
            
        }
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
    juegoCanva.ctx.fillText("FPS: "+ fps + " || limite X: "+ limx + " || limite Y: " + limy, juegoCanva.canva.width/2, 10)
}
function comprobarFragmentos(thise,accion){
    if( thise.x>elementoC.x-200 &&
        thise.x<elementoC.x+200 &&
        thise.y>elementoC.y-200 &&
        thise.y<elementoC.y+200 ){
            accion;
        }
}
function actualizarJuegoC(){
    juegoCanva.limpiar();
    actCoordenadas();
    generarEscenario(nivel,"bloque",15,15,bloques);
    moverEnemigos();
    cursor.dibujar();
    consultarFrames();
    elementoC.mover();
    elementoC.dibujar();
    dibujarProjectiles();
}