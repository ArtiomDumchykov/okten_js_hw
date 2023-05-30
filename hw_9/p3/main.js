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
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
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
const ul = getElement(".list");


// START 
render(coursesAndDurationArray)

function render(arr) {
    arr.map(item => {
        const {title, monthDuration} = item

        ul.innerHTML += `<li>Title: ${title}, MonthDuration: ${monthDuration}</li>`

    })

    appendElementTo(ul, body)
}


function getElement(selector) {
    return document.querySelector(selector)
}

function appendElementTo(element, to) {
    to.appendChild(element)
}