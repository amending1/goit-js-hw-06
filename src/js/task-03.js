const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryElement = document.querySelector(".gallery");

// najpierw map używa do iteracji przez każdy element tablicy images i w ten sposób tworzy się dla każdego eleentu tablicy odpowiedni fragment HTML przy użyciu szablonów tekstowych (template strings). Potem .join('') łączy te fragmenty w jedną długą linię tekstu.
const galleryHTML = images
  .map(
    (image) => `<li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}">
    </li>`
  ) // muszę pamiętać o backtickach. To one właśnie  tworzą szablony tekstowe i pozwalają na osadzanie zmiennych wewnątrz ciągu tekstowego za pomocą ${}.
  .join("");
// teraz muszę dodać wygenerowany HTML do elementu DOM
galleryElement.insertAdjacentHTML("beforeend", galleryHTML);
