import { add, subtract, multiply, divide } from './math.js';

let firstNum = null;
let secondNum = null;
let currentOperator = null;
let displayVal = '';

const calculatorDisplay = document.querySelector('.calculator-display');
const operationDisplay = document.querySelector('.operation-display'); // New element for displaying the current operation

const updateDisplay = () => {
    calculatorDisplay.innerText = displayVal === '' ? '0' : displayVal;
}

const updateOperationDisplay = () => {
    operationDisplay.innerText = firstNum !== null && currentOperator !== null ? `${firstNum} ${currentOperator}` : '';
}

const appendDigit = (digit) => {
    displayVal += digit;
    updateDisplay();
}

const clearDisplay = () => {
    displayVal = '';
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    updateDisplay();
    updateOperationDisplay();
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
};

const operate = () => {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(displayVal);
    switch (currentOperator) {
        case '+':
            displayVal = add(firstNum, secondNum).toString();
            break;
        case '-':
            displayVal = subtract(firstNum, secondNum).toString();
            break;
        case '×':
            displayVal = multiply(firstNum, secondNum).toString();
            break;
        case '÷':
            displayVal = divide(firstNum, secondNum).toString();
            break;
        default:
            return;
    }
    updateDisplay();
    clearOperation();
}

const clearOperation = () => {
    firstNum = null;
    currentOperator = null;
    updateOperationDisplay();
}

const opButtonEventListener = () => {
    const opButtons = document.querySelectorAll('.op-button');
    opButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.innerText === '=') {
                if (firstNum !== null && currentOperator !== null && displayVal !== '') {
                    operate();
                }
            } else {
                if (displayVal !== '') {
                    firstNum = displayVal;
                    currentOperator = button.innerText;
                    displayVal = '';
                    updateDisplay();
                    updateOperationDisplay();
                }
            }
        });
    });
};

const actionButtonEventListener = () => {
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', clearDisplay);

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', deleteLastDigit);
};

numButtonEventListener();
opButtonEventListener();
actionButtonEventListener();