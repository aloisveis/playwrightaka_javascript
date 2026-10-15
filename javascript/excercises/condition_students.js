const studentScore = 93;
const successMark = 75;
const fullName = "Jan Nový";
const redDiplom = 95;

if (typeof studentScore === "number" && studentScore >= redDiplom) {
  console.log(`${fullName} úspěšně dokončil studium s červeným diplomem`);
} else if (typeof studentScore === "number" && studentScore >= successMark) {
  console.log(`${fullName} úspěšně dokončil studium.`);
} else if (typeof studentScore === "number" && studentScore <= successMark) {
  console.log(
    `${fullName} nedokončil úspěšně studium. Schází mu ${successMark - studentScore} bodů.`,
  );
} else {
  console.log("Chyba, špatně zadaný věk, zadejte číslo větší než 0");
}
