var jugador;
var obstaculos = [];
var puntaje;
// funcion inicializadora
    function iniciarJuego(){
        jugador = new rectangulo(20, 10, "yellow", 10, 120, 1, "");
        puntaje = new rectangulo("30px", "consolas", "black", 280, 40, "texto");
        areaJuego.iniciar();
    }
    
    
//

// area de juego
    var areaJuego = {
        juego : document.getElementById("flappysquare"),
        iniciar : function(){
            this.juego.width = 700;
            this.juego.height = 270;
            this.juego.style.cursor = "none"; //desaparecer el cursor
            this.contexto = this.juego.getContext("2d"); //lapiz
            document.body.insertBefore(this.juego, document.body.childNodes[14]); //lugar del documento en el que insertaremos elas canvas
            this.frameNo = 0; //conteo de frames
            this.intervalo = setInterval(actualizarJuego, 20); //actualizaciones por segundo
            window.addEventListener("keydown", (e)=>{ //cuando oprimas una tecla, el numero de esa sera el index de un valor positivo en una lista que los guarda, de ser positivos estos actualizaran la posicion
                areaJuego.keys = (areaJuego.keys || []);
                areaJuego.keys[e.keyCode] = true;
            }, false);
            window.addEventListener("keyup", (e)=>{ //lo contratio a la anterior
                areaJuego.keys[e.keyCode] = false;
            }, false);
            
            window.addEventListener("mousemove", (e)=>{ //actualiza la posicion del juego a la del cursor
                areaJuego.x = e.pageX;
                areaJuego.y = e.pageY;
            }, false);
            window.addEventListener('touchmove', function (e) { //lo mismo que el anterior pero al tocar la pantalla
                areaJuego.x = e.touches[0].screenX;
                areaJuego.y = e.touches[0].screenY;
            }, false);
            
        },
        stop : function(){
            clearInterval(this.intervalo)
        },
        limpiar : function(){
            this.contexto.clearRect(0,0,this.juego.width,this.juego.height);
        }
    }
//

// funcion que se ejecuta cada tantos frames
    function cadaIntervalo(n){
        if ((areaJuego.frameNo / n)%1 == 0){
            return true;
        }
        return false;
    }
//
// construcor de componentes (introduce cosas dentro del area de juego, es como una clase)
    function rectangulo(ancho, alto, color, x, y, tipo) {
        this.tipo = tipo;
        this.velx = 0;
        this.vely = 0;
        this.ancho = ancho;
        this.alto = alto;
        this.x = x;
        this.y = y;
        
        this.colision = function(objeto){
            var miIzqu = this.x;
            var miDere = this.x + this.ancho;
            var miArri = this.y;
            var miAbaj = this.y + this.alto;
            var objIzqu = objeto.x;
            var objArri = objeto.y;
            var objDere = objeto.x + objeto.ancho;
            var objAbaj = objeto.y + objeto.alto;
            var colision = true;
            if ((miAbaj < objArri) || (miArri > objAbaj) || (miDere < objIzqu) || (miIzqu > objDere)){
                colision = false;
            }
            return colision;
        }
        
        // dibuja el objeto
        this.actualizar = function(){ 
            ctx = areaJuego.contexto;
            if (this.tipo = "texto"){
                ctx.font = 10 + " " + 10;
                ctx.fillStyle = color;
                ctx.fillText(this.text, this.x, this.y);
            
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.ancho, this.alto);
            }
        }
        // funcion para mover elementos
        this.mover = function(){
            this.x += this.velx;
            this.y += this.vely;
            // esto es para que se mueva el elemento jugador con el mouse
            if (areaJuego.x && areaJuego.y){
                jugador.x = areaJuego.x;
                jugador.y = areaJuego.y;
            }
        }
    }

//
// actualizar valores de coordenadas del jugador
    function actCoordenadas(){
        jugador.velx = 0;
        jugador.vely = 0;
        if (areaJuego.keys){
            if (areaJuego.keys[37]){jugador.velx = -2;}
            if (areaJuego.keys[39]){jugador.velx = 2;}
            if (areaJuego.keys[38]){jugador.vely = -2;}
            if (areaJuego.keys[40]){jugador.vely = 2;}
        }
    }
    function detener (){jugador.velx=0; jugador.vely=0;}
//
// generar obstaculos y comprobar si hay colisiones
    function generarObstaculos(){
        var x,alto,espacio,altoMin, altoMax,espacioMin,espacioMax;
        
        for (let i = 0; i<obstaculos.length; i++){
            if (jugador.colision(obstaculos[i])){
                areaJuego.stop();
                return;
            }
        }
        
        areaJuego.limpiar();
        areaJuego.frameNo++;
        // cada 150 frames las variables x y se actualizaran para crear un nuevo obstaculo posicionado al final de la hoja
        if (areaJuego.frameNo == 1 || cadaIntervalo(150)) {
            x = areaJuego.juego.width; // posicion x inicial = final horizontal de la hoja
            altoMin = 20;
            altoMax = 200
            alto = Math.floor(Math.random()*(altoMax-altoMin+1)+altoMin);
            espacioMin = 50;
            espacioMax = 200;
            espacio = Math.floor(Math.random()*(espacioMax-espacioMin+1)+espacioMin)
            obstaculos.push(new rectangulo(10, alto, "red", x, 0)); //meter un nuevo obstaculo en la lista de estos (arriba)
            obstaculos.push(new rectangulo(10, x-alto-espacio, "red", x, alto+espacio)); //meter un nuevo obstaculo en la lista de estos (abajo)
        }
        
        // hacer que se muevan y dibujen
        for (let i of obstaculos){ 
            i.x-=2.5;
            i.actualizar();
        }
    }
//
// funcion que actualiza el juego (50FPS)
    function actualizarJuego(){
        generarObstaculos();
        actCoordenadas();
        puntaje.text = "PUNTOS: "+ areaJuego.frameNo;
        puntaje.actualizar();
        jugador.mover();
        jugador.actualizar();
    }
//
document.addEventListener("load", iniciarJuego(), false);
