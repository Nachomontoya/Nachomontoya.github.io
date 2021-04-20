function iniciar() {
  movimientos = 0
  reparteTarjetas(niveles[nivelActual].tarjetas);
  maximoMovimientos();
  document.querySelector('#minutos').innerHTML = niveles[nivelActual].minutos;
  document.querySelector('#segundos').innerHTML = niveles[nivelActual].segundos;
  iniciaCronometro ()

  document.querySelectorAll(".endscreen").forEach(function(elemento) {
    elemento.classList.remove("active")
  })

  document.querySelector(".mesa").classList.remove("terminado")
  
  document.querySelector("#mov").innerText = "00"
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir)
  });



}

function reiniciar () {
  nivelActual = 0
  textoNivel ()
  iniciar ()
}

iniciar()

document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", iniciar)
})

document.querySelectorAll(".repeat").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar)
})