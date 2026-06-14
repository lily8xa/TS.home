// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.
//
//     b. заповнити його 50 непарними числами за допомоги циклу.
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

let arrOne:number[]=[]

for(let i=1; i<=50; i++){
    arrOne.push(i*2);
}
console.log(arrOne)

let arrTwo:number[]=[]
for(let i=0; i<50; i++){
    arrTwo.push(i*2+1);
}
console.log(arrTwo)


let arrThree:number[]=[]
for(let i=0; i<20; i++){
    arrThree.push(Math.floor(Math.random()*100));
}
console.log(arrThree)
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arrFour4:number[]=[]
for(let i=0; i<20; i++){
    arrFour4.push(Math.floor(Math.random()*1000))
    if(i>=8 && i<=732){    //- Тут також щось пішло не так
    }
}
console.log(arrFour4)
//
// 2. Вивести за допомогою console.log кожен третій елемент
for (let i=2;i<arrFour4.length; i+=3) {

    console.log(arrFour4[i])
}

//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
console.log(`Trete`)

for (let i=2;i<arrFour4.length; i+=3) {
    if (arrFour4[i] % 2 === 0)
    {

        console.log(arrFour4[i])
    }
}
//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
let arr5Five=[]
for (let i=2;i<arrFour4.length; i+=3) {
    if (arrFour4[i] % 2 === 0){
        arr5Five.push(arrFour4[i])}
}
console.log(arr5Five)
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним


//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

console.log(`Числа парні з правого боку`)
let arr6Six:number[]=[]
for(let i=0; i<30; i++){
    arr6Six.push(Math.floor(Math.random()*100));
}
for (let i = 0; i < arr6Six.length-1; i++ ) {
    if (arr6Six[i + 1] % 2 === 0) {
        console.log(arr6Six[i])
    }
}
console.log(`masuv`)
console.log(arr6Six)

//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//

let arrSeven:number[]=[100,250,50,168,120,345,188]
let sum:number=0;
for (let i=0; i< arrSeven.length; i++) {
    sum += arrSeven[i]

    let hek: number = sum / arrSeven.length;
    console.log(hek)
}
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//

let arrEight:number[]=[]
for(let i=0; i<10; i++){
    arrEight.push(Math.floor(Math.random()*1000))
}
console.log(arrEight)
let arrEightFive:number[]=[]
let num:number=0;
for (let i=0; i<arrEight.length; i++){
    num+=arrEight[i]*5;{
        arrEightFive.push(num)
    }

}
console.log(arrEightFive)
console.log(arrEight)

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
//
//
let arrToOll:(string | number | boolean ) []=[`great`,69,true,1,`The`,`Best`, 125,`Day`,96,false,`Impotent`,`Yoy-yoy`]
let arrNumber:number[]=[]

for(let i=0; i<arrToOll.length; i++) {
    let num=arrToOll[i]
    if (typeof num === `number`) {

        arrNumber.push(num);
        console.log(arrNumber)
    }
}
