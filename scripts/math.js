export let add = (a, b) => {
    return a + b;
}

export let subtract = (a, b) => {
    return a - b;
}

export let multiply = (a, b) => {
    return a * b;
}

export let divide = (a, b) => {
    if (b != 0) {
        return a / b;
    } else {
        return NaN // If NaN then cannot divide
    }
}