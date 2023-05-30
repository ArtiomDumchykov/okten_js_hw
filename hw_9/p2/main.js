/*
- Є масив:
['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


*/

const body = document.body;

const arrNav = ['Main','Products','About us','Contacts']


const ul = createElement("ul")


// START 
render(arrNav)


function render(arr) {

    for (const item of arr) {
        const li = createElement("li");
        appendTextToElement(li, item)

        appendElementTo(li, ul)
    }

    appendElementTo(ul, body)
}


function appendTextToElement(element, text) {
    element.textContent = text
}

function appendElementTo(element, to) {
    to.appendChild(element)
}

function createElement(element) {
    return document.createElement(element)
}

