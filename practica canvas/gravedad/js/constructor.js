function elemento(ancho, alto, x, y, saltar, tipo, subTipo, gravedad, friccion, rebote, salto,color){
    this.saltar = saltar;
    this.angulo = 0;
    this.ancho = ancho;
    this.alto = alto;
    this.x = x;
    this.y = y;
    this.tipo = tipo;
    this.subTipo = subTipo;
    this.color = color;
    this.colo2 = false;
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
            if (this.colo2 != false){ctx.fillStyle = this.color2}
            ctx.fillRect(this.x,this.y,this.ancho,this.alto);
            break;
            case "jugador":
            // dibujar jugador
            ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(this.angulo); //para girar, rotamos toda la canva guardando y restaurando su estado anterior, de esta manera debemos declarar que el circulo se encuentra en el 0,0 y sera entonces lo unico que gire
            ctx.fillStyle = this.color;
            ctx.beginPath(); //cuerpo
            ctx.arc(0,0,this.ancho,0,2*Math.PI);
            ctx.fill();
            ctx.fillStyle = "black";
            ctx.lineTo(0,0); //boca
            ctx.moveTo(this.x/2, this.y/4);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath(); //ojo
            ctx.arc(this.ancho/2, -this.alto*0.5, this.alto*0.2, 0, Math.PI*2);
            ctx.fill();
            ctx.closePath();
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
        casoContacto(this);
        reentrar(this);
    }
    this.contacto = function(superficie, lado){
        switch (superficie.subTipo)
        {
            case 1:
                switch (lado)
                {
                    case "up":
                        //console.log("up");
                        if (this.color != "blue"){this.salto = this.y - 20;}
                        this.saltar = true;
                        this.y = superficie.y-this.alto;
                        this.velGravedad = -(this.velGravedad*this.rebote);
                        break;
                    case "left":
                        ///console.log("left");
                        this.x = superficie.x-this.ancho; 
                        this.velx = -(this.velx*this.rebote);
                        break;
                    case "right":
                        //console.log("right");
                        this.x = superficie.x+superficie.ancho+this.ancho; 
                        this.velx = -(this.velx*this.rebote);
                        break;
                    case "down":
                        //console.log("down");
                        this.y = superficie.y+this.alto+superficie.alto;
                        this.velGravedad = -(this.velGravedad*this.rebote);
                }
                if (this.color == "blue" ){disparo = false;}
                break;
            case 2:
                if (this.color == "blue" ){
                    switch (superficie.color){
                        case "blue": c2 = "purple"; break;
                        case "green": c2 = "blue"; break;
                        case "purple": c2 = "green"; break;
                    }
                    disparo = false;
                }
                break;
        }
    }
}