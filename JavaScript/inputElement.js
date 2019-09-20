function handleEvent(element) {
    console.log(element.value);
}


function handleFormSubmit(form) {
    const formDataObj = {};
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    return false;
}


function myFunction() {
    document.getElementById("form").submit();
}
