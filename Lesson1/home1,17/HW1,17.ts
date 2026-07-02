// #iz6emEsP2BA
//
// – є масив
//
type CourseType1={
    title:string,
    monthDuration:number,
}
type CourseType2={
    id:number,
    title:string,
    monthDuration:number,
}
const coursesAndDurationArray1:CourseType1[] = [

    {title: '‘JavaScript Complex’', monthDuration: 5},

    {title: '‘Java Complex’', monthDuration: 6},

    {title: '‘Python Complex’', monthDuration: 6},

    {title: '‘QA Complex’', monthDuration: 4},

    {title: '‘FullStack’', monthDuration: 7},

    {title: '‘Frontend’', monthDuration: 4}

];
//
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

console.log(coursesAndDurationArray1.map((course:CourseType1,index:number):CourseType2=> ({...course,id:index +1})));
