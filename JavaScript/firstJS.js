/*
let number = 1; //usually favour this over var
var myVariable = "hello";
const constant = "potato"; //can not be changed

if () {
    // do this
} else if () {
    // do this
} else {
    // do this
}

while() {
    //do this
}
*/

let myThing = 'test';

function myFunction() {
    return 'hello world';
}

const letty = myFunction();



function mySecondFunction(myArg, mySecondArg) {
    return myArg + mySecondArg;
}

const petty = myFunction('hello', 'world');



function myThirdFunction() {
    function myFourthFunction() {
        return 'hello';
    }

    myFourthFunction();
}

const setty = myThirdFunction();