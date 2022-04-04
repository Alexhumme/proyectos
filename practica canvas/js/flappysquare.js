var jugador;

// funcion inicializadora
    function iniciarJuego(){
        jugador = new rectangulo(20, 10, "yellow", 10, 120, 1);
        juegoFS.iniciar();
        
    }
    
    
//

// area de juego
    var juegoFS = {
        juego : document.getElementById("flappysquare"),
        iniciar : function(){
            this.juego.width = 480;
            this.juego.height = 270;
            this.contexto = this.juego.getContext("2d");
            document.body.insertBefore(this.juego, document.body.childNodes[14]); //lugar del documento en el que insertaremos elas canvas
            this.intervalo = setInterval(actualizarJuego, 20);
        },
        limpiar : function(){
            this.contexto.clearRect(0,0,this.juego.width,this.juego.height);
        }
    }
//

// construcor de componentes (introduce cosas dentro del area de juego)
    function rectangulo(ancho, alto, color, x, y) {
        this.velx = 0;
        this.vely = 0;
        this.ancho = ancho;
        this.alto = alto;
        this.x = x;
        this.y = y;
        this.actualizar = function(){
            ctx = juegoFS.contexto;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.ancho, this.alto);
        }
        // funcion para mover elementos
        this.mover = function(){
            this.x += this.velx;
            this.y += this.vely;
        }
    }

//
// funcion que actualiza el juego (50FPS)
    function actualizarJuego(){
        juegoFS.limpiar();
        jugador.mover();
        jugador.actualizar();
    }
//
// actualizar valores de coordenadas
    actCoordenadas = function(direccion){
        jugador.velx = 0;
        jugador.vely = 0;
        switch (direccion){
            case "ArrowUp": jugador.vely -= 1; break;
            case "ArrowDown": jugador.vely += 1; break;
            case "ArrowLeft": jugador.velx -= 1; break;
            case "ArrowRight": jugador.velx += 1; break;
        }
    }
    function detener (){jugador.velx=0; jugador.vely=0;}
//

document.addEventListener("load", iniciarJuego(), false);
document.addEventListener("keydown", ()=>actCoordenadas(event.key), false);
document.addEventListener("keyup", ()=>detener(), false)