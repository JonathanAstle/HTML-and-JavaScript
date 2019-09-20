const req = new XMLHttpRequest();
req.onload = () => {
    console.log("IT WORKED", req.response); //req.response is printing the information we want back see link below
    const data = JSON.parse(req.response); //currently the information we get back is json but we want it to be usable data which is what JSON.parse does
    console.log(data); //compare in console
}
req.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json") //POST is used instead of GET to send to API
req.send();
//currently the information we get back is json


document.getElementById("firstButton").innerHTML = data.members;