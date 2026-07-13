// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь
type Dish1Type={
    caloriesPerServing:number
    cookTimeMinutes:number
    cuisine:string
    difficulty:string
    id:number
    image:string
    ingredients:string[]
    instructions:string[]
    mealType:string[]
    name:string
    prepTimeMinutes:number
    rating:number
    reviewCount:number
    servings:number
    tags:string[]
    userId:number
}
type Dish2Type = {
    recipes: Dish1Type[];
    total: number;
    skip: number;
    limit: number;
}
function foobar(key:string) {
    fetch(key)
        .then(value => value.json())
        .then((value:Dish2Type):void=>{
            const {recipes}=value;
            console.log(recipes);
        })
}
foobar('https://dummyjson.com/recipes')

// function foobar<Dish2Type>(key:string):void{
//     fetch('https://dummyjson.com/recipes')
//         .then(value => value.json())
//         .then((dish <Dish2Type>)=>{
//             const {dish}=value,
//             console.log(dish)
//     }
//         )}
// foobar('dinner')
