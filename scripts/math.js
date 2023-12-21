let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    if (b != 0) {
        return a / b;
    } else {
        return NaN // If NaN then cannot divide
    }
}

module.exports = { add, subtract, multiply, divide };