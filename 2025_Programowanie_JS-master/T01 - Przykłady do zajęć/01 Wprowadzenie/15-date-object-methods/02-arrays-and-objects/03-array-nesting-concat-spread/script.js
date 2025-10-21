let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Zagnieżdżanie tablic

// Zagnieżdżenie jagód w owocach
fruits.push(berries);

// Teraz możemy uzyskać dostęp do 'blueberry' w następujący sposób
x = fruits[3][1];

// Utwórz nową zmienną i zagnieżdź obie tablice
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Łącz tablice
x = fruits.concat(berries);

// operator rozprzestrzenienia (...) - Łącz za pomocą
x = [...fruits, ...berries];

// flat() - Spłaszcz tablicę
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Statyczne metody obiektu Array

// isArray() - Sprawdź, czy to jest tablica
x = Array.isArray(fruits);

// from() - Utwórz tablicę z wartości przypominającej tablicę
x = Array.from('12345');

// of() - Utwórz tablicę z zestawu wartości
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
