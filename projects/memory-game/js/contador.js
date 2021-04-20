let movimientosText;

function Contador () {

    movimientos++
    movimientosText = movimientos

    if (movimientos < 10) {
        movimientosText = "0" + movimientos
    }

    document.querySelector("#mov").innerHTML = movimientosText

    if (movimientosText > niveles[nivelActual].movimientosMax) {
        setTimeout (function () {
            sinMovimientos()
        }, 850)
        paraCrono()
    }

}

function maximoMovimientos() {

    let movimientosMaxTexto = niveles[nivelActual].movimientosMax

    document.querySelector("#max-mov").innerText = movimientosMaxTexto
}


