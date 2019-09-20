function minusTen() {
    buttonPress("myButton", -10)
}

function minusOne() {
    buttonPress("myButton", -1)
}

function resetToZero() {
    document.getElementById("myButton").innerText = 0;
    setColour("myButton");
    isGreaterThan100("myButton");
}

function plusOne() {
    buttonPress("myButton", 1)
}

function plusTen() {
    buttonPress("myButton", 10)
}

function setColour(button) {
    if (parseInt(document.getElementById(button).innerText, 10) % 2 == 0) {
        document.getElementById(button).style.background="lightgreen";
    } else if (parseInt(document.getElementById(button).innerText, 10) % 2 == 1 || parseInt(document.getElementById(button).innerText, 10) % 2 == -1) {
        document.getElementById(button).style.background="#FA8072";
    }
}

function isGreaterThan100(button) {
    if (parseInt(document.getElementById(button).innerText, 10) > 100) {
        document.getElementById(button).innerText = document.getElementById("myButton").innerText + "!"
    }
}

function plus(button, int) {
    document.getElementById(button).innerText = parseInt(document.getElementById(button).innerText, 10)+int;
}

function buttonPress(button, int) {
    plus(button, int);
    setColour(button);
    isGreaterThan100(button);
}
