const acc1 = {
    id: 1,
    name: "Jon"
}

const acc2 = {
    name: "David",
    location: "Manchester"
}

const merged = {...acc2, ...acc1} //notice name has been overriden to "David".

console.log(merged);