console.log('reva');

let a = 10;
let b = 'angka';
const c = 20;

let d = c;


let person: {
    name: String;
    age: number;
};

 person = {
    name: 'rev',
    age: 20
};

 // let greeting : (name: string) => string;

 // let greeting = function() {
 //     console.log('Hello World!');
 // }

let greeting = function (name: string, age: number) {
    return `Hi ${name}, you're ${age} year old.`
}

let counter: number;
counter = 0;

function setCounter(max=100) {
    console.log(max)
}

let items = [1, 2, 3, null]



console.log()
