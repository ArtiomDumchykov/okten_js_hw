/*
    - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
    - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
    - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
    - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


*/

// const text = "Hello World"

// let str = "";


// for (let i = 1, count = 10; i <= count; i++) {
//     str += `<div>${text} ${i}!</div>`
// }

// document.write(str + "<hr>")

//--------------------------------------------------------------------------------------------------------------------------


const text = "Hello World"


let count = 1
const maxCount = 20

let str = "";

while (true) {

    str += `<h1>${text} ${count}!</h1>`

    if (count >= maxCount) break;
    count++
}


document.write(str + "<hr>")


//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------