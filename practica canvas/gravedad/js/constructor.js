var jugadorIMGs = ["imgs/jugador1.png","imgs/jugador2.png","imgs/jugador3.png","imgs/jugador4.png"];
var jugadorIMG = jugadorIMGs[0];
function elemento(ancho, alto, x, y, saltar, tipo, subTipo, gravedad, friccion, rebote, salto,color){
    this.img=new Image();
    this.saltar = saltar;
    this.angulo = 0;
    this.ancho = ancho;
    this.alto = alto;
    this.x = x;
    this.y = y;
    this.tipo = tipo;
    this.subTipo = subTipo;
    this.color = color;
    this.velx = 0;
    this.vely = 0;
    this.gravedad = gravedad;
    this.friccion = friccion;
    this.velGravedad = 0;
    this.rebote = rebote;
    this.salto = this.y - salto;
    this.xd = 1;
    this.conteo = 3;
    this.dibujar = function(){
        ctx = juegoCanva.ctx;
        switch (this.tipo) {
            case "cursor":
                this.img.src = "imgs/puntero.png";
                ctx.drawImage(this.img,this.x,this.y);
                break;
            case "bloque":
            if( this.x>elementoC.x-200 &&
                this.x<elementoC.x+200 &&
                this.y>elementoC.y-200 &&
                this.y<elementoC.y+200 ){
                    ctx.fillStyle = this.color;
                    ctx.fillRect(this.x,this.y,this.ancho,this.alto);
                switch (this.subTipo){
                    //case 0: this.img.src = "imgs/fondo.png";break;
                    case 1: this.img.src = "imgs/bloque1.png";break;
                    case 2: this.img.src = "imgs/cambiador.png";break;
                    case 3: this.img.src = img2;break;
                    case 5:
                        ctx.fillStyle = this.color;
                        ctx.fillRect(this.x,this.y,this.ancho,this.alto);    
                        ctx.textAlign = "center";
                        ctx.font = "bold 6pt sans-serif";
                        ctx.fillStyle = "blue";
                        ctx.fillText(this.conteo, this.x+this.ancho/2, this.y+this.alto/2);
                    break;
                    case 6: this.img.src = "imgs/tubo1.png";break;
                    case 7: this.img.src = "imgs/tubo2.png";break;
                    case 8: this.img.src = "imgs/parpadeante.gif";break;
                }
                ctx.drawImage(this.img,this.x,this.y);
            }
            
            break;
            case "proyectil":
                this.img.src = "imgs/proyectil1.png";
                ctx.drawImage(this.img,this.x,this.y);
            break
            case "personaje":
            // dibujar jugador
            /*
            ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(this.angulo); //para girar, rotamos toda la canva guardando y restaurando su estado anterior, de esta manera debemos declarar que el circulo se encuentra en el 0,0 y sera entonces lo unico que gire
            
            ctx.restore();
            */
            switch (this.subTipo){
                case "jugador": 
                this.img.src = jugadorIMG;
                break;
                case 4:
                this.img.src = "imgs/enemigo.png";
                break;
                case 5:
                    

                    break;
            }
            ctx.drawImage(this.img,this.x-this.ancho,this.y-this.alto,this.ancho*2,this.alto*2);
            //
            break;
        }
    }
    this.mover = function(){
        this.angulo += (this.velx*Math.PI/180)*2;
        if (this.velGravedad + this.gravedad < 10){this.velGravedad += this.gravedad;}
        this.x += this.velx;
        this.y += this.vely + this.velGravedad;
        // frenar
        if(parar){this.velx -= this.velx*this.friccion}
        // caer automaticamente
        if (this.y < this.salto){this.gravedad = 1}
        // casos de contacto
        switch (this.subtipo){case 4: this.velx += this.xd;}
        casoContacto(this,bloques);
        casoContacto(this,enemigos);
        reentrar(this);
    }
    this.rebotar = function(superficie, lado, esto){
        switch (lado)
                {
                    case "up":
                        //console.log("up");
                        if (esto.color != "lue"){esto.salto = esto.y - 30;}
                        esto.saltar = true;
                        esto.y = superficie.y-esto.alto;
                        esto.velGravedad = -(esto.velGravedad*esto.rebote);
                        break;
                    case "left":
                        ///console.log("left");
                        esto.xd = -esto.xd;
                        esto.x = superficie.x-esto.ancho; 
                        esto.velx = -(esto.velx*esto.rebote);
                        break;
                    case "right":
                        //console.log("right");
                        esto.xd = -esto.xd;
                        esto.x = superficie.x+superficie.ancho+esto.ancho; 
                        esto.velx = -(esto.velx*esto.rebote);
                        break;
                    case "down":
                        //console.log("down");
                        esto.y = superficie.y+esto.alto+superficie.alto;
                        this.saltar=false;
                        esto.velGravedad = 3;
                }
    }
    // que hacer cuando en objeto entre en contacto con una superficie en un lado dado
    this.contacto = function(superficie, lado){
        switch (superficie.subTipo)
        {
            case 1:
                this.rebotar(superficie,lado,this);
                if (this.color == "blue" ){disparo = false;}
                break;
            case 2:
                this.rebotar(superficie,lado,this);
                switch (superficie.color){
                    case "blue": c2 = "purple"; img2 = "imgs/acelerador.png";break;
                    case "gray": c2 = "blue"; img2 = "imgs/nadador.png";break;
                    case "purple": c2 = "gray"; img2 = "imgs/bloque1.png" ;break;
                }
                if (this.color == "blue" ){disparo = false;}
                break;
            case 3:
                switch (superficie.color){
                    case "gray": 
                    this.rebotar(superficie, lado,this);
                    if (this.color == "blue" ){disparo = false;}
                    break;
                    case "blue":
                    this.saltar = true;
                    break;
                    case "purple":
                        this.velx += 1;
                }
                break;
            case 4:
                superficie.xd = -superficie.xd;
                switch(this.subTipo){
                    case "jugador":
                        proyectiles=0;
                }
                
                break;
            case 5:
                this.rebotar(superficie, lado, this);
                switch(this.subTipo){
                    case "jugador":
                        superficie.conteo--;
                        if (superficie.conteo > 0){proyectiles=1;}
                }
                
                break;
            case 6:
                this.rebotar(superficie, lado, this);
                if (this.color == "blue" ){disparo = false;}
                break;
            case 7:
                this.rebotar(superficie, lado, this);
                if (this.color == "blue" ){disparo = false;}
                break;
            
            default: break;
        }
    }
}