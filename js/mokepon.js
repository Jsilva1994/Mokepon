let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego () {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

  let sectionReiniciar = document.getElementById("Reiniciar")
    sectionReiniciar.style.display = "none"

  let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

  let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
  let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
  let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

  let botonReiniciar = document.getElementById("boton-reinciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
  
  }
function seleccionarMascotaJugador() {

  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

  let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"


  let imputHipodoge = document.getElementById("hipodoge") 
  let imputCapipepo = document.getElementById("capipepo") 
  let imputRatigueya = document.getElementById("ratigueya") 
  let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(imputHipodoge.checked) {  
      spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if(imputCapipepo.checked) {
      spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(imputRatigueya.checked) {
      spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else {
      alert("Selecciona una mascota")
    }
      seleccionarMascotaJugadorEnemigo()
    }

function seleccionarMascotaJugadorEnemigo() {
        let mascotaAleatoria = aleatorio (1,3)
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

        if (mascotaAleatoria == 1) {
          spanMascotaEnemigo.innerHTML = "Hipodoge"
        } else if (mascotaAleatoria == 2) {
          spanMascotaEnemigo.innerHTML = "Capipepo"
        } else {
          spanMascotaEnemigo.innerHTML = "Ratigueya"
        }
      }
    
function ataqueFuego() {
        ataqueJugador = "Fuego"
        ataqueAleatorioEnemigo()

      }
function ataqueAgua() {
        ataqueJugador = "Agua"
        ataqueAleatorioEnemigo()
      }
function ataqueTierra() {
        ataqueJugador = "Tierra"
        ataqueAleatorioEnemigo()
      }

function ataqueAleatorioEnemigo() {
        let ataqueAleatorio = aleatorio(1,3)

        if (ataqueAleatorio == 1) {
            ataqueEnemigo = "Fuego"  
        } else if (ataqueAleatorio == 2) {
            ataqueEnemigo = "Agua"
        } else {
            ataqueEnemigo = "Tierra"
        }
         
        combate() 
        }

    function combate() {
        let spanVidasJugador = document.getElementById("vidas-jugador")
        let spanVidasEnemigo = document.getElementById("vidas-enemigo")

          if(ataqueEnemigo == ataqueJugador) {crearMensaje(" EMPATE!🙌")
          } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {crearMensaje(" GANASTE!🎊")
                 vidasEnemigo--
                 spanVidasEnemigo.innerHTML = vidasEnemigo

          } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {crearMensaje(" GANASTE!🎊")
                 vidasEnemigo--
                 spanVidasEnemigo.innerHTML = vidasEnemigo

          } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {crearMensaje(" GANASTE!🎊")
                 vidasEnemigo--
                 spanVidasEnemigo.innerHTML = vidasEnemigo

          } else {crearMensaje(" PERDISTE! ☠️")
                  vidasJugador--
                  spanVidasJugador.innerHTML = vidasJugador
          }
          
        revisarVidas()
        }
      
function revisarVidas() {
    if (vidasEnemigo==0) {
      crearMensajeFinal("GANASTE LA PARTIDA 🎊🎊")
    } else if (vidasJugador ==0) {
      crearMensajeFinal("PERDISTE ☠️☠️")
    } 
}

function crearMensaje(Resultado) {
          let sectionMensajes = document.getElementById("Mensajes")

          let parrafo = document.createElement("p")
          parrafo.innerHTML = "tu mascota atacó con " + ataqueJugador + " la mascota enemiga atacó con " + ataqueEnemigo + Resultado

      sectionMensajes.appendChild(parrafo)    
    }

function crearMensajeFinal(ResultadoFinal) {

      let sectionMensajes = document.getElementById("Mensajes")

      let parrafo = document.createElement("p")
      parrafo.innerHTML = ResultadoFinal

  sectionMensajes.appendChild(parrafo) 
  
  let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let botonReiniciar = document.getElementById("boton-reinciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

    let sectionReiniciar = document.getElementById("Reiniciar")
    sectionReiniciar.style.display = "block"
}    

function reiniciarJuego() {
  location.reload()

}

function aleatorio (min, max) {
      return Math.floor (Math.random() * (max - min + 1) + min)
    }
 

window.addEventListener("load", iniciarJuego) 
