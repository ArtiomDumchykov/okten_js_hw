function dotsLoadData(dots, element, time = 1000) {
    // const loadDots = getElement(".data-load")

    setTimeout(() => {
        // removeClass(loadDots, "load")
        removeClass(dots, "load")
        addClass(element, "loading")
        // addClass(getElement(".comments__list"), "loading")
    }, time)
}

function dotPreLoader(time = 1200) {
    setTimeout(() => {
        const wrap = getElement(".wrapper");
        removeClass(wrap, "lock")
    }, time)
}