"use strict";
// – Дано 2 масиви з рівною кількістю об’єктів.
//
let arrUsers = [];
let usersWithId = [
    { id: 1, name: `‘vasya’`, age: 31, status: false },
    { id: 2, name: `‘petya’`, age: 30, status: true },
    { id: 3, name: `‘kolya’`, age: 29, status: true },
    { id: 4, name: `‘olya’`, age: 28, status: false }
];
let citiesWithId = [
    { user_id: 3, country: `‘USA’`, city: `‘Portland’` },
    { user_id: 1, country: `‘Ukraine’`, city: `‘Ternopil’` },
    { user_id: 2, country: `‘Poland’`, city: `‘Krakow’` },
    { user_id: 4, country: ` ‘USA’`, city: `‘Miami’` }
];
for (let user of usersWithId) {
    arrUsers.push(user);
}
console.log(arrUsers);
//10 чисел, вивести тільки парне
let arrTen = [154, 12, 456, 81, 45, 475, 444, 1255, 1, 20];
for (let i = 0; i < arrTen.length; i++) {
    if (arrTen[i] % 2 === 0) {
        console.log(arrTen[i]);
    }
}
//z odnoho v inshui
let arrEleven = [`start`, 154, 12, 456, 81, 45, 475, 444, 1255, 1, 20, `finish`];
let arrNew = [];
for (let i = 0; i < arrEleven.length; i++) {
    arrNew.push(arrEleven[i]);
}
console.log(arrNew);
let arr18 = [`a`, `b`, `c`];
let arrWord18 = [`a`, `b`, `c`];
for (let i = 0; i < arr18.length; i++) {
    arrWord18.push(arr18[i]);
}
console.log(arrWord18);
let Word18 = [];
let i18 = 0;
while (i18 < arr.length) {
    Word18 += arr[i18];
    i18++;
}
console.log(arrWord18);
let letters = [`a`, `b`, `c`];
let wor = '';
for (let letter of letters) {
    wor += letter;
}
console.log(wor);
