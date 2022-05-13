function Elemento(A1, A2) {
  let Array = [];
  for (let i = A1; i <= A2; i++) {
    if (i.toString() == i.toString().split("").reverse().join("")) {
      Array.push(i);
    }
  }
  console.log(Array);
}

Elemento(1, 100);
