// #Kx1xgoKy8
//
// – Є масив
//
type ArrCourseType={
    title: string,
    monthDuration: number,
}
let coursesAndDurationArray12:ArrCourseType[] = [

    {title: '‘JavaScript Complex’', monthDuration: 5},

    {title: '‘Java Complex’', monthDuration: 6},

    {title: '‘Python Complex’', monthDuration: 6},

    {title: '‘QA Complex’', monthDuration: 4},

    {title: '‘FullStack’', monthDuration: 7},

    {title: '‘Frontend’', monthDuration: 4}

];

//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.

for(const course of coursesAndDurationArray12) {
    const newBlock:HTMLDivElement = document.createElement('div')
    newBlock.classList.add('item')
    const h1:HTMLHeadingElement= document.createElement('h1')
    h1.innerText=course.title
    h1.classList.add('heading')

    const p:HTMLParagraphElement= document.createElement('p')
    p.innerText=` ${course.monthDuration}`
    p.classList.add('description')
    newBlock.append(h1,p)
    document.body.appendChild(newBlock)
}
