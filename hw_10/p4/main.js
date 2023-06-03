/*

    - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, 
    зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".



*/


const text = document.querySelector("#text");


const actionsBtns = document.querySelector(".actions-btns");

const utils = {
    hidden: styleHiddenElement,
    show: styleShowElement
}


actionsBtns.addEventListener("click", function (e) {
    const target = e.target;
    const targetDataAttr = Object.keys(target.dataset)[0];

    utils[targetDataAttr](text)


}) 

function styleHiddenElement(element) {
    addStyle(element, "display", "none")
}

function styleShowElement(element) {
    addStyle(element, "display", "block")
}

function addStyle(element, styleName, styleValue) {
    element.style[styleName] = styleValue
}