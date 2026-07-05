"use strict";
let arr = [`Clone`, 11, true, {}, 12, undefined, [], NaN, null, 55555,];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
let book1 = { title: `Hamlet`, pageCount: 790, genre: `Tragedy` };
let book2 = { title: `Sherlok`, pageCount: 820, genre: `Detective` };
let book3 = { title: `Hero`, pageCount: 210, genre: `Fantasy` };
console.log(book1);
console.log(book2);
console.log(book3);
let book4 = {
    title: `Hamlet`, pageCount: 790, genre: `Tragedy`,
    authors: [{ name: `Shekspeer`, age: 45 }, { name: `Viliam`, age: 23 }]
};
let book5 = {
    title: `Sherlok`, pageCount: 820, genre: `Detective`,
    authors: [{ name: `Mari`, age: 33 }, { name: `Q`, age: 48 }]
};
let book6 = {
    title: `Hero`, pageCount: 210, genre: `Fantasy`,
    authors: [{ name: `Marvel`, age: 28 }, { name: `Antonio`, age: 32 }]
};
console.log(book4);
console.log(book5);
console.log(book6);
let users = [
    { name: `Johnson`, username: `Joo`, password: `Jojo11` },
    { name: `Elisabeth`, username: `ElSa`, password: `Eli10Eli` },
    { name: `Joseph`, username: `Joj`, password: `Joj12Se` },
    { name: `Andri`, username: `And`, password: `An45r15` },
    { name: `Sofi`, username: `Sonja`, password: `Sof1ija` },
    { name: `Artur`, username: `Arti`, password: `art4Forart` },
    { name: `Destin`, username: `Dest`, password: `Destination1non` },
    { name: `Osi`, username: `Isolda`, password: `Osi000Olda` },
    { name: `Lysia`, username: `Lyska`, password: `Ly5455sia` },
    { name: `Piola`, username: `Pola`, password: `Po1la2nd` }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
let temps = [
    { day: `Monday`, morningTemp: -5, dayTemp: 2, nightTemp: -15 },
    { day: `Tuesday`, morningTemp: -5, dayTemp: 2, nightTemp: -15 },
    { day: `Wednesday`, morningTemp: -5, dayTemp: 2, nightTemp: -15 },
    { day: `Thursday`, morningTemp: -5, dayTemp: 2, nightTemp: -15 },
    { day: `Friday`, morningTemp: -5, dayTemp: 2, nightTemp: -15 },
    { day: `Saturday`, morningTemp: -5, dayTemp: 2, nightTemp: -15 },
    { day: `Sunday`, morningTemp: -5, dayTemp: 2, nightTemp: -15 },
];
console.log(temps);
console.log(temps[0]);
