const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//  uzyskuję dostęp do elementu <ul> o identyfikatorze "ingredients" i przypisuję go do zmiennej ingredientsList (teraz mogę używać tej zmiennej do manipulacji tym konkretnym elementem listy w dalszej części skryptu)
const ingredientsList = document.getElementById("ingredients");
const elements = [];

// Pętla przechodząca przez każdy element tablicy ingredients
ingredients.forEach((ingredient) => {
  // tworzę nowy element <li>
  const listItem = document.createElement("li");

  // dodaję nazwę składnika jako tekst wewnątz <li>
  listItem.textContent = ingredient;

  // dodaję klasę "item" do <li>
  listItem.classList.add("item");

  // dodaję <li> do listy ul#ingredients
  elements.push(listItem);
});
// dodaję elementy <li> do listy ul#ingredients
ingredientsList.append(...elements);
