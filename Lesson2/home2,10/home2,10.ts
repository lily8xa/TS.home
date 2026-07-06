// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const table: HTMLElement | null = document.getElementById('table');
const formTable:HTMLFormElement|null = document.getElementById('tableForm') as HTMLFormElement ;
if(formTable) {
    formTable.addEventListener("submit", function (ev: Event): void {
        ev.preventDefault();
        if (table) {
            table.innerText = '';
            const formData = new FormData(formTable);

            const linesValue: number = Number(formData.get('lines'));
            const cellValue: number = Number(formData.get('cells'));
            const dataValue: string = String(formData.get('data') || '');
            console.log(linesValue, cellValue, dataValue);
            console.log(formTable)
            for (let i = 0; i < linesValue; i++) {
                const tr:HTMLTableRowElement = document.createElement('tr');
                for (let j = 0; j < cellValue; j++) {
                    const td:HTMLTableCellElement = document.createElement('td');
                    td.innerText = dataValue;
                    tr.appendChild(td);
                }
                table.appendChild(tr);

            }
        }
    })
}
