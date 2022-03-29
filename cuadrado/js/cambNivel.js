// funcion para cambiar niveles segun su numero
function cambN(n){
    nivel=n;
    generarEscenario();
    eventos.morir(nivel);
}
// funcion que crea los botones de seleccion de nivel
function lniveles(){
    var nLista = document.getElementById("nivelesLista");
    for (let o=0; o < niveles.length; o++){
        nLista.innerHTML += "<button onclick='cambN("+o+")'>  nivel "+ o +" </button>";
    }
}