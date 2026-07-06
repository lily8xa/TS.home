// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrName: string, objToAdd: {}): void {
    const lsItem: string | null = localStorage.getItem(arrName);

    if (lsItem) {


        const array: any = JSON.parse(lsItem);
        if (typeof objToAdd === 'object') {
            array.push(objToAdd);
        }

        localStorage.setItem(arrName, JSON.stringify(array));
    }
    if (lsItem === null || !lsItem) {
       console.log('There is no initial storage');
    }
}

addToLocalStorage('sessionsList', {})
