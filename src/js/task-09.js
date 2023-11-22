function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", function () {
  const newColor = getRandomHexColor();

  // Ustawiam nowy kolor tła dla elementu body
  body.style.backgroundColor = newColor;

  // Wyświetla wartości koloru w elemencie span
  colorSpan.textContent = newColor;
});
