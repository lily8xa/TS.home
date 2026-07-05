"use strict";
// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
const button = document.getElementsByTagName("button")[0];
button.onclick = function () {
    const text = document.getElementById("Text");
    if (text) {
        text.style.display = "none";
    }
};
// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
const buttonAge = document.getElementsByTagName("button")[1];
buttonAge.onclick = function (ev) {
    ev.preventDefault();
    const inputAge = document.getElementById("age");
    if (inputAge) {
        const numAge = +inputAge.value;
        if (numAge < 18) {
            const h1 = document.createElement('h1');
            h1.innerText = "You are still too young";
            document.body.appendChild(h1);
        }
    }
};
// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
const formCreate = document.getElementById('create');
const info = document.getElementById("result");
if (formCreate) {
    formCreate.addEventListener('submit', function (ev) {
        ev.preventDefault();
        const nameValue = document.getElementsByName("name")[0];
        const nameValueInfo = nameValue.value;
        const surnameValue = document.getElementsByName("surname")[0];
        const surnameValueInfo = surnameValue.value;
        const ageValue = document.getElementsByName("age")[0];
        const ageValueInfo = +ageValue.value;
        if (info) {
            info.innerText = `${nameValueInfo}` + ' ' + `${surnameValueInfo}` + ' ' + `${ageValueInfo}`;
        }
    });
}
console.log(formCreate);
