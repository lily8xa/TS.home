"use strict";
//@ts-ignore
let coursesArrayStudy13 = [
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
for (const course of coursesArrayStudy13) {
    const mainDiv = document.createElement('div');
    const name = document.createElement('h1');
    name.innerText = course.title;
    const timeDiv = document.createElement('div');
    timeDiv.classList.add('time');
    const mons = document.createElement('h2');
    mons.innerText = `${course.monthDuration}`;
    const hour = document.createElement('p');
    hour.innerText = `${course.hourDuration}`;
    timeDiv.append(mons, hour);
    const list = document.createElement('ul');
    for (const item of course.modules) {
        let li = document.createElement("li");
        li.innerText = item;
        list.append(li);
    }
    mainDiv.append(name, timeDiv, list);
    document.body.append(mainDiv);
}
