var ctx = null;
var anchoTile = 50, altoTile = 50;
var anchoMap = 10, altoMap = 10;

var segundo = 0, conteoFrames = 0, ultimoFrame = 0;

var mapa = 
[
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

window.onload = function()
{
    ctx = document.getElementById("canvas").getContext("2d");
    requestAnimationFrame(dibujarJuego);
    ctx.font = "bold 10pt sans-serif";
}
function dibujarJuego(){
    if (ctx = null) {return} else {
        ctx = document.getElementById("canvas").getContext("2d");
    }

    var seg = Math.floor(Date.now()/1000);
    if (seg != segundo)
    {
        segundo = seg;
        ultimoFrame = conteoFrames;
        conteoFrames = 1;
    } else {conteoFrames++};
    
    for (var y = 0; y < altoMap; y++)
    {
        for (var x = 0; x < anchoMap; x++)
        {
            switch (mapa[((y*anchoMap)+x)])
            {
                case 0: 
                    ctx.fillStyle = "green";
                    break;
                case 1: 
                    ctx.fillStyle = "red";
                    break;
            }
            ctx.fillRect(x*anchoTile, y*altoTile, anchoTile, altoTile);
        }
    }
    ctx.fillStyle = "#fa6543";
    ctx.fillText("FPS: "+ ultimoFrame, 10, 20);

    requestAnimationFrame(dibujarJuego);
}