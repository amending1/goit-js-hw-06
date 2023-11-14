//tworzę pseudotablicę elementów li o klasie "item"
const categoriesItems = document.querySelectorAll("#categories .item");

// liczę elementy li o klasie "item" w pseudotablicy
const numberOfCategories = categoriesItems.length;

console.log("Number of categories:" numberOfCategories);
