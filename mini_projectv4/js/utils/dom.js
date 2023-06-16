//Добавление события на элемент
function addListener(element, eventName, fn) {
    element.addEventListener(eventName, fn)
}

// Вставка контента в элемент

 function insertContentToElement(element, content) {
    element.innerHTML = content
}

//Получение эелмента по селектору

function getElement(selector) {
    return document.querySelector(selector)
}

function hiddenElements(...arr) {
    [...arr].map(item => addClass(item, "hidden-lock"))
}