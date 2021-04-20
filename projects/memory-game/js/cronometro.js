let minutosTexto
let segundosTexto

function paraCrono () {
    clearInterval(cronometro)
}

function iniciaCronometro() {
    segundos = niveles[nivelActual].segundos
    minutos = niveles[nivelActual].minutos

    function actualizaCronometro() {

        segundos--
        if (segundos < 0) {
            segundos = 59
            minutos--
        }

        minutosTexto = minutos
        segundosTexto = segundos

        if (segundos < 10) {
            segundosTexto = "0" + segundos
        }

        // if (minutos < 10) {
        //     minutosTexto = "0" + minutos
        // }

        if (minutos == 0 && segundos == 0) {
            paraCrono()
            sinTiempo()
        }

        document.querySelector('#minutos').innerHTML = minutosTexto
        document.querySelector('#segundos').innerHTML = segundosTexto

    }

    cronometro = setInterval(actualizaCronometro, 1000)
}

