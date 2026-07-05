// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
type StudyType={
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules:string[]
}
//@ts-ignore
let coursesArrayStudy13:StudyType[] = [
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

for (const course of coursesArrayStudy13){
    const mainDiv:HTMLDivElement = document.createElement('div');

    const name:HTMLHeadingElement=document.createElement('h1');
    name.innerText=course.title

    const timeDiv:HTMLDivElement=document.createElement('div')
    timeDiv.classList.add('time')
    const mons:HTMLHeadingElement=document.createElement('h2');
    mons.innerText= `${course.monthDuration}`

    const hour:HTMLParagraphElement=document.createElement('p');
    hour.innerText=`${course.hourDuration}`
    timeDiv.append(mons,hour)


    const list:HTMLUListElement=document.createElement('ul');
    for(const item of course.modules){
        let li:HTMLLIElement=document.createElement("li");
        li.innerText=item;
        list.append(li)
    }
    mainDiv.append(name,timeDiv,list)

    document.body.append(mainDiv)




}
