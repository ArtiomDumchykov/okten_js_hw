/*
    =========================
    описати колоду карт (від 6 до туза без джокерів)
    - знайти піковий туз
    - всі шістки
    - всі червоні карти
    - всі буби
    - всі трефи від 9 та більше

    {
        cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
        color:'', // 'red','black'
    }

    =========================

    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
    {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    }
    =========================
    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
    --написати пошук всіх об'єктів, в який в modules є sass
    --написати пошук всіх об'єктів, в який в modules є docker

*/



//--------------------------------------------------------------------------------------------------------------------------



// const optionsCards = {
//     suits: ['spade', 'diamond', 'heart', 'clubs'],
//     values: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
//     color: ["red", "black"]
// }


// const desk = []

// createCards();
// console.log(desk);


// function createCards() {
//     const [red, black] = optionsCards.color;
//     const {suits: suitsCards, values: valuesCards} = optionsCards

//     suitsCards.map(suit => {
        // desk.push(...valuesCards.map(valueCard=> {
        //     return {
        //         cardSuit: suit,
        //         value: valueCard,
        //         color: (suit == 'diamond' || suit == "heart") ? red : black
        //     }
        // }))
//     })
// }



// const result1 = findCardSuit(desk, "spade", "ace");
// const result2 = findAllCardsByValue(desk, 6);
// const result3 = findAllCardsByColor(desk, "red");
// const result4 = findAllCardsBySuits(desk, "diamond");


// // console.log(result1)
// // console.log(result2)
// // console.log(result3)
// // console.log(result4)

// function findAllCardsBySuits(arr, suit) {
//     return [...arr].filter(item => item.cardSuit === suit)
// } 
// function findAllCardsByColor(arr, color) {
//     return [...arr].filter(item => item.color === color)
// } 

// function findAllCardsByValue(arr, val) {
//     return [...arr].filter(item => item.value == val)
// }


// function findCardSuit(arr, suitCard, valueCard) {
//     return [...arr].find(card => card.cardSuit === suitCard && card.value === valueCard)
// }


//--------------------------------------------------------------------------------------------------------------------------

// const optionsCards = {
//     suits: ['spade', 'diamond', 'heart', 'clubs'],
//     values: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
//     color: ["red", "black"]
// }


// const desk = {};

// createDesk();

// console.log(desk);

// function createDesk() {

//     const [red, black] = optionsCards.color;
//     const {suits: suitsCards, values: valuesCards} = optionsCards;


//     suitsCards.reduce((acc, suit) => {
//          acc[suit] = valuesCards.map(valueCard=> {
//             return {
//                 cardSuit: suit,
//                 value: valueCard,
//                 color: (suit == 'diamond' || suit == "heart") ? red : black
//             }
//         })
//         return acc
//     },desk)
// }







//--------------------------------------------------------------------------------------------------------------------------