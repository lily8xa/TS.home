"use strict";
let mainRecept = document.getElementById('main-recept');
fetch('https://dummyjson.com/recipes')
    .then((value) => value.json())
    .then((value) => {
    const { recipes } = value;
    console.log(recipes);
    for (const recept of recipes) {
        const div = document.createElement('div');
        div.classList.add('recept-container');
        const nameDish = document.createElement('div');
        nameDish.innerText = `Dish: ${recept.name} Calories: ${recept.caloriesPerServing} Time: ${recept.cookTimeMinutes}`;
        let img = document.createElement('img');
        img.src = recept.image;
        const ul = document.createElement('ul');
        ul.innerText = `Ingredients`;
        for (const ing of recept.ingredients) {
            const li = document.createElement('li');
            li.innerText = `${ing}`;
            ul.append(li);
        }
        div.append(nameDish, img, ul);
        mainRecept.appendChild(div);
    }
});
