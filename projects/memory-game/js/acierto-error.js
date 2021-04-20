function acierto (acertadas) {
    acertadas.forEach(function (elemento) {
      elemento.classList.add("acertada")
    })

    setTimeout(function() {
      document.querySelector("#sonido_acierto").cloneNode().play();
    }, 200)
  }
  
  
  function error (equivocadas) {
    equivocadas.forEach(function(elemento) {
      elemento.classList.add("equivocada")
    })

    setTimeout(function() {
      document.querySelector("#sonido_error").cloneNode().play();
    }, 200)
  
    setTimeout(function() {
      equivocadas.forEach(function(elemento){
        elemento.classList.remove("descubierta")
        elemento.classList.remove("equivocada")     
      })
    }, 1000)
  }