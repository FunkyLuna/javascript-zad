// Wartość jest przechowywana w stosie
const name = 'Janusz';
const age = 30;

// Odniesienie jest przechowywane w stercie
const person = {
  name: 'Bramka',
  age: 40,
};

let newName = name;
newName = 'Jeremi';

let newPerson = person;
newPerson.name = 'Wisniowiecki';

console.log(name, newName);
// Janusz Jeremi
console.log(person, newPerson);

// { name: 'Wisniowiecki', age: 40 } { name:'Wisniowiecki', age: 40 }

