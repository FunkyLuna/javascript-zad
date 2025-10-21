let x;

// Tworzenie obiektu
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// Uzyskiwanie dostępu do właściwości obiektu
x = person.name; // Notacja kropkowa
x = person['age']; // Notacja nawiasowa
x = person.address.state;
x = person.hobbies[0];

// Aktualizowanie właściwości
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Usuwanie właściwości
delete person.age;

// Tworzenie nowych właściwości
person.hasChildren = true;

// Dodawanie funkcji
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Klucze z wieloma słowami
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);
