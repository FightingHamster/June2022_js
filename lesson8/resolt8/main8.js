// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let array = [];
//
// let user1 = new User(1, 'kola', 'kola1', 'zxcxzc', 315163);
// let user2 = new User(15, 'kola', 'kola1', 'zxcxzc', 315163);
// let user3 = new User(48, 'kola', 'kola1', 'zxcxzc', 315163);
// let user4 = new User(84, 'kola', 'kola1', 'zxcxzc', 315163);
// let user5 = new User(4, 'kola', 'kola1', 'zxcxzc', 315163);
// let user6 = new User(32, 'kola', 'kola1', 'zxcxzc', 315163);
// let user7 = new User(45, 'kola', 'kola1', 'zxcxzc', 315163);
// let user8 = new User(3, 'kola', 'kola1', 'zxcxzc', 315163);
// let user9 = new User(8, 'kola', 'kola1', 'zxcxzc', 315163);
// let user10 = new User(6, 'kola', 'kola1', 'zxcxzc', 315163);
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10,);
// console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter(value => value.id % 2 == 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = array.sort((a, b) => a.id - b.id);
// console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class User {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// let array = [];
//
// let user1 = new User(1, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','g']);
// let user2 = new User(15, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','2','2']);
// let user3 = new User(48, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','45','3','4','5']);
// let user4 = new User(84, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','41','5','35']);
// let user5 = new User(4, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','3541','4']);
// let user6 = new User(32, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','34','4','35','354','54']);
// let user7 = new User(45, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','654']);
// let user8 = new User(3, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','654']);
// let user9 = new User(8, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','9887']);
// let user10 = new User(6, 'kola', 'kola1', 'zxcxzc', 315163, ['milk', 'juce','64668','324','35','64']);
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10,);
// // console.log(array);
// let sort = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufacturrer, yearOfIssue, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturrer = manufacturrer;
//     this.yearOfIssue = yearOfIssue;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== "function") {
//                 console.log(`${item}--${this[item]}`);
//             }
//         }
//
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//
//     }
// }
//
// let car = new Car('Reno', 'French', 2001, 200, 2.5);
// console.log(car);
// car.drive();
// car.info()
// car.increaseMaxSpeed(80);
// car.addDriver({name: 'adc'});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturrer, yearOfIssue, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturrer = manufacturrer;
        this.yearOfIssue = yearOfIssue;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;

    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (const item in this) {
            if (typeof this[item] !== "function") {
                console.log(`${item}--${this[item]}`)
            }

        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car = new Car('Reno', 'French', 2001, 200, 2.5);

console.log(car);
car.drive();
car.info()
car.increaseMaxSpeed(80);
car.addDriver({name: 'adc'});


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку