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
    this.dibujar = function(){
        ctx = juegoCanva.ctx;
        switch (this.tipo) {
            case "bloque":
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.ancho,this.alto);
                switch (this.subTipo){
                    case 0: this.img.src = "imgs/fondo.png";break;
                    case 1: this.img.src = "imgs/bloque1.png";;break;
                    case 2: this.img.src = "imgs/cambiador.png";break;
                    case 3: this.img.src = img2;break;
                }
                ctx.drawImage(this.img,this.x,this.y);
            break;
            case "jugador":
            // dibujar jugador
            ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(this.angulo); //para girar, rotamos toda la canva guardando y restaurando su estado anterior, de esta manera debemos declarar que el circulo se encuentra en el 0,0 y sera entonces lo unico que gire
            /*ctx.fillStyle = this.color;
            ctx.beginPath(); //cuerpo
            ctx.arc(0,0,this.ancho,0,2*Math.PI);
            ctx.fill();
            ctx.fillStyle = "black";
            ctx.lineTo(0,0); //boca
            ctx.moveTo(this.x/2, this.y/4);
            ctx.stroke();
            ctx.closePath();
            /*ctx.beginPath(); //ojo
            ctx.arc(this.ancho/2, -this.alto*0.5, this.alto*0.2, 0, Math.PI*2);
            ctx.fill();
            ctx.closePath();*/
            this.img.src = "imgs/personaje.gif";
            ctx.drawImage(this.img,0-this.ancho,0-this.alto,this.ancho*2,this.alto*2);
            ctx.restore();
            
            
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
        casoContacto(this,bloques);
        reentrar(this);
    }
    this.rebotar = function(superficie, lado, esto){
        switch (lado)
                {
                    case "up":
                        //console.log("up");
                        if (esto.color != "blue"){esto.salto = esto.y - 20;}
                        esto.saltar = true;
                        esto.y = superficie.y-esto.alto;
                        esto.velGravedad = -(esto.velGravedad*esto.rebote);
                        break;
                    case "left":
                        ///console.log("left");
                        esto.x = superficie.x-esto.ancho; 
                        esto.velx = -(esto.velx*esto.rebote);
                        break;
                    case "right":
                        //console.log("right");
                        esto.x = superficie.x+superficie.ancho+esto.ancho; 
                        esto.velx = -(esto.velx*esto.rebote);
                        break;
                    case "down":
                        //console.log("down");
                        esto.y = superficie.y+esto.alto+superficie.alto;
                        esto.velGravedad = -(esto.velGravedad*esto.rebote);
                }
    }
    // que hacer cuando en objeto entre en contacto con una superficie en un lado dado
    this.contacto = function(superficie, lado){
        switch (superficie.subTipo)
        {
            case 1:
                this.rebotar(superficie, lado,this);
                if (this.color == "blue" ){disparo = false;}
                break;
            case 2:
                if (this.color == "blue" ){
                    switch (superficie.color){
                        case "blue": c2 = "purple"; img2 = "imgs/acelerador.png";break;
                        case "gray": c2 = "blue"; img2 = "imgs/nadador.png";break;
                        case "purple": c2 = "gray"; img2 = "imgs/bloque1.png" ;break;
                    }
                    disparo = false;
                }
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
                superficie.color = "blue";
                break;

            case 5:
                this.rebotar(superficie, lado, this);
                break;
            default: break;
        }
    }
}