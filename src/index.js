let cars = [
  "celular",
  "álcool",
  "piano",
  "banana",
  "limao",
  "maçã",
  "lapis",
  "monitor",
  "mouse",
  "teclado",
  "caixa de som",
  "caderno",
  "ventilador",
  "regua",
  "mousepad",
  "prateleiras",
  "fone de ouvido",
  "mascara",
  "colirio",
  "caneta",
];
function add(mascara) {
  console.log(cars);
  cars.push(mascara);
  console.log(cars);
}

add("ba");

function rmv(mascara) {
  console.log("rmv", cars);
  narr = [];
  for (i = 0; i < cars.length; i++) {
    la = cars[i];
    if (la != mascara) {
      narr.push(la);
    }
  }
  cars = narr;
  console.log("rmv", cars);
}

rmv("lapis");
