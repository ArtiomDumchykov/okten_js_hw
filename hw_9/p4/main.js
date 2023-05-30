/*

- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.
*/


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const body = getElement("body");


// START 
render(coursesAndDurationArray)

function render(arr) {

    for (const item of arr) {
        const {title, monthDuration} = item;

        const div = createElement("div");
        addClass(div, "item");


        // h1
        const h1Element = createElement("h1");
        addClass(h1Element, "heading")
        const strH1 = `Title: ${title},`;
        appendTextToElement(h1Element, strH1, );
        
        
        // p
        const pElement = createElement("p");
        addClass(pElement, "description")
        const strP = `MonthDuration: ${monthDuration}`;
        appendTextToElement(pElement, strP);

        
        // append 
        appendElementTo(div, h1Element, pElement)
        appendElementTo(body, div);

    }
}


function addClass(element, ...classNames) {
    element.classList.add(...classNames)
}

function appendTextToElement(element, text) {
    element.textContent = text
}

function appendElementTo(element, ...elements) {
    element.append(...elements)
}

function createElement(element) {
    return document.createElement(element)
}

function getElement(selector) {
    return document.querySelector(selector)
}