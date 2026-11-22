export class Calculator {
  addNumbers(a, b) {
    return a + b;
  }
  substractNumbers(a, b) {
    return a - b;
  }
  multiplyNumbers(a, b) {
    return a * b;
  }
  divideNumbers(a, b) {
    if (b == 0) {
      return "Chyba nelze dělit nulou";
    } else {
      return a / b;
    }
  }
}
