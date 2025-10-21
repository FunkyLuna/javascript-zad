let x;

// Tworzenie obiektu za pomocą konstruktora obiektów
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

// Zagnieżdżanie obiektów
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Operator rozprzestrzenienia
const obj3 = { ...obj1, ...obj2 };
// To samo, co użycie ...
const obj4 = Object.assign({}, obj1, obj2);

// Tablica obiektów
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;

// Uzyskiwanie tablicy kluczy obiektu
x = Object.keys(todo);

// Uzyskiwanie długości obiektu
x = Object.keys(todo).length;

// Uzyskiwanie tablicy wartości obiektu
x = Object.values(todo);

// Uzyskiwanie tablicy par klucz/wartość obiektu
x = Object.entries(todo);

// Sprawdzanie, czy obiekt ma daną właściwość
x = todo.hasOwnProperty('age');

console.log(x);
