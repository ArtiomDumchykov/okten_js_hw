const utils = {
    
}


 function addListener(element, eventName, fn) {
    element.addEventListener(eventName, fn)
}

 function insertContentToElement(element, content) {
    element.innerHTML = content
}

function getElement(selector) {
    return document.querySelector(selector)
}

function addClass(element, className) {
    element.classList.add(className)
}

function removeClass(element, className){
    element.classList.remove(className)
}

function dotPreLoader(time = 1200) {
    setTimeout(() => {
        const wrap = getElement(".wrapper");
        removeClass(wrap, "lock")
    }, time)
}


function hiddenElements(...arr) {
    [...arr].map(item => addClass(item, "hidden-lock"))
}

function emptyDataError(message, element) {
    console.log(message)
    console.log(element)
    switch (message) {
        case "empty data": 
            insertContentToElement(element, message)
            break;
        default:
            console.log(message) 
            return message
    }
}

function isCheckEmptyData(data) {
    if (Object.values(data).length) {
        return true
    }

    throw new Error("empty data")

}

function typeOfFunction(val) {
    return Object.prototype.toString.call(val).slice(8,-1).toLowerCase();
}