let nivelTexto

function actualizaNivel () {
    nivelActual++
}

function textoNivel () {
    nivelTexto = nivelActual + 1;
    if (nivelTexto < 10) {
        nivelTexto = "0" + nivelTexto;
    }
    document.querySelector("#nivel").innerText = nivelTexto;
}

function subeNivel () {
    actualizaNivel ()
    textoNivel ()
    iniciar ()
}