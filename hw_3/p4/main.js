/*
є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
 за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років

*/


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const divComplete = document.querySelector(".complete")
const divUnComplete = document.querySelector(".uncomplete")
const divFilter30 = document.querySelector(".filter30")

// Отрефакторить
const utils = {
    complete: filter(users, ({status}) => status == true),
    uncomplete: filter(users, ({status}) => status == false),
    filter30: filter(users, ({age}) => age > 30),
}

// Отрефакторить
render(utils.complete, divComplete);
render(utils.uncomplete, divUnComplete);
render(utils.filter30, divFilter30);



function filter(arr, fn) {
    return arr.filter(fn)
}


function render(arr, el) {
    const html = arr.map(item => {

        const {name, age, status} = item

        newName = convertFirstLetter(name, "toUpperCase");

        return `<li>Name: ${newName}, age: ${age}, status: ${status};</li>`
        
    }).join("")


    el.innerHTML = html
}

function convertFirstLetter(str, letterCase) {
    return str[0][letterCase]() + str.slice(1)
}


//--------------------------------------------------------------------------------------------------------------------------