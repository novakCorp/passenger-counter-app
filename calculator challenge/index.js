let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumContent = document.getElementById('sum-el');

function add() {
    const total = num1 + num2;
    sumContent.textContent = `Sum: ${total}`;
}


function substract() {
    const total = num1 - num2;
    sumContent.textContent = `Substract: ${total}`;
}


function multiply() {
    const total = num1 * num2;
    sumContent.textContent = `Multiply: ${total}`;
}

function divide() {
    const total = num1 / num2;
    sumContent.textContent = `Divide: ${total}`;
}
