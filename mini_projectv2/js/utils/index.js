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


function removeClass(element, className){
    element.classList.remove(className)
}

function dotPreLoader(time = 1500) {
    setTimeout(() => {
        const wrap = getElement(".wrapper");
        removeClass(wrap, "lock")
    }, 1500)
}