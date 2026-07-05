"use strict";
// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор
let booksFo = [{
        title: `Hamlet`, pageCount: 790, genre: [`Tragedy`, `Detective`],
        authors: [{ name: `Shekspeer`, age: 45 }, { name: `Viliam`, age: 23 }]
    },
    {
        title: `Sherlok`, pageCount: 820, genre: [`Detective`],
        authors: [{ name: `Mari`, age: 33 }, { name: `Q`, age: 48 }]
    },
    {
        title: `Hero`, pageCount: 210, genre: [`Fantasy`],
        authors: [{ name: `Marvel`, age: 28 }, { name: `Antonio`, age: 32 }, { name: `Dgo`, age: 56 }]
    }];
let biggest = 0;
let biggestTitle = '';
for (let i = 0; i < booksFo.length; i++) {
    if (booksFo[i].pageCount > biggest) {
        biggest = booksFo[i].pageCount;
        biggestTitle = booksFo[i].title;
    }
}
console.log(biggestTitle);
let mostGenres = booksFo[0];
for (let i = 0; i < booksFo.length; i++) {
    if (booksFo[i].genre.length > mostGenres.genre.length) {
        mostGenres = booksFo[i];
    }
}
console.log(mostGenres.title);
let longestTitle = booksFo[0];
for (let i = 0; i < booksFo.length; i++) {
    if (booksFo[i].title.length > longestTitle.title.length) {
        longestTitle = booksFo[i];
    }
}
console.log(longestTitle.title);
for (let i = 0; i < booksFo.length; i++) {
    if (booksFo[i].authors.length === 2) {
        console.log(booksFo[i]);
    }
}
for (let i = 0; i < booksFo.length; i++) {
    if (booksFo[i].authors.length === 3) {
        console.log(booksFo[i]);
    }
}
