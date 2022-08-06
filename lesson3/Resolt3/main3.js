// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 2;
if (x !== 0) {
    console.log(true);
} else {
    console.log(false);
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = 46;
if (time > 0 && time < 15) {
    console.log("1quarter");
} else if (time >= 15 && time < 30) {
    console.log("2quarter");
} else if (time >= 30 && time <= 45) {
    console.log("3quarter");
} else if (time >= 45 && time <= 59) {
    console.log("4quarter");
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
let day = 27
if (day >= 1 && day <= 10) {
    console.log("1decade");
} else if (day >= 11 && day <= 20) {
    console.log("2decade");
} else if (day >= 21 && day <= 31) {
    console.log("3decade");
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
// let week = prompt();
// switch (week) {
//     case '1':
//         console.log('sunday');
//         break;
// }
// switch (week) {
//     case '2':
//         console.log('monday');
//         break;
// }
// switch (week) {
//     case '3':
//         console.log('tuesdey');
//         break;
// }
// switch (week) {
//     case '4':
//         console.log('wendsday');
//         break;
//
// }
// switch (week) {
//     case '5':
//         console.log('thursday');
//         break;
//
// }
// switch (week) {
//     case '6':
//         console.log('friday');
//         break;
//
// }
// switch (week) {
//     case '7':
//         console.log('saturday');
//         break;
//
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let p = 3;
let y = 6;
if (p > y) {
    console.log(p);
} else if (y > p) {
    console.log(y);
} else if (y === p) {
    console.log("eqvuivalent");
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо
//     значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let a = null || "default";
console.log(a);