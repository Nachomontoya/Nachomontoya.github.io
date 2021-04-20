function finalizar () {
    document.querySelector("#endscreen").classList.add("active")
    document.querySelector(".mesa").classList.add("terminado")
}

function sinMovimientos () {
    document.querySelector("#endscreen-nomove").classList.add("active")
    document.querySelector(".mesa").classList.add("terminado")
    clearInterval(cronometro)
}

function sinTiempo () {
    document.querySelector("#endscreen-notime").classList.add("active")
    document.querySelector(".mesa").classList.add("terminado")
}

document.querySelector(".next").addEventListener("click", subeNivel)