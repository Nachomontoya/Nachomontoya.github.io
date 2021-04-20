let totalDescubiertas;
let descubiertas;
let tarjetasPendientes;

function descubrir() {

    totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)")
    
    if (totalDescubiertas.length > 1) {
      return;
    }
  
    this.classList.add("descubierta")

    document.querySelector("#sonido_carta").cloneNode().play();
  
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)")
    
    if (descubiertas.length < 2) {
      return
    }
  
    comparar(descubiertas)
    Contador() 

    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)")

    if (tarjetasPendientes.length === 0) {
      setTimeout(function() {
        finalizar()}, 850)
        paraCrono()
    }

  }


  function comparar (descubiertas) {
    if (descubiertas[0].dataset.valor === descubiertas[1].dataset.valor) {
      acierto (descubiertas)
    } else {
      error (descubiertas)
    }
  }
