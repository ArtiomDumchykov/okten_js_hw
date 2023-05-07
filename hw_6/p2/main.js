/*

==========================
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

*/

//--------------------------------------------------------------------------------------------------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const result1 = coursesAndDurationArray.slice().sort((item1, item2) => descendingNumbers(item1.monthDuration, item2.monthDuration));

const result2 = coursesAndDurationArray.slice().filter(item => filterMoreFive(item.monthDuration));

const result3 = coursesAndDurationArray.slice().map((item, i) => createNewObject(i, item));

// console.log(result1);
// console.log(result2);
// console.log(result3);


function createNewObject(id, item) {
    return {
        id,
        ...item
    }
}


function filterMoreFive(num1) {
    return num1 > 5
} 

function ascendingNumbers(num1, num2) {
    return num1 - num2
}

function descendingNumbers(num1, num2) {
    return num2 - num1
}


//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------