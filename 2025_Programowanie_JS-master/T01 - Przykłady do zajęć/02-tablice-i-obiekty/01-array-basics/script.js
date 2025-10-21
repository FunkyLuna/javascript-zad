let x;

// Literal tablica
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Konstruktor tablicy
const fruits = new Array('apple', 'grape', 'orange');

// Pobierz wartość według indeksu
x = numbers[0];

x = numbers[0] + numbers[3];

x = `Mój ulubiony owoc to ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

// długość nie jest tylko do odczytu
// fruits.length = 2;

fruits[3] = 'strawberry';

// Używając długości jako indeksu, zawsze dodasz na końcu
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);
