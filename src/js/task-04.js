// tworzę zmienną i nadaj jej początkową wartość 0 (musi być let! a nie const, skoro counterValue ma się zmieniać)
let counterValue = 0;

// pobieram elementy DOM (pamiętać o nawiasach kwadratowych, żeby otoczyć wartość selektora atrybutu)
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterDisplay = document.getElementById("value"); // w tej zmiennej jest przechowywany tekst, który będzie aktualizowany

// dodaję event listener dla przycisku dekrementacji
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counterDisplay.textContent = counterValue;
});

// dodaję event listener dla przycisku inkrementacji
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
});
