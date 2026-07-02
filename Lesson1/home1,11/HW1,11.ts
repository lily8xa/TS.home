

// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘’
//
// ‘’
//
// ‘’
const a1:string='hello world'
const b1:string='lorem ipsum'
const c1:string='javascript is cool'
console.log(a1.length,b1.length,c1.length);
let world1:string[]=[a1,b1,c1];
for (let item of world1){
    console.log(item.length);
}

// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
const aV:string='hello world'
const bV:string='lorem ipsum'
const cV:string='javascript is cool'
console.log(aV.toUpperCase(),bV.toUpperCase(),cV.toUpperCase());
let upper:string[]=[aV,bV,cV];
for (let item of upper){
    console.log(item.toUpperCase());
}
function upp(string:string):string{
    return string.toUpperCase()
}
console.log('upper')
console.log(upp(aV));
console.log(upp(bV));
console.log(upp(cV));

// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘’, ‘’, ‘’

const aL='HELLO WORLD'
const bL='LOREM IPSUM'
const cL='JAVASCRIPT IS COOL'
function lov(lover:string):string{
    return lover.toLowerCase()
}
console.log(lov(aL))
console.log(lov(bL))
console.log(lov(cL))

// – Є “брудна” стрінга let str = ‘‘ . Почистити її від зайвих пробілів.
const dir:string=' dirty string   '
const clen:string=dir.trim()
console.log(dir)
console.log(clen)
console.log(dir.length)
console.log(clen.length)

// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let poems='Ревуть воли як ясла повні'
function stringToArray(poem:string):string[]{
    return poem.split(' ');
}


console.log(stringToArray(poems));

function stringToString(poems:string):string[]{
    if (poems){
        const split1:string[] = poems.split(' ');
        return split1;
    }
    return [' ']

}
console.log(stringToString(poems))
// – є масив чисел  . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.



let arrNam:number[]=[10,8,-7,55,987,-1011,0,1050,0]
let numberString:string[]=arrNam.map(arrNam=>arrNam +' ')
console.log(numberString)

// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
let nums:number[] = [11,21,3];
let ascending:number[]=nums.sort((n1:number,n2:number):number=> n1-n2)
console.log(ascending)
let des:number[]=nums.sort((n1:number,n2:number):number=> n2-n1)
console.log(des)
//
// — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
type CourseType={
    title: string,
    monthDuration: number
}
let coursesAndDurationArray:CourseType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title:' Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];
type CourseMapType={
    id:number
    title: string,
    monthDuration: number
}
const map1:CourseMapType[]=coursesAndDurationArray
    .sort((a, b):number => b.monthDuration - a.monthDuration)
    .filter(value=>value.monthDuration > 5)
    .map((value,index):CourseMapType=>({...value,id:index+1}))
console.log(map1)

// взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
// написати пошук всіх об’єктів, в яких в modules є docker
interface ICourse{
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules:string[]
}
let coursesArray:ICourse[]=[
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course=>course.modules.includes('sass')))
console.log(coursesArray.filter(course=>course.modules.includes('docker')))

