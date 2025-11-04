// 1

let age = prompt('Який ваг вік?');
let message = (age < 12) ? 'Вітаю, Дитино!' :
    (age < 18) ? 'Вітаю  підліток' :
        (age < 60) ? 'Моє шанування дорослий' :
            (age < 100) ? 'Вітаю пенсіонер' :
                (age >= 100) ? 'Вітаю довгожителю' :
                    'некоректно введений вік';

alert(message);


// 2
let namber = prompt('Введіть будь-яке число від 0 до 9');
let nam = (namber == 0) ? ')' :
    (namber == 1) ? '!' :
        (namber == 2) ? '@' :
            (namber == 3) ? '#' :
                (namber == 4) ? '$' :
                    (namber == 5) ? '%' :
                        (namber == 6) ? '^' :
                            (namber == 7) ? '&' :
                                (namber == 8) ? '*' :
                                    (namber == 9) ? '(' :
                                        'некоректно введене число';

alert(nam);

// 3

let start = parseInt(prompt("Введіть початок діапазону:"));
let end = parseInt(prompt("Введіть кінець діапазону:"));

if (isNaN(start) || isNaN(end)) {
    alert("Будь ласка, введіть коректні числа!");
} else {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    alert(`Сума чисел від ${start} до ${end} дорівнює ${sum}`);
}





function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


let num1 = parseInt(prompt("Введіть перше число:"));
let num2 = parseInt(prompt("Введіть друге число:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Будь ласка, введіть коректні числа!");
} else {
    let result = gcd(num1, num2);
    alert(`Найбільший спільний дільник чисел ${num1} і ${num2} — ${result}`);
}

//  5

const number = parseInt(prompt("Введіть число:"));


if (isNaN(number)) {
    console.log("Будь ласка, введіть коректне число!");
} else {
    console.log(`Дільники числа ${number}:`);

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}
