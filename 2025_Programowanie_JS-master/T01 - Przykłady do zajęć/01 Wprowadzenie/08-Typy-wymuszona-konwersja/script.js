let x;

// Wymuszona konwersja string
x = 5 + '5';

x = 5 + Number('5');

// Wymuszona konwersja number
x = 5 * '5';

// null jest wymuszane na 0, ponieważ jest wartością „falsy”
x = 5 + null;

x = Number(null);

x = Number(true);
x = Number(false);

// prawda jest wymuszona do 1
x = 5 + true;

// fałsz jest wymuszany na 0 (falsy)
x = 5 + false;

// Niezdefiniowane jest wymuszane na NaN (number)
x = 5 + undefined;

console.log(x, typeof x);
