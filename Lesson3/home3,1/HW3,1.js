"use strict";
function foobar(key) {
    fetch(key)
        .then(value => value.json())
        .then((value) => {
        const { recipes } = value;
        console.log(recipes);
    });
}
foobar('https://dummyjson.com/recipes');
// function foobar<Dish2Type>(key:string):void{
//     fetch('https://dummyjson.com/recipes')
//         .then(value => value.json())
//         .then((dish <Dish2Type>)=>{
//             const {dish}=value,
//             console.log(dish)
//     }
//         )}
// foobar('dinner')
