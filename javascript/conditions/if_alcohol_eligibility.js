const actualAge = 15;
const drinkingAgeLimit = 18;
const fullName = "Jan Nový";

//* `` text v nich uzavřený se nazývá template literal, umožňuje čitelnější zápis textu s kódem dohromady), při sloučení více věcí je lepší než používání + a uvozovek, lze vložit i výpočet

//*javascript neřeší typ, tzn v proměnné může být cokoli
if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} může pít alkohol.`);
} else if ((actualAge) => 0) {
  //*kontrola jestli se jedná o číslo, není třeba kontrolovat type, pokud nevyjde výpočet je podmínka rovnou false
  console.log(
    `${fullName} nemůže pít alkohol. Ještě mu chybí ${drinkingAgeLimit - actualAge} roků.`,
  );
} else {
  console.log("Chyba, špatně zadaný věk, zadejte číslo větší než 0");
}

//*pokud se porovnávají dvě hodnoty jestli se rovnají je třeba používat == nebo ===, == porovnává hodnoty === porovnává i typy
