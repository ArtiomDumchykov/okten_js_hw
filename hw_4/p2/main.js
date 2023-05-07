/*

    - створити функцію яка приймає масив та виводить кожен його елемент
    - створити функцію яка створює параграф з текстом. Текст задати через аргумент
    - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    
    
    - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/


function showItemOfArray(arr) {
    arr.map(item => console.log(item))
}

showItemOfArray([1,2,3,4,5])
showItemOfArray(["red", "green", "blue", "alpha"])

//--------------------------------------------------------------------------------------------------------------------------



function createElementWithText(element = "p", text = "default") {
    return `<${element}>${text}</${element}>`
}


console.log(createElementWithText("p", "some text1"));
console.log(createElementWithText("p", "some text2"));
console.log(createElementWithText("p", "some text2"));



//--------------------------------------------------------------------------------------------------------------------------

function createElementUlWithText(text = "default", countLi = 1) {
    let html = ""
    for (let i = 0; i < countLi; i++) {
        html +=`<li>${text} - ${i + 1}</li>`
    }

    let str = `<ul>${html}</ul>`
    return str
}

console.log(createElementUlWithText("some text", 2));


//--------------------------------------------------------------------------------------------------------------------------

function createPrimitiveList(arr) {
    const html = arr.map(item => `<li>${item}</li>`).join("")
    return `<ul>${html}</ul>`
}

console.log(createPrimitiveList([0, 1, 2, "Hello", true, false]))

//--------------------------------------------------------------------------------------------------------------------------


const users = [
    {id: 0,name: "Artem1",age: 24},
    {id: 1,name: "Artem2",age: 25},
    {id: 2,name: "Artem3",age: 24},
    {id: 3,name: "Artem4",age: 25},
    {id: 4,name: "Artem5",age: 24},
    {id: 5,name: "Artem6",age: 25},
    {id: 6,name: "Artem7",age: 24},
    {id: 7,name: "Artem8",age: 25},
]


function showFullInfo(arr) {
    const html = arr.map(item => {
        const {id, name, age} = item
        return `<li>id: ${id}, name: ${name}, age: ${age};</li>`
    }).join("")

    return `<ul>${html}</ul>`
}

document.write(showFullInfo(users))



//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------