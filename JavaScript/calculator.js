
//let number1 = document.getElementById("number1");
//let operator = document.getElementById("operator");
//let number1 = document.getElementById("number2");


function calculator(symbol, a, b) {
    if (symbol == "+") {
        return a+b;
    } else if (symbol == "-") {
        return a-b;
    } else if (symbol == "/") {
        return a/b;
    } else if (symbol == "*") {
        return a*b;
    } else {
        return "invalid operator"
    }
}



/*
let listOfOperators = ["*", "/", "+", "-"];

let operator = prompt("type in an operator: ");
while (!(listOfOperators.includes(operator))) {
    operator = prompt("That is not a valid operator. Please type either * / + -");
}
let a = prompt("number 1: ")
while (!(a>0) && !(a<=0)) {
    a = prompt("That's not a number. Try again: ")
}
let b = prompt("number 2: ")
while (!(b>0) && !(b<=0)) {
    b = prompt("That's not a number. Try again: ")
}

console.log(calculator(operator, a, b));
*/