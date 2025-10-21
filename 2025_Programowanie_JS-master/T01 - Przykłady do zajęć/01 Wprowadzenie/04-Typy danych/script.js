// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; // Wartość dziesiętna to 8.
let hexNr = 0x3E8; // Wartość dziesiętna to 1000.
let binNr = 0b101; // Wartość dziesiętna to 5.
console.log(octNr)
console.log(hexNr)
console.log(binNr)

// BigInt
let bigNr = 90071992547409920n;
console.log(bigNr)
let result = bigNr + intNr;
/************************************
O nie, otrzymaliśmy błąd typu TypeError. Z wyświetlonego komunikatu błędu jasno wynika,
    jaka jest jego przyczyna: podczas przeprowadzania operacji nie można łączyć typów BigInt
i Number. O tym trzeba pamiętać podczas pracy z wartościami BigInt — współdziałają one jedynie z innymi wartościami typu BigInt.
************************************/
// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  Więcej informacji o typie „obiekt funkcji”
// https://262.ecma-international.org/5.1/#sec-11.4.3

