document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let form = event.target; // przypisuje element formularza, który wywołał zdarzenie submit, do zmiennej form. Umożliwia dalsze manipulacje i interakcje z tym formularzem wewnątrz funkcji obsługującej zdarzenie
    let email = form.elements.email.value;
    let password = form.elements.password.value;
    // elements to właściwość obiektu form, która udostępnia kolekcję elementów formularza. Każde pole formularza jest dostępne jako właściwość obiektu elements, a nazwa właściwości odpowiada atrybutowi name pola formularza.

    if (email === "" || password === "") {
      alert("Wypełnij wszystkie pola formularza!");
    } else {
      let formData = {
        email: email,
        password: password,
      }; // tworzę obiekt

      console.log("Dane formularza:", formData);

      // czyści pola input
      form.reset();
    }
  });
