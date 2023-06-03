const sessionsWrap = document.querySelector(".sessions-wrap")

const KEY = "sessions";
const utils = {
    arrSessions: null
}


if (!isLocalStorage(KEY)) {
    setLocalstorage(KEY, tranformToJSON([]))
    utils.arrSessions = [];
} else {
    const arrSessions = transformJSONToJSObj(getLocalStorage(KEY));
    utils.arrSessions = [...arrSessions]
    start();
}


function start() {

    const {arrSessions} = utils;
    const HTML = [...arrSessions].map(sessionDateItem => render(new FormatDate(getDate(sessionDateItem))))
    sessionsWrap.innerHTML = HTML;
}

function render({YYYY: year, MM: month, DD: day, hh: houre, mm: minutes, ss: seconds, ...rest}) {
    return `
        <div class="date-wrap"> 
            <p class="date-text">Date: ${year} / ${month} / ${day}</p>
            <p class="time-text">Time: ${houre}:${minutes}:${seconds}</p>
        </div
    `
}

// Рефакторить функцию конструктор
function FormatDate(date) {
    YYYY = convertToString(date.getFullYear());
    MM = convertToString(date.getMonth());
    DD = convertToString(date.getDay());
    hh = convertToString(date.getHours());
    mm = convertToString(date.getMinutes());
    ss = convertToString(date.getSeconds());

    this.YYYY = correctDate(YYYY);
    this.MM = correctDate(MM);
    this.DD = correctDate(DD);
    this.hh = correctDate(hh);
    this.mm = correctDate(mm);
    this.ss = correctDate(ss);
}

function correctDate(valDate) {
    return valDate.length < 2 ? `0${valDate}` : valDate;
}

function getDate() {
    return new Date()
}

function convertToString(val) {
    return val.toString()
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