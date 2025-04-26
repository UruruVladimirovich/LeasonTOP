// Задание 9: Поиск делителей
// Напишите программу, которая:
// Запрашивает у пользователя число.
// Выводит все делители этого числа (числа, на которые оно делится
// без остатка).

// let number = prompt("Введите число:")

// number = parseInt(number)

// for(let i = 1; i <= number; i++) {
//     if(number % i === 0) {
//         console.log(i)
//     }
// }




// Задание 10: Факториал числа
// Напишите программу, которая:
// Запрашивает у пользователя число.
// Вычисляет факториал этого числа (произведение всех чисел от 1 до
// этого числа) с помощью цикла while.

// let number = prompt("Введите число:")
// number = parseInt(number)

// let factorial =1
// let i = 1

// while (i <= number) {
//     factorial *= i++
// }

// console.log("Факториал числа " + number + " равен " + factorial)




// Конструкция switch/case.
// switch(x) {
//     case 'value1'       //    if (x === value1)
// }


// let a = 2 + 2
// switch(a) {
//     case 3:
//         alert('Маловато');
//         break
//     case 4:
//         alert('Вы правы');
//         break
//     case 5:
//         alert('Много');
//         break
//     default:
//         alert('Значение отсутствуют.')
// }


// Любое выражение может быть аргументом для switch/case.
// let a = '1'
// let b = 0

// switch(+a) {
//     case b + 1;
//         alert("Выполнится т.к. значение а+ будет 1, что в точности равно b+1")
//         break;
//     default:
//         alert("Это не выполнится")

// }


// Группировка "case"

// let number = prompt("Введите число")

// number = parseInt(number)

// for(let i = 1; i<= number; i++) {
//     if (number % i === 0) {
//         console.log(i)
//     }
// }

// let number = prompt("Введите число:")
// number = parseInt(number)
// console.log(number)

// let factorial = 1
// let i = 1

// while (i <= number) {
//     factorial *= i
//     i++
// }

// console.log("Факториал числа" + number + "равен" + factorial)


// Конструкция switch/case
// switch(x) {
//     case 'value1' // if (x === value1)
// }

// let a = 2 + 2
// switch(a) {
//     case 4:
//         alert('Маловато');
        
//     case 4:
//         alert('Вы правы');
//         break
//     case 5:
//         alert("Много")
//         break
//     default:
//         alert("Значение отсуствуют")
// }


// Любое выражение может быть аргументов для switch/case.
// let a = '1'
// let b = 0

// switch(+a) {
//     case b + 1:
//         alert("Выполнится т.к значением а+ будет 1, что в точности равно b+1")
//         break;
//     default:
//         alert("Это не выполнится")

    
// }

// Группировка "case"
// let a = 3

// switch (a) {
//     case 4:
//         alert("Правильно");
//         break;
//     case 3:
//     case 5:
//         alert("Не правильно. Иди в школу.");
//         break;

//     default:
//         alert("Результат выглядит странно.")
// }



// let a = "Academy Top"

// switch (a) {
//     case "Academy":
//         alert("ERROR")
//         break;
//     case "Academy Top":
//         alert("Yes")
//         break;
//     default:
//         alert("Ошибка значения.")
// }



// let arg = prompt("Введите значения")
// arg = Number(arg)
// switch (arg) {
//     case '0':
//     case '1':
//         alert("Один или ноль");
//         break;
//     case '2':
//         alert('Два');
//         break;
    
//     case 3:
//         alert("Никогда не выполнится")
//         break;
//     default:
//         alert("error.")
// }


// function nameFunction() { // название и параметры функции
//     // тело функции
//     let mylet = 50
//     // alert(mylet)
//     alert("Hello World")
// }
// nameFunction();

// mylet = 10
// alert(mylet)
// mylet = 0
// alert(mylet)

// function printWord(value = "Значение по умолчанию.") {
//     alert(value)
//     alert(value1)
// }

// printWord();

function add(a,b) {
    return a + b
}
alert(add(2,2))