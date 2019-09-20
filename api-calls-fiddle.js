let data; //done this for scope reasons

const req = new XMLHttpRequest();
req.onload = () => {
    console.log("IT WORKED", req.response); //req.response is printing the information we want back see link below
    data = JSON.parse(req.response); //currently the information we get back is json but we want it to be usable data which is what JSON.parse does

    document.getElementById("firstButton").innerHTML = data.members[0].name;
    document.getElementById("secondButton").innerHTML = data.members[1].name;
    document.getElementById("thirdButton").innerHTML = data.members[2].name;

    firstFunction(0, "collapseOne");
    firstFunction(1, "collapseTwo");
    firstFunction(2, "collapseThree");

    document.getElementById("intro").innerHTML = "Squad name: " + data.squadName + "<br>" + "Home town: " + data.homeTown + "<br>" + "Formed: " + data.formed + "<br>" + "Secret Base: " + data.secretBase;
    console.log(data); //compare in console
}
req.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json") //POST is used instead of GET to send to API
req.send();
//currently the information we get back is json

function firstFunction(x, paragraph) {
    document.getElementById(paragraph).innerHTML = "<br>Age: " + data.members[x].age + "<br>Secret Identity: " + data.members[x].secretIdentity + "<br><button>Powers</button>" + "<br><br>";
}

// console.log("Anything here?" + data)
// document.getElementById("giggs").innerHTML = "Age: " + data;
// //firstFunction(0, "collapseOne");
