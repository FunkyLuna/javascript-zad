let a = 5; // Zmienna prosta, przechowywana na stosie
let b = "Hello"; // String (typ prosty), przechowywany na stosie

let obj = { x: 10, y: 20 }; // Obiekt, przechowywany na stercie
// Referencja do obiektu jest przechowywana na stosie

function example() {
    let c = 15; // Zmienna lokalna, przechowywana na stosie
    let arr = [1, 2, 3]; // Tablica (obiekt), przechowywana na stercie
    // Referencja do tablicy jest na stosie
}

example(); // Wywołanie funkcji tworzy nową ramkę na stosie