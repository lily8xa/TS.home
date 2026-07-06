"use strict";
// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const input = document.getElementById('convert');
const result2 = document.getElementById('result');
if (input) {
    input.addEventListener('input', function () {
        if (result2) {
            const newResult = input;
            result2.innerText = +newResult.value / 2.2 + '' + 'Funt';
        }
    });
}
