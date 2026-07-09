"use strict";
let cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then((value) => value.json())
    .then((value) => {
    const carts = value.carts;
    console.log(carts);
    for (const cart of carts) {
        const div = document.createElement('div');
        div.classList.add('cart-container');
        const divWithInfo = document.createElement('div');
        divWithInfo.innerText = `Total: ${cart.total} totalProducts: ${cart.totalProducts} `;
        const ol = document.createElement('ol');
        for (const product of cart.products) {
            const li = document.createElement('li');
            const info = document.createElement('p');
            info.innerText = `id: ${product.id}  title: ${product.title} price: ${product.price} `;
            const img = document.createElement('img');
            img.src = product.thumbnail;
            li.append(info, img);
            ol.appendChild(li);
        }
        div.append(divWithInfo, ol);
        cartsDiv.appendChild(div);
    }
});
