
function cambN(n){
    nivel=n;
    generarEscenario();
    morir()
}
function lniveles(){
    var nLista = document.getElementById("nivelesLista");
    for (let o=0; o < niveles.length; o++){
        nLista.innerHTML += "<button onclick='cambN("+o+")'>  nivel "+ o +" </button>";
    }
}