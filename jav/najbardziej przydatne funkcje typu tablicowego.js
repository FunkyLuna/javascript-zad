JavaScript - najbardziej przydatne funkcje typu tablicowego – 
Patryk Kiedrowski - Front-End Developer
Projektowanie i programowanie responsywnych stron internetowych

Zobacz stronę oryginalną: https://kiedrowski.dev/blog/javascript-najbardziej-przydatne-funkcje-typu-tablicowego/
Nieważne, czy dopiero wkraczasz w świat programowania i JavaScript jest Twoim pierwszym językiem, czy może, tak jak ja, rozpoczynasz swoją przygodę z JS-em mając już solidne podstawy w pisaniu kodu – w obu przypadkach koniecznym jest znajomość kluczowych funkcji, które pozwolą Ci na znacznie łatwiejsze wykonywanie podstawowych operacji. W tym artykule skupimy się na prototypach funkcyjnych typu tablicowego oraz łańcuchowego. Pozwalają one, na przykład, na sortowanie tablicy, odfiltrowanie konkretnych elementów, lub wykonywanie jednej funkcji na wszystkich elementach macierzy.

/*
Funkcja push() dodaje nowy element, podany jako argument funkcji, na koniec istniejącej tablicy. Co więcej, zwraca ona, po uprzednim dodaniu zadanego elementu, długość tablicy. Pamiętaj, że możesz dodać więcej niż jeden element na raz. Przykład:
*/

let  mojaTablica = [ "kot", "pies", "szczur" ];

mojaTablica.push("małpa"); // [ "kot", "pies", "szczur", "małpa" ]

let  dlugoscTablicy = mojaTablica.push("jeż");

console.log(mojaTablica); // [ "kot", "pies", "szczur", "małpa", "jeż" ]
console.log(dlugoscTablicy); // 5
/*
pop()
Funkcja pop() jest przeciwieństwem funkcji push() – usuwa ona ostatni element istniejącej tablicy. Przy usuwaniu elementu funkcja zwraca usunięty element i skraca długość tablicy. Przykład:
*/

let  mojaTablica = [ "kot", "pies", "szczur", "małpa", "jeż" ];

let  usuniety = mojaTablica.pop();

console.log(mojaTablica); // [ "kot", "pies", "szczur", "małpa" ]
console.log(usuniety); // "jeż"
/*
shift()
Kolejna funkcja do omówienia to shift(). Usuwa ona i zwraca pierwszy element danej tablicy, przesuwając wszystkie elementy o jedno miejsce w przód, celem załatania pozostałej „dziury”. Funkcja ta nie tworzy nowej tablicy, tylko modyfikuje już istniejącą. Przykład:

*/
let  mojaTablica = [ "kot", "pies", "szczur", "małpa", "jeż" ];

let  usuniety = mojaTablica.shift();

console.log(mojaTablica); // [ "pies", "szczur", "małpa", "jeż" ]
console.log(usuniety); // "kot"
/*
unshift()
Podobnie jak to było w przypadku bliźniaczych funkcji push() i pop(), tak i shift() ma swoje przeciwieństwo – unshift(). Funkcja ta dodaje element(y) na początek tablicy, modyfikując ją, a następnie zwraca długość zmienionej tablicy. W celu dodania nowych elementów, indeksy wszystkich wartości w tablicy są inkrementowane o 1, a dodany element otrzymuje indeks 0. Przykład:
*/

let  mojaTablica = [ "kot", "pies", "szczur" ];

mojaTablica.unshift("małpa"); // [ "małpa", "kot", "pies", "szczur" ]

let  dlugoscTablicy = mojaTablica.unshift("jeż");

console.log(mojaTablica); // [ "jeż", "małpa", "kot", "pies", "szczur" ]
console.log(dlugoscTablicy); // 5
/*
slice()
Funkcja slice() pozwala na „wycięcie” (ang. to slice -> kroić) dowolnej ilości elementów, rozpoczynając od dowolnego indeksu tablicy. Funkcja przyjmuje dwa argumenty – indeks, od którego chcemy rozpocząć wycinanie oraz indeks, na którym chcemy poprzestać. Działanie tej funkcji jest o tyle zawiłe, że nie wycina ona elementu o indeksie, który podaliśmy jako końcowy; przedział jej działania moglibyśmy wyrazić matematycznie jako <początek, koniec). Jeśli nie podamy funkcji drugiego argumentu, to funkcja zwróci całą tablicę rozpoczynając od indeksu podanego jako argument. slice() nie modyfikuje oryginalnej tablicy, tylko zwraca wycięte (skopiowane) elementy. Przykład:
*/

let  mojaTablica = [ "jeż", "małpa", "kot", "pies", "szczur" ];

let  wyciete = mojaTablica.slice(0,3);

console.log(wyciete); // [ "jeż", "małpa", "kot" ]
console.log(mojaTablica); // [ "jeż", "małpa", "kot", "pies", "szczur" ]

//wycinanie od indeksu nr2 (czyli od trzeciego elementu) zwraca resztę tablicy
console.log(mojaTablica.slice(2)); // [ "kot", "pies", "szczur" ]
/*
splice()
splice() w dużej mierze przypomina funkcję slice(), jednakże, w przeciwieństwie do niej, usuwa lub dodaje elementy (do) oryginalnej tablicy. Pierwszym argumentem jest indeks, w którym mamy zacząć działanie, drugim ilość elementów, na których chcemy to działanie wykonać, a kolejnymi argumentami są elementy, które możemy opcjonalnie dodać do tablicy po wykonaniu działania. Przy dodawaniu, elementy są odpowiednio przesuwane, by zrobić miejsce nowym. Funkcja zwraca tablicę usuniętych elementów. Przykład:

*/
let  mojaTablica = [ "jeż", "małpa", "kot", "pies", "szczur" ];

// usuwa 3 elementy rozpoczynając od elementu o indeksie 0
let  wyciete = mojaTablica.splice(0,3);

console.log(mojaTablica);   // [ "pies", "szczur" ]
console.log(wyciete);       // [ "jeż", "małpa", "kot" ]

// usuwa 0 elementów rozpoczynając od elementu o indeksie 1 i wstawia nowy element
mojaTablica.splice(1, 0, "jeleń");

console.log(mojaTablica);   // [ "pies", "jeleń", "szczur" ]

// usuwa 1 element rozpoczynajac od elementu o indeksie 1 i wstawia dwa nowe elementy
mojaTablica.splice(1, 1, "niedźwiedź", "sarna");

console.log(mojaTablica);   // [ "pies", "niedźwiedź", "sarna", "szczur" ]
/*
join()
Prototyp funkcyjny join() pozwala na połączenie elementów tablicy w jeden łańcuch, uprzednio konwertując każdy element na ciąg liter. Może się to odbyć zarówno z, jak i bez udziału speratora, który podajemy jako ciąg znaków w argumencie funkcji. Po wykonaniu działania, join() zwraca połączony łańcuch znaków. Przykład:

*/
let  zdanie = [ "Szedł", "Sasza", "suchą", "szosą" ];
let  skladniki = [ "makaron", "mięso", "pomidory", "cebula", "ser" ];

let  lamaniec = zdanie.join(" ");
let  spaghetti = "Potrzebne składniki: " + skladniki.join(", ");

console.log(lamaniec);
// Szedł Sasza suchą szosą

console.log(spaghetti);
// Potrzebne składniki: makaron, mięso, pomidory, cebula, ser
/*
toString()
Funkcja toString() bierze wszystkie elementy tablicy i zwraca je jako jeden łańcuch w formie wartości rozdzielonych przecinkami (ang. CSV – comma-separated values). Przykład:

*/
let  listaZakupow = [ "makaron", "mięso", "pomidory", "cebula", "ser" ];

let  listaCSV = listaZakupow.toString();

console.log(listaCSV); // makaron,mięso,pomidory,cebula,ser
/*
concat()
concat() tworzy nową tablicę dołączając do niej tablicę, na rzecz której funkcja jest wywołana, oraz elementy podane jako argumenty. Pierwotna tablica pozostaje nienaruszona. Jeśli któryś z argumentów funkcji concat() jest tablicą, to jej elementy zostają dodane do nowej tablicy osobno, a nie jako tablica. W ten sposób możemy z kilku tablic stworzyć jedną, która będzie w sobie zawierać wszystkie elementy oryginalnych macierzy. Po scaleniu, funkcja zwraca nową tablicę. Przykład:

*/
let  nazwyZwierzat = [ "reksio", "benek", "miluś" ];
let  wiekZwierzat = [ 5, 10, 2 ];

// w nowej zmiennej zwierzeta zapisujemy tablicę nazwyZwierzat 
//i dodajemy do niej tablicę wiekZwierzat
let  zwierzeta = nazwyZwierzat.concat(wiekZwierzat);

console.log(zwierzeta);  // [ "reksio", "benek", "miluś", 5, 10, 2 ]
/*
indexOf()
Kolejna funkcja to indexOf(), która przeszukuje tablicę w poszukiwaniu elementu będącego zgodnym z łańcuchem lub wartością podaną jako argument i zwraca indeks pierwszej napotkanej wartości, która będzie identyczna jak szukana. Jeśli funkcja nie znajdzie odpowiedniej wartości, to zwraca wartość -1. Funkcji można także przekazać drugi argument, który będzie wskazywać indeks, od którego chcemy rozpocząć szukanie. Przykłady:
*/

// Przykład 1
let  zwierzeta = [ "reksio", "benek", "miluś", "reks" ];

console.log(zwierzeta.indexOf("reksio"));  // 0
console.log(zwierzeta.indexOf("reks"));    // 3
console.log(zwierzeta.indexOf("miluś"));   // 2

// Przykład 2
zwierzeta = [ "reks", "reksio", "benek", "miluś", "reks" ];

// rozpoczynamy sprawdzanie od indeksu 1
console.log(zwierzeta.indexOf("reks", 1));  // 4
/*
sort()
Funkcja sort() pozwala na posortowanie elementów tablicy w kolejności alfabetycznej. Oznacza to, że nie damy rady prawidłowo posortować liczb, chyba że przekażemy w argumencie funkcji sort() inną funkcję, tzw. callback, która sobie z tym poradzi. sort() modyfikuje oryginalną tablicę i zwraca odnośnik do niej. Przykład:
*/

// Prosty przykład
let  marki = [ "seat", "audi", "bmw", "volkswagen" ];
marki.sort();

console.log(marki);   // [ "audi", "bmw", "seat", "volkswagen" ]


// Przykład z funkcją callback
let  liczby = [ 5, 1, 0, 20, 1001 ];

/*
przesyłamy funkcji sort() w argumencie anonimową funkcję, która bierze dwa kolejne elementy 
tablicy i odejmuje je od siebie. Funkcja sort() sprawdza następnie jaki był wynik działania,
i podejmuje odpowiednią akcję. Jeżeli w wyniku odejmowania otrzymamy wartość ujemną, 
to znaczy, że liczba a jest mniejsza od liczby b i powinna znajdować się przed nią.
Odwrotnie, gdy otrzymamy liczbę dodatnią, a dla 0 kolejność nie ma znaczenia
*/

liczby.sort(function (a, b) {
  return a - b;
});

console.log(liczby);   // [ 0, 1, 5, 20, 1001 ]
/*
reverse()
reverse(), jak sama nazwa wskazuje (ang. reverse -> odwracać), odwraca zawartość tablicy. Funkcja modyfikuje istniejącą tablicę i nie zwraca żadnej wartości. Ze względu na działanie na oryginalnej tablicy, należy używać jej ostrożnie, gdyż odwrócenie macierzy tylko w jednym miejscu programu poskutkuje odwróceniem jej dla całego kodu. Przykład:
*/

let  posortowaneLiczby = [ 5, 25, 102, 500 ];
posortowaneLiczby.reverse();

console.log(posortowaneLiczby);   // [ 500, 102, 25, 5 ]
/*
forEach()
Wraz z funkcją forEach() wkraczamy w rodzinę funkcji o podobnej zasadzie działania, do której zaliczają się: forEach(), map(), filter(), every() i some(). Wszystkie one wykonują zadaną operację na wszystkich elementach tablicy i wymagają callbacka jako pierwszego przekazywanego argumentu. Drugi, opcjonalny, argument pozwala na zdefiniowanie wartości operatora this wywołania zwrotnego. Jeśli w trakcie wykonywania funkcji forEach() do tablicy zostają dodane nowe elementy, to nie będą one uwzględnione podczas wykonywania wywołania zwrotnego na tablicy. Funkcja wykonuje operacje na oryginalnej tablicy i nie zwraca żadnej wartości. Przykład:

*/
let  liczby = [ 9, 27, 93, 126, 300 ];

// definicja wywołania zwrotnego
function podziel (element, indeks, tablica)
{
	tablica[indeks] = tablica[indeks] / 3;
	// lub tablica[indeks] = element / 3;
}

// wykonanie funkcji forEach na tablicy liczby wraz z wywołaniem callbacka dla każdego elementu
liczby.forEach(podziel);
console.log(liczby);    // [ 3, 9, 31, 42, 100 ]
/*
filter()
Działanie funkcji filter() jest w pełni zgodne z jej nazwą – pozwala ona na odfiltrowanie elementów, które nie spełniają danego warunku. Funkcja ta wymaga przekazania wywołania zwrotnego jako pierwszego argumentu, które jest wykonywane na każdym elemencie tablicy. Jeśli dany element spełnia warunek, to zostaje dodany do nowej macierzy. Oryginalna tablica pozostaje niezmodyfikowana. filter() zwraca nową macierz elementów spełniających zadany warunek. Przykład:
*/

let  liczby = [ 25, 30, 43, 47, 80, 84, 99, 100 ]

// definicja wywołania zwrotnego
function czyParzysta(liczba)
{
	if (liczba % 2 == 0)
		return true;
}

let  parzyste = liczby.filter(czyParzysta);

console.log(parzyste);  // [ 30, 80, 84, 100 ]
/*
map()
map() jest funkcją bardzo podobną do forEach(), jednakże z jedną istotną różnicą – oryginalna tablica jest w pełni zachowana, a funkcja zwraca nową, przetworzoną macierz. Podobnie jak w przypadku wyżej wspomnianej funkcji, map() wykonuje wywołanie zwrotne, które musi być przekazane jako pierwszy argument, na każdym elemencie tablicy, a następnie zwraca wszystkie przetworzone elementy w postaci nowej macierzy. Gdy funkcja jest wywołana, ma to miejsce z użyciem trzech argumentów – wartości bieżącego elementu, indeksu tego elementu, oraz tablicy, na której operacja jest wykonywana. Zwróć uwagę, że wywołanie zwrotne musi zwracać wartość, by została ona dodana do nowej macierzy. Przykład:

*/
let  liczby = [ 9, 27, 93, 126, 300 ];

// definicja wywołania zwrotnego
function pomnoz (element, indeks, tablica)
{
	return element * 20;
	// lub tablica[indeks] * 20;
}

// wykonanie funkcji map na tablicy liczby wraz z wywołaniem callbacka dla każdego elementu
let  pomnozone = liczby.map(pomnoz);
console.log(pomnozone);    // [ 180, 540, 1860, 2520, 6000 ]
/*
Jest to pierwsza część artykułu na temat najbardziej przydatnych dla początkujących funkcji podstawowych typów danych używanych w języku JavaScript. Część drugą, dotyczącą funkcji typu łańcuchowego, znajdziesz tutaj.

Nie są to jeszcze wszystkie funkcje, które chciałbym przedstawić, ale ze względu na chwilowy brak czasu pojawią się one później :) (reduce, some, lastIndexOf, reduceRight, every)

Bibliografia:
https://vegibit.com/most-useful-javascript-array-functions
https://www.w3schools.com/jsref/jsref_sort.asp
*/