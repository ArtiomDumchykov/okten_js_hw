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


