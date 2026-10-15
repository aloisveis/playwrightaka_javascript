let firstName = "Gordon";
let lastName; //*deklarace
lastName = "Reeman"; //*inicializace
console.log(firstName, lastName);
console.log(firstName + "    " + lastName);
lastName = "Freeman"; //*reinicializace
console.log(firstName, lastName);

//*var nepoužívat, jedná se o zastaralou proměnnou, je možné ji redeklarovat, existuje i mimo blok kódu

//*v objektovém programování dochází k izolaci proměnných vytvořených uvnitř bloku, proměnné vytvořené mimo lze v bloku použít
//! při použití proměnné deklarované v bloku dojde k chybě undefined

let mimo = "Mimo blok";
{
  let uvnitr = "Uvnitř bloku";
  console.log(mimo);
  console.log(mimo, uvnitr);
}
//*const = konstanta, nelze redeklarovat, je neměnná, není možné jí deklarovat bez inicializace
//! při pokusu o změnu hodnoty dojde k chybě

//*poznámky

/*
víceřádková 
poznámka
*/

/**
 * dokumentační poznámka, lze používat markdown
 */
