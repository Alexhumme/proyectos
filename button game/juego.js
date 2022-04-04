//variables

var victoria= false
var botones = Array("amarillo", "rojo", "azul", "verde", "naranja", "morado");
var n_aleatorio = 0
// funcion de boton aleatorio
function newbutton(){
    n_aleatorio = Math.floor(Math.random()*(botones.length));
    var c_boton = botones[n_aleatorio]
    return (c_boton)
}
// mas variables
var c_boton = newbutton();
var s_boton = 0
var intentos = 5
var puntos = 0
var partida = 1
//funciones

function jugar(){
  if (victoria==false){
    if (intentos==1){
      puntos = 0
      partida += 1
      c_boton = newbutton()
      alert("perdiste")
      //derrota
      var reintentar = confirm("reintentar?")
      if (reintentar == true) {   
        partida = 1
        alert("**partida 1**" )
        victoria = false
        intentos = 6
        c_boton = newbutton()
        //game over
      } 
      else {
        alert('gracias por jugar')
        c_boton = 0
      }
    }
    else if (c_boton==s_boton){
      partida += 1
      puntos += 1
      alert("ganaste! tienes: " + String(puntos) + " puntos")
      //victoria!
      victoria = true
      var s_nivel = confirm ("continuar?")
      if (s_nivel == true) {
        alert("**partida " + String(partida) + "**" )
        victoria = false
        intentos = 6
        c_boton = newbutton()
        //game over
      } else {alert("gracias por jugar.")}
    }
    intentos -= 1
 }
}
function actualizar(){
  document.getElementById("puntos").innerHTML = puntos
  document.getElementById("intentos").innerHTML = intentos
}
function jugar_color(color) {
  s_boton = color
  jugar()
  actualizar()
}