var jugador;

// funcion inicializadora
    function iniciarJuego(){
        juegoFS.iniciar();
        jugador = new rectangulo(30, 30, "red", 10, 120);
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
        }
    }
//

// construcor de componentes (introduce cosas dentro del area de juego)
    function rectangulo(ancho, alto, color, x, y) {
        this.ancho = ancho;
        this.alto = alto;
        this.x = x;
        this.y = y;
        ctx = juegoFS.contexto;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    }

//
document.addEventListener("load", iniciarJuego(), false);