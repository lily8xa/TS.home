// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)


class User{    constructor(public id:number, public name:string, public surname:string,  public email:string, public phone:string
){}
}
//@ts-ignore
const users13:User[] = [
    new User(1,'Olga','King','OlGa@taka.com','+30665285475'),
    new User(3,'Vasuliu','Baranov', 'Baran@.gmail.com', '+30582654147'),
    new User(2,'Yriy','Xrush','Xrust@hom.com','+30695245685'),
    new User(4,'Mark','Super','MaSu@per.ua','+380669523696'),
    new User(5, 'Lilya','Sumskiua','Liyly@mar.ua','+380255699654'),
    new User(6,'Taras','Zaets','Fast@book.com','+30665285475'),
    new User(8,'Felix','Redksa','Fest@red.com','+302545885214'),
    new User(7,'Vlada','Ogen','Vl@Og.ua','+306525852445'),
    new User(9,'Svitlana','Rogka','Sveta@nu.ua','+30665285475'),
    new User(10,'Ivanna','Farba','Iv@faaa.ua','+380352256963')
];
console.log(users13);
console.log(users13[0].phone);
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
const usersFiltered:User[]=users13.filter(user=>user.id %2===0);
console.log(usersFiltered);
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let userSorted:User[]=users13.sort((a,b):number=> a.id-b.id);
console.log(userSorted);
  //  – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

class Product {
    constructor(public id: number, public name: string, public prise:number, public Quantity:number,) {}
}
class Client{
constructor(public id:number,public name:string,public surname:string,public email:string,public phone:string,public order:Product[]){}
}

// function Product(id,name,prise,Quantity){
//     this.id=id;
//     this.name=name;
//     this.prise=prise;
//     this.Quantity=Quantity;
// }
let clients=[
    new Client(1,'Olga','King','OlGa@taka.com','+30665285475',
        [new Product(1,'Mask',552,3),new Product(2,'Towel',85,5)]),
    new Client(2,'Yriy','Xrush','Xrust@hom.com','+30695245685',
        [new Product(1,'Olio', 25,10),new Product(2,'Pillow',320,2),new Product(3,'Soup',12,6)]),
    new Client(3,'Vasuliu','Baranov', 'Baran@.gmail.com', '+30582654147',[
        new Product(1,'Bad',5820,1)
    ]),
    new Client(4,'Mark','Super','MaSu@per.ua','+380669523696',[
        new Product(1,'Tomato',150,10)
    ]),
    new Client(5, 'Lilya','Sumskiua','Liyly@mar.ua','+380255699654', [
        new Product(1,'Earrings352',12580,1,), new Product(2,'Necklace',85000,1),new Product(3,'Ring1222',2522,1)
    ]),
    new Client(6,'Taras','Zaets','Fast@book.com','+30665285475',[
        new Product(1,'Laptop',120000,1)
    ]),
    new Client(7,'Vlada','Ogen','Vl@Og.ua','+306525852445',[
        new Product(1,'Mouse12',120,1), new Product(2,'WebKam45',470,1), new Product(3,'Pen',12,2), new Product(4,'Pensill',6,5)
    ]),
    new Client(8,'Felix','Redksa','Fest@red.com','+302545885214',[new Product(1,'jin',850,2), new Product(2,'Whiskey',2500,2)]),
    new Client(9,'Svitlana','Rogka','Sveta@nu.ua','+30665285475',[
        new Product(1,'Fridge',45000,1,),new Product(2,'Kitchen',200001,1)
    ]),
    new Client(10,'Ivanna','Farba','Iv@faaa.ua','+380352256963',[
        new Product(1,'Burger',65,6)
    ])
]
console.log(clients);

// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

let clientsSorts:Client[]=clients.sort((a,b)=> a.order.length-b.order.length)
console.log(clientsSorts);
