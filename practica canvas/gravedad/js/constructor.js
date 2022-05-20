var jugadorIMGs = ["imgs/jugador1_2.png","imgs/jugador2_2.png","imgs/jugador2_2.png","imgs/jugador1_2.png", "imgs/jugador1_2Dark.png","imgs/jugador2_2Dark.png"];
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
        if (this.subTipo == 8){this.img.src = "imgs/fuente.png";ctx.drawImage(this.img,this.x,this.y);}
        switch (this.tipo) {
            case "cursor":
                this.img.src = "imgs/puntero.png";
                ctx.drawImage(this.img,this.x,this.y-10);
                break;
            
            case "bloque":
            if( (((this.x-elementoC.x)**(2))+((this.y-elementoC.y)**(2)))**(1/2) > -fragmentos &&
                (((this.x-elementoC.x)**(2))+((this.y-elementoC.y)**(2)))**(1/2) < fragmentos &&
                (((this.y-elementoC.y)**(2))+((this.y-elementoC.y)**(2)))**(1/2) > -fragmentos &&
                (((this.y-elementoC.y)**(2))+((this.y-elementoC.y)**(2)))**(1/2) < fragmentos 
            )
            {   
                ctx.fillStyle = this.color;
                
                switch (this.subTipo){
                    case 0: ctx.fillRect(this.x+1,this.y+1,this.ancho-1,this.alto-1);/*this.img.src = "imgs/fondo.png";*/break;
                    case 1: this.img.src = "imgs/bloque1_2.png";break;
                    case 2: this.img.src = cambSrc;break;
                    case 3: this.img.src = img2;break;
                    case 5:
                        ctx.fillStyle = this.color;
                        //ctx.fillRect(this.x,this.y,this.ancho,this.alto);    
                        ctx.textAlign = "center";
                        ctx.font = "bold 7pt sans-serif";
                        ctx.fillStyle = "white";
                        ctx.fillText(this.conteo, 1+this.x+this.ancho/2, 4+this.y+this.alto/2);
                        this.img.src = "imgs/municion.png";
                        break;
                    case 6: this.img.src = "imgs/tubo1_2.png";break;
                    case 7: this.img.src = "imgs/tubo2_2.png";break;
                    case 8: this.img.src = "imgs/fuente.png";break;
                }
                
                ctx.drawImage(this.img,this.x,this.y);
            }else if(comprobarFragmentos(fragmentos+40,this,elementoC) || (comprobarFragmentos(30,this,proyectil))){
                switch(this.subTipo){
                    case 0: break;
                    case 2: this.img.src = cambSrc;break;
                    case 3: this.img.src = img2;break;
                    case 5: this.img.src = "imgs/municion.png"; break;
                    case 8: this.img.src = "imgs/fuente.png";break;
                    default: this.img.src = "imgs/bloqueDark.png";break
                }
                
                ctx.drawImage(this.img,this.x,this.y);
            }
            
            break;
            case "luzBar":
                this.img.src = "imgs/fuente.png";
                ctx.drawImage(this.img,this.x-10,this.y, 10,10);
                ctx.strokeStyle= "white";
                ctx.strokeRect(this.x,this.y,200,this.alto);
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x,this.y,this.ancho,this.alto);
                break;
            case "proyectil":
                this.img.src = "imgs/proyectil1.png";
                ctx.drawImage(this.img,this.x,this.y);
            break
            case "personaje":
            switch (this.subTipo){
                case "jugador": 
                this.img.src = jugadorIMG;
                let vidas = new Image();
                vidas.src = "imgs/vida.png";
                for (let i = 0; i<this.conteo; i++){
                    ctx.drawImage(vidas,(10*i)+10,20);
                }
                ctx.drawImage(this.img,this.x-this.ancho,this.y-this.alto,this.ancho*2,this.alto*2);
                break;
                case 4:
                this.img.src = enemigoIMG;
                ctx.drawImage(this.img,this.x,this.y,this.ancho,this.alto);
                break;
                case 5://dado que no podra disminuir las municiones siendo tipo bloque

                    break;
            }
            
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
                        if (esto.color != "blue"){esto.salto = esto.y - 30;}
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
                    case "green": c2 = "purple";cambSrc = "imgs/cambiador2_C.png"; img2 = "imgs/acelerador_B.png";break;
                    case "blue": c2 = "green";cambSrc = "imgs/cambiador2_B.png"; img2 = "imgs/acelerador.png";break;
                    case "cyan": c2 = "blue";cambSrc = "imgs/cambiador2_D.png"; img2 = "imgs/nadador.png";break;
                    case "purple": c2 = "cyan";cambSrc = "imgs/cambiador2.png"; img2 = "imgs/bloqueCamb.png" ;break;
                }
                if (this.color == "blue" ){disparo = false;}
                break;
            case 3:
                switch (superficie.color){
                    case "cyan": 
                    this.rebotar(superficie, lado,this);
                    if (this.color == "blue" ){disparo = false;}
                    break;
                    case "blue":
                    this.gravedad -= 0.5;
                    this.saltar = true;
                    break;
                    case "purple":
                    this.velx -= 1;
                    break;
                    case "green":
                    this.velx += 1;
                    break;
                }
                break;
            case 4:
                superficie.xd = -superficie.xd; 
                switch(this.subTipo){
                    case "jugador":
                        this.rebotar(superficie, lado,this);
                        proyectiles=0;
                        fragmentos =0;
                        this.conteo--;
                }
                
                break;
            case 5:
                this.rebotar(superficie, lado, this);
                /*switch(this.subTipo){
                    case "jugador":
                        superficie.conteo--;
                        if (superficie.conteo > 0){*/proyectiles=1;//}
                //}
                
                break;
            case 6:
                this.rebotar(superficie, lado, this);
                if (this.color == "blue" ){disparo = false;}
                break;
            case 7:
                this.rebotar(superficie, lado, this);
                if (this.color == "blue" ){disparo = false;}
                break;
            case 8:
                this.rebotar(superficie, lado, this);
                if (this.color == "blue" ){disparo = false;}
                fragmentos = 200;
            default: break;
        }
    }
}