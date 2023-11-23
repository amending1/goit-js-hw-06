//W kontekście pola wejściowego, utrata fokusu (ang. "blur") oznacza, że użytkownik kliknął w inne miejsce strony internetowej lub przeszedł do innego elementu interaktywnego po wprowadzeniu danych do tego pola. Skrypt obsługujący zdarzenie "blur" będzie wykonywany w momencie, gdy użytkownik opuści to pole, umożliwiając tym samym sprawdzenie wprowadzonych danych i wykonanie odpowiednich działań, na przykład walidację.

document
  .getElementById("validation-input")
  .addEventListener("blur", function () {
    const inputValue = this.value;
    const requiredLength = this.getAttribute("data-length");
    // Atrybuty w HTML są zawsze przechowywane jako ciągi znaków, nawet jeśli zawierają liczby. Więc żeby porównać tę wartość z długością wprowadzonej wartości (inputValue.length), muszę użyć parseInt do konwersji ciągu znaków na liczbę całkowitą.
    if (inputValue.length === parseInt(requiredLength)) {
      this.classList.remove("invalid");
      this.classList.add("valid");
    } else {
      this.classList.remove("valid");
      this.classList.add("invalid");
    }
  });

// kod mi nie działał, bo nie miałam odniesienia do konkretnego elementu w kontekście, w którym chciałam użyć metod 'classList', 'getAttribute', 'addEventListener'. Mogłam zamiast .this stworyć ewentualnie nową zmienną (np. const validationInput = document.getElementById("validation-input")) i w ten sosób przechwycić element przed przypisaniem zdarzenia
