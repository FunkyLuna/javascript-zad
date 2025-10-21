(function() {
    const firstName = "Piotr";

    function sayHello() {
        const firstName = "Maciej";
        const lastName = "Kowalski";

        console.log(`${firstName} ${lastName}`);
    }

    window.sayHello = sayHello;

    sayHello();
})();

// function init() {
//     const firstName = "Piotr";

//     function sayHello() {
//         const firstName = "Maciej";
//         const lastName = "Kowalski";

//         console.log(`${firstName} ${lastName}`);
//     }

//     window.sayHello = sayHello;

//     sayHello();
// }

// init();

if(true) {
    let number = 10;
}

console.log(number);
