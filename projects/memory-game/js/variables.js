let movimientos = 0
let segundos;
let minutos;
let cronometro;
let maxmov;

let grupotarjetas1 = [["ð","ðŧ","ðš", "ðĶī", "ð"], 
["ðĶ","ðĪĄ","ðĐ","ð","ð―"], 
["ðŧ","ðĪ","ðĪŽ","ð","ð"], 
["ðĪ","ðââïļ","ð","ðĩ","ðĐ"], 
["ð","ð","ðĶ","ð","ð"], 
["ðĨ","ðķ","ðą","ðē","ð"]];

let nivelActual = 0;
let niveles = [
  {
    tarjetas: grupotarjetas1[0],
    movimientosMax: "15",
    minutos: "00",
    segundos: "30",
  },
 {
   tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1]),
   movimientosMax: "30",
   minutos: "00",
   segundos: "50",
 },
 {
  tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1], grupotarjetas1[2]),
  movimientosMax: "45",
  minutos: "01",
  segundos: "20",
},
{
  tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1], grupotarjetas1[2], grupotarjetas1[3]),
  movimientosMax: "60",
  minutos: "01",
  segundos: "50",
}, 
{
  tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1], grupotarjetas1[2], grupotarjetas1[3], grupotarjetas1[4]),
  movimientosMax: "75",
  minutos: "02",
  segundos: "30",
},
{
  tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1], grupotarjetas1[2], grupotarjetas1[3], grupotarjetas1[4], grupotarjetas1[5]),
  movimientosMax: "100",
  minutos: "03",
  segundos: "00",
},      
]


  
