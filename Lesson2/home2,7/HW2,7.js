"use strict";
// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let newNumber:number=+localStorage.getItem('number')
// if(newNumber){
//
//
// newNumber+=1;
// localStorage.setItem('number',newNumber);
// document.getElementById('target').innerText=newNumber;
// }
// 1. Отримуємо рядок з localStorage
const storedValue = localStorage.getItem('number');
// 2. Якщо значення є — парсимо в число, якщо немає — беремо 0
let newNumber = storedValue ? +storedValue : 0;
// 3. Збільшуємо число на 1 при кожному перезавантаженні сторінки
newNumber += 1;
// 4. Зберігаємо назад (обов'язково перетворюємо число на рядок за допомогою String)
localStorage.setItem('number', `${newNumber}`);
// 5. Безпечно виводимо значення в HTML-елемент, перевіривши його на null
const targetElement = document.getElementById('target');
if (targetElement) {
    targetElement.innerText = `${newNumber}+`;
}
