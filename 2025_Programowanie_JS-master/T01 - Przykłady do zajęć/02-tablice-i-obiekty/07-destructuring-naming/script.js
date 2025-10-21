// Ustawianie właściwości obiektu o tej samej nazwie co zmienna
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destrukturyzacja właściwości obiektu

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // zmiana nazwy id na todoId
  title,
  user: { name }, // destrukturyzacja na wielu poziomach
} = todo;

console.log(todoId);

// Destrukturyzacja tablic i używanie operatora reszty/rozprzestrzenienia
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
