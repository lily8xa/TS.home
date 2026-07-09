"use strict";
let objects = [];
for (let i = 0; i < 100; i++) {
    objects.push({ id: i + 1, name: 'ObjectSuper' });
}
let list = document.getElementById('list');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let currentPage = 0;
const itemsPerPage = 10;
function render() {
    if (list) {
        list.innerHTML = ``;
        let start = currentPage * itemsPerPage;
        let end = start + itemsPerPage;
        const itemsToShow = objects.slice(start, end);
        itemsToShow.forEach(object => {
            const li = document.createElement("li");
            li.innerText = `${object.id} ${object.name}`;
            if (list) {
                list.appendChild(li);
            }
        });
        prev.disabled = currentPage === 0;
        next.disabled = end >= objects.length;
    }
}
if (next) {
    next.addEventListener('click', () => {
        if ((currentPage + 1) * itemsPerPage < objects.length) {
            currentPage++;
            render();
        }
    });
}
if (prev) {
    prev.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            render();
        }
    });
}
render();
console.log(objects);
