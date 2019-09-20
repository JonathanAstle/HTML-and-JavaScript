const myArray = [
    "a", "b", "c"
]

myArray.push("d");

myArray.pop(); //removes last item

myArray.push("d");
myArray.push("e");
myArray.push("f");

for (let item of myArray) {
    console.log(item);
}

//or

myArray.forEach((value, index, array) => {
    console.log(value, index, array);
})

const result = myArray.filter((value, index) => {
    if (index < 3) {
        return true;
    } else {
        return false;
    } // ["a", "b", "c"]
}).map((value) => {
    return value + "?"; //["a?", "b?", "c?"]
}).reduce((prev, current) => {
    return prev + current; //a?b?c?
})