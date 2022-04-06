var jugador;

// funcion inicializadora
    function iniciarJuego(){
        jugador = new rectangulo(20, 10, "yellow", 10, 120, 1);
        areaJuego.iniciar();
        
    }
    
    
//

// area de juego
    var areaJuego = {
        juego : document.getElementById("flappysquare"),
        iniciar : function(){
            this.juego.width = 480;
            this.juego.height = 270;
            this.juego.style.cursor = "none"; //desaparecer el cursor
            this.contexto = this.juego.getContext("2d"); //lapiz
            document.body.insertBefore(this.juego, document.body.childNodes[14]); //lugar del documento en el que insertaremos elas canvas
            this.intervalo = setInterval(actualizarJuego, 20); //actualizaciones por segundo
            window.addEventListener("keydown", (e)=>{ //cuando oprimas una tecla, el numero de esa sera el index de un valor positivo en una lista que los guarda, de ser positivos estos actualizaran la posicion
                areaJuego.keys = (areaJuego.keys || []);
                areaJuego.keys[e.keyCode] = true;
            }, false);
            window.addEventListener("keyup", (e)=>{ //lo contratio a la anterior
                areaJuego.keys[e.keyCode] = false;
            }, false);
            /*
            window.addEventListener("mousemove", (e)=>{ //actualiza la posicion del juego a la del cursor
                areaJuego.x = e.pageX;
                areaJuego.y = e.pageY;
            }, false);
            window.addEventListener('touchmove', function (e) { //lo mismo que el anterior pero al tocar la pantalla
                areaJuego.x = e.touches[0].screenX;
                areaJuego.y = e.touches[0].screenY;
            }, false);
            */
        },
        limpiar : function(){
            this.contexto.clearRect(0,0,this.juego.width,this.juego.height);
        }
    }
//

// construcor de componentes (introduce cosas dentro del area de juego, es como una clase)
    function rectangulo(ancho, alto, color, x, y) {
        this.velx = 0;
        this.vely = 0;
        this.ancho = ancho;
        this.alto = alto;
        this.x = x;
        this.y = y;
        this.actualizar = function(){
            ctx = areaJuego.contexto;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.ancho, this.alto);
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
// funcion que actualiza el juego (50FPS)
    function actualizarJuego(){
        areaJuego.limpiar();
        actCoordenadas();
        jugador.mover();
        jugador.actualizar();
    }
//
// actualizar valores de coordenadas
    actCoordenadas = function(){
        jugador.velx = 0;
        jugador.vely = 0;
        if (areaJuego.keys){
            if (areaJuego.keys[37]){jugador.velx = -1;}
            if (areaJuego.keys[39]){jugador.velx = 1;}
            if (areaJuego.keys[38]){jugador.vely = -1;}
            if (areaJuego.keys[40]){jugador.vely = 1;}
        }   
    }
    function detener (){jugador.velx=0; jugador.vely=0;}
//

document.addEventListener("load", iniciarJuego(), false);
