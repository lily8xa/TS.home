// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
type DishType={
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
interface IDish {
    recipes: DishType[];
    total: number;
    skip: number;
    limit: number;
}
let mainRecept=document.getElementById('main-recept') as HTMLDivElement
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then((value:IDish):void=>{
        const {recipes}=value;
        console.log(recipes);
        for(const recept of recipes){
            const div:HTMLDivElement=document.createElement('div');
            div.classList.add('recept-container');
            const nameDish:HTMLDivElement=document.createElement('div');
            nameDish.innerText=`Dish: ${recept.name} Calories: ${recept.caloriesPerServing} Time: ${recept.cookTimeMinutes}`

            let img:HTMLImageElement=document.createElement('img');
            img.src=recept.image;

            const ul:HTMLUListElement=document.createElement('ul');
            ul.innerText=`Ingredients`
            for (const ing of recept.ingredients){
                const li:HTMLLIElement=document.createElement('li');
                li.innerText=`${ing}`;
                ul.append(li)
            }
            div.append(nameDish,img,ul);
            mainRecept.appendChild(div);
        }
    });
