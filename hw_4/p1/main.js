/*
    - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    - створити функцію яка обчислює та повертає площу кола з радіусом r
    - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

*/

function areaRect(num1 = 0, num2 = 0) {

    if (isNaN(num1) || isNaN(num2)) return "Введите числа"


    if (num1 < 0 || num2 < 0) return "Введены отрицательные числа"

    return num1 * num2
}

console.log(areaRect(2,3));
console.log(areaRect(3,3));
console.log(areaRect(4, -1));
console.log(areaRect(4, "s"));

//--------------------------------------------------------------------------------------------------------------------------
function areaCircle(num1 = 0) {

    if (isNaN(num1)) return "Введите число"


    if (num1 < 0) return "Введено отрицательное число"

    return Math.PI * (num1 ** 2)
}

console.log(areaCircle(2));
console.log(areaCircle(3));
console.log(areaCircle(-4));
console.log(areaCircle("s"));

//--------------------------------------------------------------------------------------------------------------------------

function areaCylinder(num1 = 0, num2 = 0) {

    if (isNaN(num1) || isNaN(num2)) return "Введите числа"


    if (num1 < 0 || num2 < 0) return "Введены отрицательные числа"

    return Math.PI * num1 * (num1 + num2)
}

// areaCylinder(R, h) - R - радиус, h - высотка цилиндра
console.log(areaCylinder(2,3));
console.log(areaCylinder(3,3));
console.log(areaCylinder(4, -1));
console.log(areaCylinder(4, "s"));


//--------------------------------------------------------------------------------------------------------------------------
