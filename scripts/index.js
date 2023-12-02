"use strict"
// connect window onload event to an init function
window.onload = init;
//put button ids in an array
let buttonIds = ['add', 'subtract', 'multiply', 'divide'];
// add init event handler and assign each button's onclick to an event using buttonIds array
function init() {
    // create a forEach loop, declare array value as id
    buttonIds.forEach(function(id) {
        let button = document.getElementById(id);
        button.onclick = function() {
            calculate(id);
        };
    });
}
// add function to make calculations
function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1Field').value);
    const number2 = parseFloat(document.getElementById('number2Field').value);
    let results;
    switch (operation) {
        case 'add':
            results = number1 + number2;
            break;
        case 'subtract':
            results = number1 - number2;
            break;
        case 'multiply':
            results = number1 * number2;
            break;
        case 'divide':
            results = number1 / number2;
            break;
    }
      // display results in the answer input field
      document.getElementById('answerField').value = results;
}