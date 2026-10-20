import { CarsBlueprint } from "./cars_blueprint.js";
const dieselCar = new CarsBlueprint( //vytvoření objektu
  "Červená",
  "TDI 1.3",
  "Diesel",
  "Ford Focus",
);
dieselCar.logCarProperties(); //provolání metody
console.log(`Barva ${dieselCar.carName} je: ${dieselCar.color}`); //  přístup k properties objektu
const petrolCar = new CarsBlueprint("Bílá", "TSI 1.0", "Benzín", "Seat Ibiza"); //nová instance objektu
petrolCar.logCarProperties();
const electricCar = new CarsBlueprint(
  "Černá",
  "Elektromotor",
  "Baterie",
  "Tesla",
);
electricCar.logCarProperties();
const pinkCar = dieselCar; // ! POZOR! pinkCar i dieselCar jsou nyní stejný objekt
pinkCar.color = "Růžová"; // ! Změní barvu objektu (pinkCar, dieselCar)
dieselCar.logCarProperties();
const electricCarGetColor = electricCar.getColor();
console.log(`Barva ${electricCar.carName} je: ${electricCarGetColor}`);
