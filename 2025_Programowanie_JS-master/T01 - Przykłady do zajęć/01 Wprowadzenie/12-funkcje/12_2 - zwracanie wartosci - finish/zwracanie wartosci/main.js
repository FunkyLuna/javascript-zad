function getMessage() {
    const message = "Witaj świecie";

    return message;
}


const message = getMessage();

console.log(message);

function makeArray() {
    return [];
}

const arr = makeArray();
const arr2 = makeArray();

console.log(arr === arr2);

function lottery() {
    if(Math.random() * 100 < 50) {
        return "Przegrałeś!";
    }

    return "Wygrałeś";
}
console.log(lottery());
