function submitt(form) {
    const formObj = {};
    for (let element of form.elements) {
        if (element.type == "submit") {
            continue;
        }
        console.log(element.value);
        formObj[element.id] = element.value;
    }
    console.log(formObj);

    return false;
}