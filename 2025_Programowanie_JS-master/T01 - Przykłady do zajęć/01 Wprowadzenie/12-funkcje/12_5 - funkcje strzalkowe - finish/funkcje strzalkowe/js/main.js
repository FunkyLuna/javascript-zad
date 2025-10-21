// function sayHello(name) {
//     console.log(`Witaj ${name}!`);
// }

const sayHello = name => console.log(`Witaj ${name}!`);
const add = (a, b) => a + b;

sayHello("Piotr");

const lottery = () => {
    if(Math.random() * 100 < 50) {
        return "Przegrałeś!";
    }

    return "Wygrałeś!";
};

const person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello: () => {
        console.log(`Nazywam się ${this.firstName} ${this.lastName}`);
    }
}

person.sayHello();
