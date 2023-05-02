/*
    Масиви та об'єкти:
    - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
    - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
    - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


*/


//--------------------------------------------------------------------------------------------------------------------------

const arr = [1, 10n, "Hello", true, null, undefined, {name: "Artem"}, [1,2,3,4,5], Symbol("text")]

for (const item of arr) console.log(item);

//--------------------------------------------------------------------------------------------------------------------------

const book1 = {
    title: "Some title", 
    pageCount: 100,
    genre: "some genre"
}
const book2 = {
    title: "Some title", 
    pageCount: 101,
    genre: "some genre"
}
const book3 = {
    title: "Some title", 
    pageCount: 110,
    genre: "some genre"
}

//--------------------------------------------------------------------------------------------------------------------------

const book4 = {
    title: 'Some title',
    pageCount: 1000,
    genre: 'some genre',
    authors: [
        {name: 'some Name', age: 47}
    ]
};
const book5 = {
    title: 'Some title',
    pageCount: 1001,
    genre: 'some genre',
    authors: [
        {name: 'some Name', age: 57}
    ]
};
const book6 = {
    title: 'Some title',
    pageCount: 1010,
    genre: 'some genre',
    authors: [
        {name: 'some Name', age: 67}
    ]
};


//--------------------------------------------------------------------------------------------------------------------------

const users = [
    { name: "Artem1", userName: "some userName1", password: "0001"},
    { name: "Artem2", userName: "some userName1", password: "0010"},
    { name: "Artem3", userName: "some userName1", password: "0011"},
    { name: "Artem4", userName: "some userName1", password: "0100"},
    { name: "Artem5", userName: "some userName1", password: "0101"},
    { name: "Artem6", userName: "some userName1", password: "0110"},
    { name: "Artem7", userName: "some userName1", password: "0111"},
    { name: "Artem8", userName: "some userName1", password: "1000"},
    { name: "Artem9", userName: "some userName1", password: "1001"},
    { name: "Artem10", userName: "some userName1", password: "1010"},
 
]

users.map(item => {
    const { password } = item;
    console.log(`Password: ${password}`)
})


//--------------------------------------------------------------------------------------------------------------------------