const Lista = [
  "Banana",
  "maçã",
  "pera",
  "peixe",
  "carne",
  "papel",
  "mochila",
  "vassoura",
  "esfregão",
  "cartolina",
];
function add(prod) {
  console.log(Lista);
  Lista.push(prod);
  console.log(Lista);
}

function rmv(prod) {
  console.log("rmv", Lista);
  arr = [];
  for (i = 0; i < arr.lenght; i++) {
    element = Lista[i];
    if (element != prod) {
      arr.push(element);
    }
  }
  console.log("rmv", Lista);
}
rmv('cartolina')
add('Doce')