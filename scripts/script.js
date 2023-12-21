import { add, subtract, multiply, divide } from './math.js';

let firstNum = null;
let secondNum = null;
let currentOperator = null;
let displayVal = '';

const calculatorDisplay = document.querySelector('.calculator-display');

const updateDisplay = () => {
    calculatorDisplay.innerText = displayVal === '' ? '0' : displayVal;
}

const appendDigit = (digit) => {
    displayVal += digit;
    updateDisplay();
}

const clearDisplay = () => {
    displayVal = '';
    updateDisplay();
}

const deleteLastDigit = () => {
    displayVal = displayVal.slice(0, -1);
    updateDisplay();
}

const numButtonEventListener = () => {
    const numButtons = document.querySelectorAll('.num-button');
    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            appendDigit(button.innerText);
        });
    });

    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', clearDisplay);

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', deleteLastDigit);
};

const operate = (currentOperator, firstNum, secondNum) => {
    return currentOperator(firstNum, secondNum);
}

numButtonEventListener();