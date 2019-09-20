let Animals = ["frog", "llama", "elephant", "crocodile", "hippopotamus", "aardvark", "geoff"];

//task is to print "Animals: Frog, Llama, Elephant, Aardvark, Geoff." without Crocodile and Hippopotamus and capitalising first letter of each

let stringOfAnimals = "Animals: " + Animals.filter((value) => {
    if (value == "crocodile" || value == "hippopotamus") {
        return false;
    } else {
        return true;
    }
}).map((value) => {
    return value.substring(0,1).toUpperCase() + value.substring(1, value.length);
}).reduce((prev, current) => {
    return prev + ", " + current;
})

console.log(stringOfAnimals);