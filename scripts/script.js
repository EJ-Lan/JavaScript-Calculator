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
    if (digit === '.' && displayVal.includes('.')) {
        return; // Prevents adding a second decimal point
    }
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

const countDecimals = (value) => {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}

const operate = () => {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(displayVal);
    let result;
    switch (currentOperator) {
        case '+':
            result = add(firstNum, secondNum);
            break;
        case '-':
            result = subtract(firstNum, secondNum);
            break;
        case '×':
            result = multiply(firstNum, secondNum);
            break;
        case '÷':
            result = divide(firstNum, secondNum);
            break;
        default:
            return;
    }

    if (countDecimals(result) > 13) {
        result = result.toFixed(13);
    }

    displayVal = result.toString();
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