const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
  textSpan.style.fontSize = fontSizeControl.value + "px";
});

//fontSizeControl.value - pobiera bieżącą wartość elementu input o id font-size-control. W tym przypadku jest to wartość suwaka, która reprezentuje rozmiar czcionki
// + "px" - konkatenacja z ciągiem "px". Działa to jako konwersja liczby(wartość suwaka) na ciąg znaków, dodając jednostkę pikseli na końcu.Dzięki temu mogę przypisać tę wartość do właściwości fontSize, która oczekuje wartości razem z jednostką pikseli.
