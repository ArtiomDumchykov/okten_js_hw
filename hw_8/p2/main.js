/*


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


//--------------------------------------------------------------------------------------------------------------------------
// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
// }
  
// Car.prototype.drive = function() {
//     console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
//   };

// Car.prototype.info = function() {
//   for (let prop in this) {
//     if (typeof this[prop] !== 'function') {
//       console.log(`${prop} - ${this[prop]}`);
//     }
//   }
// };

// Car.prototype.increaseMaxSpeed = function(newSpeed) {
//   this.maxSpeed += newSpeed;
// };

// Car.prototype.changeYear = function(newValue) {
//   this.year = newValue;
// };

// Car.prototype.addDriver = function(driver) {
//   this.driver = driver;
// };




//  const myCar = new Car('Civic', 'Honda', 2021, 200, 1.6);
//  myCar.drive(); // Виведе "Їдемо зі швидкістю 200 км/год"
//  myCar.info();  // Виведе всю інформацію про автомобіль
//  myCar.increaseMaxSpeed(50);
//  myCar.changeYear(2022);
//  myCar.addDriver({ name: 'John Doe', license: 'ABC123' });
  
//--------------------------------------------------------------------------------------------------------------------------


// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
  
//     drive = function() {
//       console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
//     };
  
//     info = function() {
//       for (let prop in this) {
//         if (typeof this[prop] !== 'function') {
//           console.log(`${prop} - ${this[prop]}`);
//         }
//       }
//     };
  
//     increaseMaxSpeed = function(newSpeed) {
//       this.maxSpeed += newSpeed;
//     };
  
//     changeYear = function(newValue) {
//       this.year = newValue;
//     };
  
//     addDriver = function(driver) {
//       this.driver = driver;
//     };
//   }
  
//   // Приклад використання:
//   const myCar = new Car('Civic', 'Honda', 2021, 200, 1.6);
//   myCar.drive(); // Виведе "Їдемо зі швидкістю 200 км/год"
//   myCar.info(); // Виведе всю інформацію про автомобіль
//   myCar.increaseMaxSpeed(50);
//   myCar.changeYear(2022);
//   myCar.addDriver({ name: 'John Doe', license: 'ABC123' });
 

// В данном коде есть нюансы которые необходимо решить это такие вещи, как setter|getter, ну и другие вещи и т.п.

//--------------------------------------------------------------------------------------------------------------------------



// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// class Prince {
//     constructor(name, age, foundShoe) {
//       this.name = name;
//       this.age = age;
//       this.foundShoe = foundShoe;
//     }
// }

// const cinderellas = [
//     new Cinderella('Cindy', 20, 36),
//     new Cinderella('Ella', 22, 35),
//     new Cinderella('Bella', 25, 37),
//     new Cinderella('Diana', 23, 38),
//     new Cinderella('Alice', 21, 36.5),
//     new Cinderella('Lily', 19, 35.5),
//     new Cinderella('Grace', 24, 37.5),
//     new Cinderella('Sophia', 26, 36),
//     new Cinderella('Emma', 20, 37),
//     new Cinderella('Olivia', 22, 36.5)
//   ];



// const prince = new Prince('William', 28, 35.5);

// const {name: nameC, age: ageC,footSize: footSizeC} = cinderellas.find(({footSize}) => footSize === prince.foundShoe);
// console.log(`Name ${nameC}, ${ageC} years, footSize ${footSizeC}`)
