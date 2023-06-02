/*

    є сторінка, на якій є блок, я кому знаходиьтся цифра. 
    написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

*/

const divCounter = document.querySelector(".count-wrap");

const KEY = "count"

if (!isLocalStorage(KEY)) {
    setLocalstorage(KEY, 0)
    const countNumber = convertToNumber(getLocalStorage(KEY))

    insertTextContentToelement(divCounter, countNumber)

} else {
    start()
}



function start() {

    let countNumber = convertToNumber((getLocalStorage(KEY)))

    // setTimeout(() => {
    //     setLocalstorage(KEY, ++countNumber)
    
    //     divCounter.textContent = countNumber
    // }, 2000)

    setLocalstorage(KEY, ++countNumber)

    divCounter.textContent = countNumber
}


function setLocalstorage(key, data) {
    localStorage.setItem(key, data)
}

function getLocalStorage(key) {
    return localStorage.getItem(key)
}

function isLocalStorage(key) {
    if (!!getLocalStorage(key)) return true;

    return false
}

function tranformToJSON(data) {
    try {
        return JSON.stringify(data)    
    } catch (error) {
        return new Error("Error convert To JSON")
    }
}

function transformToJSObj(data) {
    try {
        return JSON.parse(data)    
    } catch (error) {
        return new Error("Error convert To JS object")
    }
}

function convertToNumber(val) {
    if (!isNaN(+val)) {
        return +val
    } 

    return 0
}

function insertTextContentToelement(element, text) {
    element.textContent = text
}

