let x;

const num = new Number(5);

// toString() - zwraca liczbę jako łańcuch znaków
x = num.toString();
// Tak otrzymamy ilość znaków w tym łańcuchu
x = num.toString().length;

// toFixed() - zwraca łańcuch reprezentujący liczbę z określoną ilością miejsc po przecinku
x = num.toFixed(2);

// toPrecision() - zwraca liczbę o określonej długości
x = num.toPrecision(3);

// toExponential() -  przekonwertować liczbę na notację wykładniczą i zwrócić jej wartość jako ciąg
x = num.toExponential(2);

// toLocaleString() - zwraca reprezentację ciągu liczbowego, używając bieżącej lokalizacji
x = num.toLocaleString('en-US');

// valueOf - Uzyskaj wartość
x = num.valueOf();

// Obiekt Number sam w sobie ma pewne właściwości i metody

// Największa i najmniejsza możliwa liczba
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
