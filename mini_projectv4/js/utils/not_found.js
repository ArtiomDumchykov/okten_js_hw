function notFound() {

    const main = getElement(".main")
    const notFound = getElement(".not-found")


    elemntStyleJS(main, "display", "none");
    elemntStyleJS(notFound, "display", "block");
    
    

}


function elemntStyleJS(element, key, val) {
    element.style[key] = val
}