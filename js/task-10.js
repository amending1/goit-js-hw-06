const BASE_WIDTH_PX = 30;
const BASE_HEIGHT_PX = BASE_WIDTH_PX;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector("div#boxes");
const boxNumberInput = document.querySelector("div#controls > input");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${BASE_WIDTH_PX + 10 * i}px`;
    box.style.height = `${BASE_HEIGHT_PX + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.insertAdjacentElement("beforeend", box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
