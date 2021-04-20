let movimientos = 0
let segundos;
let minutos;
let cronometro;
let maxmov;

let grupotarjetas1 = [["🐙","🐻","👺", "🦴", "🎃"], 
["🦄","🤡","💩","💀","👽"], 
["👻","🤑","🤬","🙌","😈"], 
["💤","🙆‍♂️","👄","🌵","🐩"], 
["🐏","🐖","🦀","🍄","🍁"], 
["🥑","🌶","🎱","🎲","🚗"]];

let nivelActual = 0;
let niveles = [
  {
    tarjetas: grupotarjetas1[0],
    movimientosMax: "15",
    minutos: "0",
    segundos: "30",
  },
 {
   tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1]),
   movimientosMax: "30",
   minutos: "0",
   segundos: "50",
 },
 {
  tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1], grupotarjetas1[2]),
  movimientosMax: "45",
  minutos: "1",
  segundos: "20",
},
{
  tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1], grupotarjetas1[2], grupotarjetas1[3]),
  movimientosMax: "60",
  minutos: "1",
  segundos: "50",
}, 
{
  tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1], grupotarjetas1[2], grupotarjetas1[3], grupotarjetas1[4]),
  movimientosMax: "75",
  minutos: "2",
  segundos: "30",
},
{
  tarjetas: grupotarjetas1[0].concat(grupotarjetas1[1], grupotarjetas1[2], grupotarjetas1[3], grupotarjetas1[4], grupotarjetas1[5]),
  movimientosMax: "100",
  minutos: "3",
  segundos: "00",
},      
]


  
