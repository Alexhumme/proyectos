// DIBUJAR UN RECTANGULO
    //invocar la hoja (canva)
        var canva1 = document.getElementById("canva1");
    //invocar el lapiz de la hoja
        var lapiz1 = canva1.getContext("2d");
    //hacer que el lapiz sea rojo
        lapiz1.fillStyle = "#FF0000";
    //crear rectangulo relleno con x, y, ancho, alto
        lapiz1.fillRect(50, 10, 100, 75);
//

// DIBUJAR LINEAS
    //
        var canva2 = document.getElementById("canva2");
        var lapiz2 = canva2.getContext("2d");
    //mover lapiz y dibujar lineas
        lapiz2.moveTo(100, 25);
        lapiz2.lineTo(100, 75);
        lapiz2.moveTo(80, 20);
        lapiz2.lineTo(120, 20);
    //ejecutar la dibujada de las lineas
        lapiz2.stroke();
    //dibujar circulos
        //empezar sendero
            lapiz2.beginPath();
            //arcos con x (del centro), y (del centro), radio, inicio, final
                lapiz2.arc(70, 35, 5, 0, 2*Math.PI);
                lapiz2.moveTo(135,35);
                lapiz2.arc(130, 35, 5, 0, 2*Math.PI);
                lapiz2.moveTo(130, 50)
                lapiz2.arc(100, 50, 30, 0, Math.PI);
            //rellenar de color
                lapiz2.fill();
        //terminar sendero y ejecutar la dibujada de circulos
            lapiz2.closePath();
//

// DEGRADACION DE COLOR
    //
        var canva3 = document.getElementById("canva3");
        var lapiz3 = canva3.getContext("2d");
    // figura
        //gradiante para la figura (lineal) con: x, y, x1, y1
            var grdL = lapiz3.createLinearGradient(0, 100, 0, 0);
            grdL.addColorStop(0, "red");
            grdL.addColorStop(0.5, "lightblue");
            grdL.addColorStop(1, "yellow");
        lapiz3.fillStyle = grdL;
        lapiz3.beginPath();
        lapiz3.arc(100, 50, 30, 0, 2*Math.PI);
        lapiz3.fill();
        lapiz3.closePath();
    
    //gradiante para una linea (circular) con: x, y, r, x1, y1, r1
        var grdC = lapiz3.createRadialGradient(100, 50, 40, 200, 100, 50);
        grdC.addColorStop(0, "red");
        grdC.addColorStop(0.5, "lightgreen");
        grdC.addColorStop(1, "yellow");
    lapiz3.strokeStyle = grdC;
    lapiz3.moveTo(0, 50);
    lapiz3.lineTo(200,50)
    lapiz3.stroke();
    
//

// TEXTO DE CANVAS
    //
        var canva4 = document.getElementById("canva4")
        var lapiz4 = canva4.getContext("2d");
    // texto con: texto, x, y
        lapiz4.font = "20px Arial";
        lapiz4.fillText("texto relleno", 10, 20);
    // texto sin rellenar
        lapiz4.strokeText("texto sin rellenar", 40, 85);
    // texto alineado al centro
        lapiz4.font = "15px Comic Sans MS"
        lapiz4.fillStyle = grdC;
        lapiz4.textAlign = "center";
        lapiz4.fillText("he texto centrado he", canva4.width/2, canva4.height/2);
//

// IMAGENES
    //
        var canva5 = document.getElementById("canva5");
        var lapiz5 = canva5.getContext("2d");
        var img = document.getElementById("grito");
    // definir funcion que imprima la imagen cuando cargue la pagina
        window.onload = function(){
            lapiz5.drawImage(img, 10, 10);
        }
//

// RELOJ
    // dibujar base
        var canva6 = document.getElementById("canva6");
        var lapiz6 = canva6.getContext("2d");
        // calcular el readio del reloj (la mitad del ancho del canva)
            var radio = canva6.width / 2;
        // reposicionar el obejto de dibujo al centro del canva
            lapiz6.translate(radio, radio);
        // reducir al radio para que el reloj sea un poco mas pequeño que el canva
            radio = radio*0.90;
        // crear una funcion que dibuja el reloj
            function dibujarReloj(){
                lapiz6.beginPath();
                lapiz6.arc(0,0,radio,0,2*Math.PI);
                lapiz6.fillStyle = "black";
                lapiz6.fill();
                dibujarCara(lapiz6, radio);
                numeros(lapiz6, radio);
                dibujarHora(lapiz6, radio);
            }
    // 
    // dibujar la cara del reloj
        function dibujarCara(lapiz, radio){
        // crear gradiente
            var grad = lapiz.createRadialGradient(0 ,0 ,radio*0.95 ,0 ,0 ,radio*1.05);
            grad.addColorStop(0, "cyan");
            grad.addColorStop(0.5, "black");
            grad.addColorStop(1, "cyan");
        // preparar el lapiz y dibujar
            lapiz.strokeStyle = grad;
            lapiz.lineWidth = radio*0.1;
            lapiz.stroke();
        // hacer el pequeño circulo al centro del reloj
            lapiz.beginPath();
            lapiz.arc(0, 0, radio*0.1, 0, 2*Math.PI);
            lapiz.fillStyle = "cyan";
            lapiz.fill();
            lapiz.closePath();
        }
    //
    // añadir numeros al reloj
        function numeros(lapiz, radio){
            var ang;
            var num;
            // que el texto este centrado y sea el 15% del radio
                lapiz.font =  radio * 0.15 + "px arial";
                lapiz.fillStyle = "yellow";
                lapiz.textAlign = "center";
                lapiz.textBaseline = "middle";
            // escribir los numeros
                for (num = 1 ; num<13 ; num++){
                    ang = num * Math.PI/6; //calcula el angulo
                    lapiz.rotate(ang); //gira el lapiz
                    lapiz.translate(0, -radio*0.85); //mueve el lapiz
                    lapiz.rotate(-ang); //gira el lapiz otra vez
                    lapiz.fillText(num.toString(), 0, 0); //escribe el numero
                    
                    lapiz.rotate(ang); //gira el lapiz
                    lapiz.translate(0, radio*0.85); //mueve el lapiz
                    lapiz.rotate(-ang); //gira el lapiz de nuevo
                }
        }
    //
    // añadir manecillas
        function dibujarHora(lapiz, radio){
            // obtener hora actual
                var momentoActual = new Date();
                var hora = momentoActual.getHours();
                var minuto = momentoActual.getMinutes();
                var segundo = momentoActual.getSeconds();
            // horas
                hora = hora%12;
                hora = (hora*Math.PI/6)+(minuto*Math.PI/(6*60))+ (segundo*Math.PI/(6*60*60)); //calcula el angulo de la manecilla
                dibujarManecilla(lapiz6, hora, radio*0.4, radio*0.07, "red");
            // minutos
                minuto = (minuto*Math.PI/(6*5))+ (segundo*Math.PI/(6*5*60)); //calcula el angulo de la manecilla
                dibujarManecilla(lapiz6, minuto, radio*0.85, radio*0.07, "green");
            // segundos
                segundo = (segundo*Math.PI/(6*5)); //calcula el angulo de la manecilla
                dibujarManecilla(lapiz6, segundo, radio*0.9, radio*0.03, "orange");
        }
        function dibujarManecilla(lapiz, pos, largo, ancho, color){
            lapiz.beginPath();
            
            lapiz.lineWidth = ancho;
            lapiz.lineCap = "round";
            lapiz.fillStyle = color;
            lapiz.moveTo(0, 0);
            lapiz.rotate(pos);
            lapiz.lineTo(0, -largo)

            lapiz.stroke();
            lapiz.rotate(-pos);
        }
        setInterval(dibujarReloj, 1000);
        dibujarReloj();

            