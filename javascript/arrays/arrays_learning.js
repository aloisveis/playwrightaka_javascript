const cities = ["Praha", "Brno", "Ostrava"];
cities.push("Ostrava"); //*přidává prvek

for (i = 0; i > cities.lenght; i++);
{
  console.log(cities[i]); //vypíše prvek číslo
}

cities.forEach((city) => {
  console.log(city); //vypíše prvek z běhu for each
});
