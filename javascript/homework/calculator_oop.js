import { Calculator } from "../src/objects/calculator_class.js";

let addNumberA = 14;
let addNumberB = 41;
let subNumberA = 174;
let subNumberB = 32;
let mulNumberA = 47;
let mulNumberB = 50;
let divNumberA = 125;
let divNumberB = 7;

const calculator = new Calculator();

console.log(
  `Výsledek součtu ${addNumberA} + ${addNumberB} = ${calculator.addNumbers(addNumberA, addNumberB)}`,
);
console.log(
  `Výsledek odečítání - ${subNumberB} = ${calculator.substractNumbers(subNumberA, subNumberB)}`,
);
console.log(
  `Výsledek násobení ${mulNumberA} * ${mulNumberB} = ${calculator.multiplyNumbers(mulNumberA, mulNumberB)}`,
);
console.log(
  `Výsledek dělení ${divNumberA} / ${divNumberB} = ${calculator.divideNumbers(divNumberA, divNumberB)}`,
);
