// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

class Cinderella1{
    name: string;
    age: number;
    footSize
    constructor(name:string,age:number,footSize:number) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}



let girls: Cinderella1[]=[
    new Cinderella1('Sofi',22,36),
    new Cinderella1('Freda',25,33),
    new Cinderella1('Silva',32,44),
    new Cinderella1('Silvia',42,38),
    new Cinderella1('Svitlana',18,35),
    new Cinderella1('Olga',40,34),
    new Cinderella1('Klavdia',36,37),
    new Cinderella1('Vanessa',42,41),
    new Cinderella1('Valentina', 20,39),
    new Cinderella1('Vala',28,40),
]


girls.forEach((item:Cinderella1,index:number):void=>{console.log(item,index)})

const longWords=girls.filter(girls => girls.name.length > 6)
console.log(longWords)
