//tworzę pseudotablicę elementów li o klasie "item"
const categoriesItems = document.querySelectorAll("#categories .item");

// liczę elementy li o klasie "item" w pseudotablicy
const numberOfCategories = categoriesItems.length;

// muszę pamiętać o + (konkatenacja stringów)
console.log("Number of categories:" + numberOfCategories);

// Iteruję przez każdy element li.item
categoriesItems.forEach(function (item) {
  // szukam nagłówka h2 w obrębie bieżącego elementu li.item
  const categoryTitle = item.querySelector("h2").textContent;

  // szukam wszystkich elementów li w obrębie bieżącego elementu li.item i tworzę z nich pseudotablicę
  const categoryElements = item.querySelectorAll("li");

  //liczę elementy pseudotablicy w danej kategorii
  const numberOfElements = categoryElements.length;

  console.log("Category:" + categoryTitle);
  console.log("Elements:" + numberOfElements);
});
