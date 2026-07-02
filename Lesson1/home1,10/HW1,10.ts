


// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій !!!
//
//
//
//     #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

let result=(a:number,b:number):number=> a*b;
console.log(result(3,5));

//
// #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
//
let  RoundSquare1=(radius:number):number=> Math.PI*radius*radius;
console.log(RoundSquare1(23));
// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
let CelinderSquare1=(height:number,rud:number):number=> 2*Math.PI*rud*height;
console.log(CelinderSquare1(2,3));
//
// #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
//
let Name=(usersName:string[]):void => usersName.forEach(name => console.log(name));
Name(['Anna','Vika','Oleh','Dmytro']);

// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
//
// #hOL6126
let addPage1=(page:string):void=>{ (document.write((`<p>${page}</p>`)))};
addPage1(`Hello`)
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
let textLi1=(Text:string):void=>{document.write(`<ul>
<li>${Text}</li>
<li>${Text}</li>
<li>${Text}</li>
</ul>`

)}
textLi1(`Text on`)
// #0Kxco1edSN
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
let liText=(text:string,number:number):void=> {document.write(`<ul>`)
    for (let i=0; i<number; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
liText('Hello Vorld',5)
// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
let ItemArr=(Array:any):void=>{document.write(`<ul>`)
    for(let item of Array){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}
ItemArr([12,`col`,12,true,45688,false,`Gorges`])
// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
//
interface IUs{
    id:number;
    name:string;
    age:number;
}
let UserBlock=(UsersArray:IUs[]):void=>UsersArray.forEach(each=>document.write(`<div>${each.id} ${each.name} ${each.age}</div>`))

UserBlock(
    [
        {id:1, name:"John",age:19},
        {id:2, name:"January",age:21},
        {id:3, name:"February",age:18},
        {id:4, name:"March",age:26},
        {id:5, name:"April",age:35},
    ]
)

//     #pghbnSB
//
// – створити функцію, яка повертає найменше число з масиву
let numbers=(numbersArray:number[]):void=> {

    let min:number = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++) {
        let number = numbersArray[i];
        if (number < min) {
            min = number
        }
    }
    console.log(min);
}

numbers([12,-22,88,-12,-36,]);

//
// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum1=(newNumber:number[]):void=>{ let result:number=0;
    for(let number of newNumber){
        result =result+number;
    }
    console.log(result);
}
sum1([1,2,10])


//
// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
let svap1=(Arr:number[],i1:number,i2:number):void=>{
    let temp=Arr[i1];
    Arr[i1]=Arr[i2];
    Arr[i2]=temp;
    console.log(Arr);}

svap1([11,22,33,44],3,2)
// #mkGDenYnNjn
//
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
let exchange1=(sumUAH:number,currencyValues:{currency:string,value:number} [],exchangeCurrency:string):void=> {
    for (let i = 0; i < currencyValues.length; i++) {

        if (currencyValues[i].currency === exchangeCurrency) {

            console.log(sumUAH / currencyValues[i].value)
        }
    }
}
exchange1(10000,[{currency:'USD',value:25},{currency:'EUR',value:42},{currency: 'GBP',value: 75}],'GBP')
