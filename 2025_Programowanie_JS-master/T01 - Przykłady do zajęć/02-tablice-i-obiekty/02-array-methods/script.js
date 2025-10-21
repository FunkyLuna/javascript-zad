let x;

const arr = [28, 38, 44, 29, 109];

// push() - Dodaj wartość na końcu tablicy
arr.push(100);

// pop() - Usuń ostatnią wartość
arr.pop();

// unshift() - Dodaj wartość na początku tablicy
arr.unshift(99);

// shift() - Usuń pierwszą wartość
arr.shift();

// reverse() - Odwróć tablicę
arr.reverse();

// includes() - Sprawdź, czy coś znajduje się w tablicy
x = arr.includes(445);

// indexOf() - Zwróć indeks pierwszego wystąpienia
x = arr.indexOf(28);

// Zwróć tablicę jako ciąg
x = arr.toString();
x = arr.join();

// slice() zwraca wybrane elementy w tablicy jako nową tablicę. Slice przyjmuje indeks pierwszego elementu i indeks ostatniego elementu, który ma być uwzględniony w nowej tablicy.
x = arr.slice(1, 4);

// splice() działa jak slice(), z tym że przyjmuje indeks pierwszego elementu i liczbę elementów po nim jako drugi argument. Mutuje również oryginalną tablicę, podczas gdy slice() tego nie robi.
x = arr.splice(1, 4);

// Usuń pojedynczy element/wartość - Poniższe usunie element z indeksem 4, mutując oryginalną tablicę. x będzie równe nowej tablicy z tym usuniętym elementem.
x = arr.splice(4, 1);

// Łączenie metod - Niektóre metody mogą być łączone w zależności od wartości zwracanej.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
