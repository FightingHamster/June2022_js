// створити функцію яка обчислює та повертає площу прямокутника зі
// сторонами а і б
// function rectangle(a, b) {
//     let res = a * b;
//     return res;
// }
//
// console.log(rectangle(8, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(pi, r) {
//     let res = pi * (r * r);
//     return res;
// }
//
// console.log(circle(3.14, 11));

// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r


// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [1, 2, 3, 4, 5,];
// function foo(arr) {
//     console.log(arr);
// }
// foo(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(text) {
//     document.write(`<p>${text}</p>`);
//
// }
// foo('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати
// ерез аргумент всім однаковий
// function foo(text) {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// }
// foo('oxoxo');

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається
// другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text, count) {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo('text',3);

// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
// let array = [1, 'text', NaN];

// function foo(arr) {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// foo(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,
// name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [{id: 1, name: 'vasya', age: 18},
//     {id: 2, name: 'sasha', age: 28},
//     {id: 3, name: 'yra', age: 78}
// ];
// function foo(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}  ${arrElement.name}  ${arrElement.age}</div>`);
//     }
// }
// foo(array);


// - створити функцію яка повертає найменьше число з масиву
// let array = [12, 45, 18, 23];
//
// function foo(arr) {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min) {
//             min = minElement;
//         }
//         return min;
//     }
// }
//
// console.log(foo(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів
// масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 2, 3, 4, 5];
//
// function foo(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// console.log(foo(array));
