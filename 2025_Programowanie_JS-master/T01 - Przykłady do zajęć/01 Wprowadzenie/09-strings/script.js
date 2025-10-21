let x;

const name = 'Janusz';
const age = 31;

// Konkatenacja łańcuchów
x = 'Cześć, mam na imię ' + name + ' i mam ' + age + ' lat';


// Template Literals
x = `Cześć, mam na imię ${name} i mam ${age} lat`;

// String - właściwości i metody łańcuchów znaków

//Tworzenie „obiektu ciągu” - "string object" (JS wykonuje to automatycznie podczas używania właściwości lub metody w ciągu prymitywnym)
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Dostęp do wartości według klucza
x = s[0];

// Pokazuje prototyp obiektu string. Pokazuje właściwości i metody
x = s.__proto__;

// Zmiana wielkości liter
x = s.toUpperCase();

x = s.toLowerCase();

// charAt() - zwraca znak o określonym indeksie
x = s.charAt(0);

// indexOf - zwraca indeks pierwszego wystąpienia określonej wartości w ciągu
x = s.indexOf('d');

// substring() - wyszukaj w ciągu określoną wartość
x = s.substring(2, 7);

x = s.substring(6);

// slice() - wyodrębnia część ciągu i zwraca nowy ciąg
x = s.slice(-11, -6);

// trim() - usuń spację z początku i końca ciągu
x = '         Hello World';
x = x.trim();

// replace() - zamień wszystkie wystąpienia ciągu
x = s.replace('World', 'John');

// includes() - zwraca wartość true, jeśli ciąg znaków zostanie znaleziony
x = s.includes('Hell');

// valueOf() - zwraca wartość prymitywną zmiennej
x = s.valueOf();

// split() - zwraca tablicę ciągów znaków
x = s.split('');

console.log(x);