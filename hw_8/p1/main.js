/*
    - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
    створити пустий масив, наповнити його 10 об'єктами new User(....)

    - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


    - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
    створити пустий масив, наповнити його 10 об'єктами Client
    - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


    - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
        -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
        -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
        -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
        -- changeYear (newValue) - змінює рік випуску на значення newValue
        -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


    - (Те саме, тільки через клас)
    Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
        -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
        -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
        -- changeYear (newValue) - змінює рік випуску на значення newValue
        -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



    -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
    Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


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


// class Client {
//     constructor(id, name, surname, email, phone, orders = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone; 
//         this.orders = orders;
//     }
// }




// const clients = []

// for (let i = 0; i < 10; i++) {

//     const orders = []

//     for (let j = 0; j < random(); j++) {
//         orders.push({
//             id: j,
//             nameProduct: `product${j}`,
//             price: random(),
//             count: random()
//         })
//     }

//     const client = new Client(i, `Artem${i}`, `Dumchykov${i}`, `test${i}@example.com`, `+380000000${i}`, orders)

//     clients.push(client)
// }

// console.log(clients)


// const result = [...clients].sort((a, b) => ascendingSort(a.orders.length, b.orders.length))
// console.log(result)

// function ascendingSort(num1, num2) {
//     return num1 - num2
// }

// function random() {
//     return  Math.floor(Math.random() * (10 - 1 + 1)) + 1
// }


//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------