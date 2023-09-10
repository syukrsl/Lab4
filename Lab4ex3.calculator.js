let firstNumber; // global variables, undefined to start
let secondNumber;
let operation;

let resultElem = document.getElementById('result')

function clickNumber(num) {
    // process numbers as strings to support multi-digits
    let stringNum = new String(num);

    // if this is the first button clicked, store it as firstNumber
    if (!firstNumber) {
        firstNumber = stringNum;
        resultElem.innerText = firstNumber;
    }
    // if we haven't chosen an operation yet, we're still on the first number so save more digits
    else if (!operation) {
        firstNumber += stringNum;
        resultElem.innerText = firstNumber;
    }
    // if this is the first time we've clicked the second button, store it as secondNumber
    else if (!secondNumber) {
        secondNumber = stringNum;
        resultElem.innerText = secondNumber;
    }  
    // we're still on the second number so save more digits
    else {
        secondNumber += stringNum;
        resultElem.innerText = secondNumber;
    }      
}

function clickOperator(op) {
    operation = op;
}

function showResult() {
    let first = parseInt(firstNumber)
    let second = parseInt(secondNumber)
    let calculation = 0;

    switch (operation) {
        case '+': calculation = first + second; break;
        case '-': calculation = first - second; break;
        case '/': calculation = first / second; break;
        case '*': calculation = first * second; break;
    }

    clearResult()
    firstNumber = new String(calculation)
    resultElem.innerText = calculation;
}

function clearResult() {
    // reset global vars
    firstNumber = undefined;
    secondNumber = undefined;
    operation = undefined;

    resultElem.innerText = '';
}