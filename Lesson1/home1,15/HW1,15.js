"use strict";
// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let cinderellas = [
    new Cinderella('Sofi', 22, 36),
    new Cinderella('Freda', 25, 33),
    new Cinderella('Silva', 32, 44),
    new Cinderella('Silvia', 42, 38),
    new Cinderella('Svitlana', 18, 35),
    new Cinderella('Olga', 40, 34),
    new Cinderella('Klavdia', 36, 37),
    new Cinderella('Vanessa', 42, 41),
    new Cinderella('Valentina', 20, 39),
    new Cinderella('Vala', 28, 40),
];
let princes = [
    new Prince('Stepan', 22, 34),
    new Prince('Fred', 25, 35),
    new Prince('Slava', 32, 36),
    new Prince('Ivan', 42, 37),
    new Prince('Dmitro', 42, 38),
    new Prince('Stas', 42, 39),
    new Prince('Kolja', 42, 40),
    new Prince('Vasil', 42, 44),
    new Prince('Viktor', 42, 41),
    new Prince('Hektor', 42, 32),
];
for (const cinderella of cinderellas) {
    for (const prince of princes) {
        if (cinderella.footSize === prince.shoeSize) {
            console.log(cinderella.name, prince.name);
        }
    }
}
console.log(cinderellas.find(value => value.name === 'Vanessa'));
