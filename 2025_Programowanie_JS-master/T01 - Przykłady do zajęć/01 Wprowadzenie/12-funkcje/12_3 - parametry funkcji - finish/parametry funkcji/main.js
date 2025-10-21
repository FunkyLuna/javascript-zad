function sayHello(name = "Nieznajomy") {
    console.log(`Witaj ${name}`);
}

sayHello("Piotr");

function add(a, b) {
    return a + b;
}

const result = add(10, 5);

function sum(...numbers) {
    let result = 0;

    for(let number of numbers) {
        result += number;
    }

    return result;
}

console.log(sum(1, 10, 100, 50, 11));

function displayPosition({x, y}) {
    console.log(`Pozycja myszy to: ${x},${y}`);
}

displayPosition({x: 10, y: 100});
