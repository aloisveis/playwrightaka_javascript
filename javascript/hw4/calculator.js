let addNumberA = 565;
let addNumberB = 584;
let subNumberA = 474;
let subNumberB = 520;
let mulNumberA = 5822;
let mulNumberB = 65;
let divNumberA = 632;
let divNumberB = 6;

function addNumbers(a, b) {
  console.log("Součet je: " + (a + b));
}
function subNumbers(a, b) {
  console.log("Rozdíl je: " + (a - b));
}
function mulNumbers(a, b) {
  console.log("Součin je: " + a * b);
}
function divNumbers(a, b) {
  if (b == 0) {
    console.log("Nelze dělit nulou");
  } else {
    console.log("Podíl je: " + a / b);
  }
}

addNumbers(addNumberA, addNumberB);
subNumbers(subNumberA, subNumberB);
mulNumbers(mulNumberA, mulNumberB);
divNumbers(divNumberA, divNumberB);
