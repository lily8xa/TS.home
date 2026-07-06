// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


const input: HTMLElement | null = document.getElementById('convert');
const result2: HTMLElement | null = document.getElementById('result');
if(input) {
    input.addEventListener('input', function () {
        if(result2) {
            const newResult=input as HTMLInputElement;
            result2.innerText = +newResult.value / 2.2 + '' + 'Funt'
        }

    })
}

