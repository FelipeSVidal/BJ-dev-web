console.log;
var c = 1;
while (c <= 10) {
  console.log(c);
  c++;
}

var c = 1;
while (c <= 10) {
  console.log(c);
  c++;
}
var c = 1;
while (c <= 10) {
  var modulo = c % 2;
  if (modulo == 0) {
    console.log(c);
  }
  c++;
}

let text = "11";
let invertido = text.split(" ");
console.log(invertido);
invertido.reverse().join(" ");

function tome(a1, a2) {
  let Array = [];
  for (let i = a1; i < a2; i++) {
    if (i.toString() == i.toString().split("").reverse().join("")) {
      Array.push(i);
    }
  }
  console.log(Array);
}

tome(1, 100);
