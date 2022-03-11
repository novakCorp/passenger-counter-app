// Practice time - part 1

const firstName = 'Miguel';
const lastName = 'Gonzales';

const fullName = firstName + ' ' + lastName;
console.log(fullName);


// concatenate two strings in a function
let name = 'Kelly';
let greeting = 'Hi there';

function greetingHi() {
    console.log(greeting + ', ' + name + '!');
}

greetingHi();



// incrementing and decrementing

let myPoints = 3;

function incrementing() {
    myPoints += 3;
}


function decrementing() {
    myPoints -= 1;
}

incrementing();
incrementing();
incrementing();

decrementing();
decrementing();

console.log(myPoints);


