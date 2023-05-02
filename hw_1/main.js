/*
    - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log

    - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

    - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;

    Додаткове для тих хто цікавився prompt`oм
    - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль


*/

let str1 = "hello";
let str2 = "owu";
let str3 = "com";
let str4 = "ua";

let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;


let bool1 = true;
let bool2 = false;

//-------------------------------------------------------------

let firstName = "Artem";
let lastName = "Dumchykov";


let fullName = firstName + " " + lastName;
console.log(fullName);

//-------------------------------------------------------------

let x1 = 100;
let x2 = "100";
let x3 = true;

console.log(typeof x1);
console.log(typeof x2);
console.log(typeof x3);


//-------------------------------------------------------------


let fName = prompt("Enter your first name", "first name")
let lName = prompt("Enter your last name", "last name")

console.log(fName);
console.log(lName);