const utils = {
    theme: null,
   

}


/*
    Добавление события на элемент
*/
 function addListener(element, eventName, fn) {
    element.addEventListener(eventName, fn)
}

/*
    Вставка контента в элемент
*/
 function insertContentToElement(element, content) {
    element.innerHTML = content
}

/* 
    Получение эелмента по селектору
*/
function getElement(selector) {
    return document.querySelector(selector)
}

function hiddenElements(...arr) {
    [...arr].map(item => addClass(item, "hidden-lock"))
}

/*
    Проверка массива/обьекта на пустоту
    
    вызывать ошибку при пустоте массива/обеькта
*/
function isCheckEmptyData(data) {
    if (Object.values(data).length) {
        return true
    }

    throw new Error("empty data")

}


/*

    Получение к кому типу даных односиться переданное занчение
*/
function typeOfFunction(val) {
    return Object.prototype.toString.call(val).slice(8,-1).toLowerCase();
}