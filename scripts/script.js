import { add, subtract, multiply, divide } from './math.js';

let firstNum = 0;
let secondNum = 0;
let operator;

let operate = (operator, firstNum, secondNum) => {
    return operator(firstNum, secondNum);
}

let inputButtons = document.querySelectorAll('#input-buttons');

// Make operate globally accessible for testing
window.operate = operate;
window.add = add;
window.subtract = subtract;
window.multiply = multiply;
window.divide = divide;