/*

    
    *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
    при перезавантаженні сторінки до значаення додається по 10грн, але !!!
    зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
    При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається 


*/

const priceSpan = document.querySelector(".price")
let priceNum = +priceSpan.textContent;

const addToPrice = 10;
const changeAfter = 10;
const KEY_PRICE = "price";
const KEY_TIME = "time"

let priceLocalNum = getLocalStorage(KEY_PRICE)

const time = getLocalStorage(KEY_TIME);
const startDate = new Date().getTime();

if (!priceLocalNum) {
    setLocalStorage(KEY_PRICE, priceNum)
} 


if (time && startDate - time > changeAfter * 1000) {
    priceLocalNum = +priceLocalNum + addToPrice;
    setLocalStorage(KEY_PRICE, priceLocalNum)
}

priceSpan.textContent = priceLocalNum
setLocalStorage(KEY_TIME, startDate.toString())

function getLocalStorage(key) {
    return localStorage.getItem(key)
}

function setLocalStorage(key, val) {
    localStorage.setItem(key, val)
}
