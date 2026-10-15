const cities = ["Praha", "Brno", "Plzeň"];
cities.push("Ostrava"); //*přidává prvek
console.log(cities);
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]); //vypíše prvek číslo
}
console.log("-------");
cities.forEach((city) => {
  console.log(city); //vypíše prvek z běhu for each
});
