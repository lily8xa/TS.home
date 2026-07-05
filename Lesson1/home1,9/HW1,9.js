"use strict";
function square(aNam, bNam) {
    const result = aNam * bNam;
    return result;
}
let p1 = square(10, 40);
let p2 = square(22, 44);
console.log(p1);
console.log(p2);
function RoundSquare(radius) {
    return Math.PI * radius * radius;
}
let r1 = RoundSquare(12);
let r2 = RoundSquare(26);
console.log(r1);
console.log(r2);
function CelinderSquare(radius, height) {
    return 2 * Math.PI * radius * height;
}
console.log(CelinderSquare(2, 5));
// debugger
function ArrFilter(user) {
    let usersName = [`Anna`, `Ivan`, `Olesya`, `Valentina`];
    for (let userName of usersName) {
        console.log(userName);
    }
    return user;
}
ArrFilter('Anna');
function addPage(page) {
    document.write(` <p>${page}</p> `);
    return page;
}
console.log(addPage(`Hello`));
console.log(addPage(`World`));
function textLi(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
    return text;
}
textLi(`Medium`);
console.log(textLi(`Hard`));
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function TextNumber(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
    return text;
}
TextNumber(`Mister`, 10);
console.log(TextNumber(`Hard`, 3)); // --чому в консоль виводить 2 шт? а в документ вірно
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function innerFromArr(arr) {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
    return arr;
}
innerFromArr([12, `col`, 12, true, 45688, false, `Gorges`]);
console.log(innerFromArr([`vork`, 122, true]));
function itemUser(users) {
    for (let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
        console.log(user);
    }
    return users;
}
itemUser([
    { id: 1, name: "John", age: 19 },
    { id: 2, name: "January", age: 21 },
    { id: 3, name: "February", age: 18 },
    { id: 4, name: "March", age: 26 },
    { id: 5, name: "April", age: 35 },
]);
//– створити функцію яка повертає найменьше число з масиву
function minValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minValue([12, -22, 88, -12, -36,]));
//– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//@ts-ignore
function sum(num) {
    let result = 0;
    for (let number of num) {
        result = result + number;
    }
    return result;
}
//@ts-ignore
console.log(sum([1, 2, 10]));
//– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//@ts-ignore
function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
console.log(swap([11, 22, 33, 44], 1, 0));
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
//
// function exchange(sumUAH,currencyValues ,exchangeCurrency){
//
// for (let i=0; i<currencyValues.length; i++){
//     if(currencyValues[i].currency===exchangeCurrency){
//
//         return sumUAH/currencyValues[i].value
//
//     }
//     // else if(currencyValues[i].currency!==exchangeCurrency){   //Я хотіла у випадку неправильного вводу вивести повідомлення.
//     //    console.log(`Error`);
//     // }
// }
//
// }
//  // exchange(10000,[{currency:`’USD’`,value:25},{currency:`’EUR’`,value:42}],)
// console.log (exchange(10000,[{currency:`USD`,value:25},{currency:`EUR`,value:42}],`EUR`))
//– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//@ts-ignore
function swap1(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
console.log(swap1([11, 22, 33, 44], 1, 0));
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
function chekCurrency(currencyBase, currency) {
    for (const currencyTitle of currencyBase) {
        if (currency === currencyTitle) {
            return true;
        }
    }
}
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const currencyBase = ['USD', 'EUR', 'GBP'];
    if (chekCurrency(currencyBase, currencyValues[0].currency)
        && chekCurrency(currencyBase, currencyValues[1].currency)
        && chekCurrency(currencyBase, currencyValues[2].currency)
        && chekCurrency(currencyBase, exchangeCurrency)) {
        for (let i = 0; i < currencyValues.length; i++) {
            if (currencyValues[i].currency === exchangeCurrency) {
                return sumUAH / currencyValues[i].value;
            }
        }
    }
    else {
        return 'невірно введена валюта';
    }
}
// exchange(10000,[{currency:`’USD’`,value:25},{currency:`’EUR’`,value:42}],)
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }, { currency: 'GBP', value: 75 }], 'GBP'));
