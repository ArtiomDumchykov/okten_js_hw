/*

    Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, 
    в масив sessions зберігається інформація про дату та час відвідування сторінки. 
    Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. 
    Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

        
    зробити масив на 100 об'єктів та дві кнопки prev next
    при завантажені сторінки з'являються перші 10 об'єктів.
    При натисканні next виводяться настпні 10 об'єктів
    При натисканні prev виводяться попередні 10 об'єктів


*/

const KEY = "sessions"


if (!isLocalStorage(KEY)) {
    console.log("isCheckFirst")
    setLocalstorage(KEY, tranformToJSON([]))
} else {
    start()
}

function start() {
    console.log("start")
    const arrSessions = transformJSONToJSObj(getLocalStorage(KEY))

    const newArrSessions = pushElementToArr(arrSessions, getDate())

    setLocalstorage(KEY, tranformToJSON(newArrSessions))

}

function pushElementToArr(arr, ...elements) {
    const copyArr = [...arr]
    return  copyArr.push(...elements) && copyArr
}

function getDate() {
    return new Date()
}

function isLocalStorage(key) {
    if (!!getLocalStorage(key)) return true;

    return false
}

function setLocalstorage(key, data) {
    localStorage.setItem(key, data)
}

function getLocalStorage(key) {
    return localStorage.getItem(key)
}


function tranformToJSON(data) {
    try {
        return JSON.stringify(data)    
    } catch (error) {
        return new Error("Error convert To JSON")
    }
}

function transformJSONToJSObj(data) {
    try {
        return JSON.parse(data)    
    } catch (error) {
        return new Error("Error convert To JS object")
    }
}