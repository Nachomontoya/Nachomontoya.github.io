let totalTarjetas
let barajar 
let mesa
let tarjeta

function barajaTarjetas(lasTarjetas) {
  totalTarjetas = lasTarjetas.concat(lasTarjetas);
  barajar = totalTarjetas.sort(function() {
   return 0.5 - Math.random()
  })
  return barajar
}

function reparteTarjetas(lasTarjetas) {
  mesa = document.querySelector("#mesa");

  mesa.innerHTML = "";

  barajaTarjetas(lasTarjetas).forEach(function (elemento) {
    tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor=" + elemento + ">" +
      "<div class='tarjeta_contenido'>" +
      elemento + 
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}