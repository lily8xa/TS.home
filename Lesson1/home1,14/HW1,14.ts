// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
class Car {
    model: string;
    manufacturer: string;
    year: number;
    maxSpeed: number;
    engineCapacity: number;
    // drive?:()=> string
    driver?:[{id:number,name:string}]

//@ts-ignore
    constructor( model: string,manufacturer: string, year: number, maxSpeed: number, engineCapacity: number,drive?:string) {
        this.model = model
        this.manufacturer = manufacturer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity
    }

       drive():string {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
            return `Їдемо зі швидкістю ${this.maxSpeed} на годину`
    }

        info ():void{
            for (const key in this) {
                console.log(key,this[key]);
            }
        }
        speedUp (speedUp:number):void {
            if (speedUp > 0) {
                this.maxSpeed = this.maxSpeed + speedUp
            }
        }
       changeYear(newYear:number) :void{
            if (newYear > this.year) this.year = newYear
        }

   addDriver (driver:[{id:number,name:string}]):void {
            if (driver) this.driver = driver
        }
    }

let cars:Car[]=[
    new Car('Opel','German',2014,250,2.5),
    new Car('Nissan','Poland',2022,170,1.9),
    new Car('Volkswagen','German',2008,270,3.0),
    new Car('Citroen','Austria',2012,320,2.9),
    new Car('Reno','German',2024,350,2.7),
    new Car('Pegot','German',2004,230,1.9),
    new Car('Volvo','UK',2021,420,4.0),
    new Car('Ford','USA',2025,420,3.5),
    new Car('AGI','China',2024,480,2.9),

]
console.log(cars)
for(let car of cars){
    car.drive()
    car.info()
    car.speedUp(100)
    car.changeYear(2026)
    car.addDriver([{id:1,name:'Vladislav'}])

}



console.log(cars)
