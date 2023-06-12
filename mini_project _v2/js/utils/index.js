// export const utils = {
    
// }

export function addListener(element, eventName, fn) {
    element.addEventListener(eventName, fn)
}

export function insertContentToElement(element, content) {
    element.innerHTML = content
}

export function getElement(selector) {
    return document.querySelector(selector)
}


