// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів
type ObjectType = {
    id: number,
    name: string,
}

let objects: ObjectType[] = [];
for (let i = 0; i < 100; i++) {
    objects.push({id: i + 1, name: 'ObjectSuper'})
}
let list: HTMLElement | null = document.getElementById('list');
let next  = document.getElementById('next') as HTMLButtonElement;
let prev = document.getElementById('prev') as HTMLButtonElement;

let currentPage: number = 0;
const itemsPerPage = 10;

function render() {
    if (list) {


        list.innerHTML = ``;

        let start: number = currentPage * itemsPerPage;
        let end: number = start + itemsPerPage;
        const itemsToShow: ObjectType[] = objects.slice(start, end);
        itemsToShow.forEach(object => {
            const li: HTMLLIElement = document.createElement("li");
            li.innerText = `${object.id} ${object.name}`
            if (list) {
                list.appendChild(li);
            }
        })

        prev.disabled = currentPage === 0;

        next.disabled = end >= objects.length;

    }
}

if(next){
    next.addEventListener('click', () => {
        if ((currentPage + 1) * itemsPerPage < objects.length) {
            currentPage++;
            render();
        }
    })
}
if(prev){
    prev.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            render();

        }
    })
}
render();

console.log(objects)
