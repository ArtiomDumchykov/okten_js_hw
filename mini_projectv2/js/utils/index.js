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


// function dotsLoadData(dots, element, time = 1000) {
//     // const loadDots = getElement(".data-load")

//     setTimeout(() => {
//         // removeClass(loadDots, "load")
//         removeClass(dots, "load")
//         addClass(element, "loading")
//         // addClass(getElement(".comments__list"), "loading")
//     }, time)
// }

// function dotPreLoader(time = 1200) {
//     setTimeout(() => {
//         const wrap = getElement(".wrapper");
//         removeClass(wrap, "lock")
//     }, time)
// }


function hiddenElements(...arr) {
    [...arr].map(item => addClass(item, "hidden-lock"))
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