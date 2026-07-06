// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбуваєтьс


const priseKey='prise'
const timeKey='lastUpdate'
const priseLS: string | null = localStorage.getItem(priseKey);
const lastTimeLS: string | null = localStorage.getItem(timeKey);

const now: number = Date.now();
const lastTime: number = lastTimeLS ? Number(lastTimeLS) : 0;
let prise: number = 0;

if (!priseLS) {
    prise = 100;
    // Числа обов'язково перетворюємо на рядок за допомогою .toString() або String()
    localStorage.setItem(priseKey, prise.toString());
    localStorage.setItem(timeKey, now.toString());
} else {
    prise = Number(priseLS);

    // Перевіряємо, чи минуло 10 секунд (10000 мс)
    if (lastTime && (now - lastTime >= 10000)) {
        prise += 10;
        localStorage.setItem(priseKey, prise.toString());
        localStorage.setItem(timeKey, now.toString());
    }
}

// 2. Виводимо на сторінку (теж перетворюємо число на рядок)
const numElement = document.getElementById('num');
if (numElement) {
    numElement.innerText = prise.toString();
}

// let prise:string|null=localStorage.getItem(priseKey);
// let lastTime:string|null=localStorage.getItem(timeKey);
// const now:number= Date.now();
// if(!prise) {
//     prise = 100;
//     localStorage.setItem(priseKey, prise);
//     localStorage.setItem(timeKey, now);}
// else{
//     prise= +prise;
//     if(lastTime && now-lastTime>=10000){
//         prise+=10;
//         localStorage.setItem(priseKey, prise);
//         localStorage.setItem(timeKey, now);
//     }
// }
// document.getElementById('num').innerText=prise;
