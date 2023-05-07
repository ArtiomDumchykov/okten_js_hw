/*
    - Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]

*/


let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';


console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());


let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

//--------------------------------------------------------------------------------------------------------------------------

let str7 = ' dirty string   ';

str7 = str7.trim();
console.log(str7);

//--------------------------------------------------------------------------------------------------------------------------

// let str8 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str8); //['Ревуть', 'воли', 'як', 'ясла', 'повні']
// console.log(arr)

// function stringToarray(str) {
//     str = str.trim();

//     const newArr = [];

//     let _str = '';

//      for (let i = 0, length = str.length ; i < length; i++){

//         const targetSymbol = str[i]

//         if (targetSymbol === " ") {
//             newArr.push(_str)
//             _str = ""
//             continue;
//         } else {
//             _str += targetSymbol
//         }
//     }   
//     newArr.push(_str)

//     return newArr
// }



//--------------------------------------------------------------------------------------------------------------------------


// let arr = [10,8,-7,55,987,-1011,0,1050,0];

// let result = [...arr].map(convertTostring);

// function convertTostring(item) {
//     return item.toString()
// }

// console.log(result)

//--------------------------------------------------------------------------------------------------------------------------

const utils = {
    ascending: ascendingNumbers,
    descending: descendingNumbers
}

let nums = [11,21,3];
console.log(sortNums(nums,'ascending')); // [3,11,21]
console.log(sortNums(nums,'descending')); // [21,11,3]


function sortNums(arr, action) { 
    return arr.slice().sort((a,b) => utils[action](a, b))
}


function ascendingNumbers(num1, num2) {
    return num1 - num2
}

function descendingNumbers(num1, num2) {
    return num2 - num1
}



//--------------------------------------------------------------------------------------------------------------------------