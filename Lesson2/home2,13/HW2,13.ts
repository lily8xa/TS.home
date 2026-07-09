// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
interface TovI {
    discountPercentage: number
    discountedTotal: number
    id: number
    title: string,
    price: number,
    quantity: number,
    thumbnail: string,
    total: number
}

interface ProductI {
    discountedTotal: number
    id: number
    products:TovI[]
    total: number
    totalProducts: number
    totalQuantity: number
    userId: number
}
interface CartsResponse {
    carts: ProductI[]; // масив кошиків
    total: number;
    skip: number;
    limit: number;
}
let cartsDiv = document.getElementById('carts') as HTMLDivElement;
fetch('https://dummyjson.com/carts')
    .then((value: Response):Promise<any> => value.json())
    .then((value: CartsResponse):void => {
        const carts:ProductI[] = value.carts;
        console.log(carts);
        for (const cart of value.carts) {
            const div: HTMLDivElement = document.createElement('div');
            div.classList.add('cart-container');
            const divWithInfo: HTMLDivElement = document.createElement('div');
            divWithInfo.innerText = `Total: ${cart.total} totalProducts: ${cart.totalProducts} `;

            const ol: HTMLOListElement = document.createElement('ol');
            for (const product of cart.products) {
                const li: HTMLLIElement = document.createElement('li');
                const info: HTMLParagraphElement = document.createElement('p');
                info.innerText = `id: ${product.id}  title: ${product.title} price: ${product.price} `;
                const img: HTMLImageElement = document.createElement('img');
                img.src = product.thumbnail;
                li.append(info, img);
                ol.appendChild(li)
            }

            div.append(divWithInfo, ol)
            cartsDiv.appendChild(div);
        }

    });
