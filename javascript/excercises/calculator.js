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
function ampNumber(a, b) {
  let amp;
  for (let i = 1; i <= b; i++) {
    amp = a * a;
  }
  console.log("Mocnina je " + amp);
}

addNumbers(15, 48);
subNumbers(98, 41);
mulNumbers(54, 30);
divNumbers(88, 6);
ampNumber(3, 2);
