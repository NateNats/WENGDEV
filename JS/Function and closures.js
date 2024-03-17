let counter = 0;

function incCounter() {
    counter++;
}

let lastName = 'Doe';

function greetings (firstName) {
    const separator = " ";

    function sayHello() {
        console.log("Hello " + firstName + separator + lastName);
    }

    function sayGoodbye() {
        console.log("Goodbye " + firstName + separator + lastName);
    }

    sayHello();
    sayGoodbye();
}

greetings("John");