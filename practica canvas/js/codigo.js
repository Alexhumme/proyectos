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
