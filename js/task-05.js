// pobieram elementy DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// input jest rodzajem zdarzenia, na które nasłuchujemy w kontekście pól formularza ( zdarzenie input występuje, gdy użytkownik wprowadza lub zmienia dane w polu input. To zdarzenie reaguje na każdą zmianę wartości w polu, niezależnie od tego, czy użytkownik wpisuje nowe znaki, czy usuwa istniejące.)
nameInput.addEventListener("input", function () {
  // aktualizuje tekst w spanie zgodnie z wartością pola input
  // Funkcja trim() usuwa białe znaki (spacje, tabulatory, znaki nowej linii) z początku i końca ciągu znaków. Działa ona na kopii ciągu znaków, nie zmieniając samego ciągu. W kontekście skryptu, który manipuluje wartościami wprowadzanymi przez użytkownika w formularzu, użycie trim() jest stosowane, aby pozbyć się potencjalnych białych znaków wprowadzonych przez użytkownika. W ten sposób unika się sytuacji, w której użytkownik przypadkowo dodaje spacje na początku lub końcu wprowadzonego tekstu, co mogłoby prowadzić do nieporządanych rezultatów
  // value jest właściwością pola formularza, która zwraca bieżącą wartość wpisaną przez użytkownika.
  // Jeśli wartość po użyciu trim() jest pusta to operator || zostanie zastosowany. Zamiast pustego tekstu, tekst "Anonymous" zostanie przypisany do textContent.
  nameOutput.textContent = nameInput.value.trim() || "Anonymous";
});
