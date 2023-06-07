function component() {
    const element = document.createElement('div');
    element.innerText = "hihi~ webpack";
    return element;
}

document.body.appendChild(component());