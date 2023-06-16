function dotsLoadData(dots, element, time = 1000) {

    delay(time,() => {
        removeClass(dots, "load")
        addClass(element, "loading")
    })
}


function dotPreLoader(time = 1200) {
    delay(time, () => {
        const wrap = getElement(".wrapper");
        removeClass(wrap, "lock")
    })
}