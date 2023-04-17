function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
createBoxes(amount);

// która przyjmuje jeden parametr - liczbę. Funkcja tworzy tyle elementów <div>, ile wybrano w amount i dodaje je do div#boxes.

// Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie HEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.

destroyBoxes();
// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.
