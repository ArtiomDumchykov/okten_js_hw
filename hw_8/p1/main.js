/*
    - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
    створити пустий масив, наповнити його 10 об'єктами new User(....)

    - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


*/

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// const users = []

// for (let i = 0; i < 10; i++) {
//     const user = new User(i, `Artem${i}`, `Dumchykov${i}`, `test${i}@example.com`, `+380000000${i}`)
//     users.push(user)
// }
// console.log(users)

//--------------------------------------------------------------------------------------------------------------------------


// const result1 = usersFilter(users, function(item) {return item.id % 2 == 0})

// const result2 =  [...users].filter((a,b) => ascendingFilterUsersById(+a.id, +b.id))

// console.log(result1)
// console.log(result2)

// function ascendingFilterUsersById(num1, num2) {
//     return num1 - num2
// }


// function usersFilter(arr, fn) {
//     return arr.filter(fn)
// }


//--------------------------------------------------------------------------------------------------------------------------


/*
    - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
    створити пустий масив, наповнити його 10 об'єктами Client
    - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


*/



class Client {
    constructor(id, name, surname, email, phone, orders = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone; 
        this.orders = orders;
    }
}




const clients = []

for (let i = 0; i < 10; i++) {

    const orders = []

    // рандомное коли-во товаров
    // можно вынести в отдельные функции
    for (let j = 0, r = randomOneToTen(); j < r; j++) {
        orders.push(returnObj(j))
    }

    const client = new Client(i, `Artem${i}`, `Dumchykov${i}`, `test${i}@example.com`, `+380000000${i}`, orders)

    clients.push(client)
}

// Массив юзеров
console.log(clients)


//  - Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const result = [...clients].sort((a, b) => ascendingSort(a.orders.length, b.orders.length))
console.log(result)

function ascendingSort(num1, num2) {
    return num1 - num2
}


function returnObj(i) {
    return {
        id: i,
        nameProduct: `product${i}`,
        price: randomOneToTen(),
        count: randomOneToTen()
    }
}

function randomOneToTen() {
    return  Math.floor(Math.randomOneToTen() * (10 - 1 + 1)) + 1
}




//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------