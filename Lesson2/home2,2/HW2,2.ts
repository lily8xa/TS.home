// #OPLI89c9G
//
// – Є масив:
//
//
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr5:string[]= ['Main','Products','About us','Contacts'];
let menu:HTMLUListElement=document.createElement('ul')
for(const item of arr5){
    const li:HTMLLIElement=document.createElement("li");
    li.innerText=item
    menu.appendChild(li)
}
document.body.append(menu)
