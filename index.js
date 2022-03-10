let count = 0;
const counter = document.getElementById('count-el'); 
const saveEl = document.getElementById('save-el');

// counter.textContent = count;
// text.content respects spaces
// text.innercontent does not respect spaces. Keep that in mind.

function increment() {
    console.log("The button was clicked");
    count += 1;
    counter.textContent = count;
}


function save() {
    let entries = count + ' - ';
    saveEl.textContent += entries;
    counter.textContent = 0;
    count = 0;
}


let username = 'Miguel';
let message = 'You have three new notifications';
let messageToUser = username + ', ' + message + '!';
console.log(messageToUser);


// Greeting to the console
let name = 'Robert';
let greeting = 'Hello';
let myGreeting = greeting + ' ' + name + '!';
console.log(myGreeting);
