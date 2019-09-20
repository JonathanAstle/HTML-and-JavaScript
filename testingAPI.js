const req = new XMLHttpRequest();

function makeRequest(type, link, obj){
    req.open(type, link);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(obj);
    getOnLoad();
}

function getOnLoad() {
    req.onload = () => {
        if (req.status ==200) {
            console.log("200");
        } 
        else {
            reject("Request Failed");
        }
        console.log(req.response);
        data = JSON.parse(req.response);
        console.log(data[0].imageLocation)
    }
}

let list = [
    "hello", 
    "next item", "holland"
]

console.log(list)

for (let item in list) {
    console.log(list[item]);
}