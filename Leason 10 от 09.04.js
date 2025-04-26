//  Типы данных

//  Методы примитивов

// Значения примитивного типа
// 1.string, number, boolen, symbol, null, undefined, bigint

// null,undefined - не имеют методов

// let object = {
//     hello: function() {
//         alert("Это функция в обьекте")
//     }
// }


// let city = "Sochi"
// console.log(city.toUpperCase())  // Преоброзовал Sochi -> SOCHI
// // Метод toUpperCase() -переводит все буквы в верхний регистр


// let number = 1.89996
// console.log(number.toFixed(4)) // Округлил последние 4 цыфры - 1,90000

// let number = 1.9
// console.log(number.toFixed()) // Стало 2




//NUMBER
// Числа в JS хранятся в 64-битном формате IEEE-754, которой назыают числа с плавающей точкой двойной точности.
// BigInt - эти числа позволяют работать с целыми числами произвольной длины.


// let million = 1000000
// let mill = 1_000_000
// // Синтаксический сахар - он позволяет делать код более четабельным .
// let billion = 1e9   //1 миллиард  2е9 2 миллиарда

// let mcs = 0.000001
// let ms = 1e-6    // 1е-6 = 0,000001   1е-1 = 0,1




// // Шестандцатиричные цыфры
// console.log(0xFF)  //2254
// // есть специальный таблицы




// let number = 225
// console.log(number.toString())
//  Метод возвращает в строковое представление чисел в системе исчесления base .
//  Base
//  base=16 - для Шестандцатиричного представления цвета, кодировки, символов.
//  Цыфры 0-9, A-F
//  base -2 - обычно используется для отладки побитовых операций (0/1)
//  base = 36 - максимамльный режим, цыфры могут быть 0-9, A-Z (латинский алфавит)


//  Округление.
// let value = 5.6
// console.log(Math.floor(value)) //округляет в меньшую сторону
// console.log(Math.ceil(value))  //округляет в большую сторону
// console.log(Math.round(value)) //просто округляет 
// console.log(Math.trunc(value)) //удаляяет дробную часть



// //  Метод toFixed - округляет число до n знака после запятой и возвращает строковое представление результата.
// console.log(typeof(value.toFixed(1)))  // string   (typeof  проверили)

// alert(parseInt("500px"))
// alert(parseFloat("500.5px"))


// alert(Math.random()) //формирует случайные значения в диапазоне от 0 до 1
// alert(Math.random() * (100 - 0) + 0)
// Math.random() * (max - min) + min

// alert(Math.pow(2,4)) // 2 возводит в степень 4



// //  Строки
// let word = 'Hello'
// alert(Ilove world ${word})

// // Спецсимволы.
// alert(I LOVE WORLD\n ${word})
// // \n - перевод строки(Enter)

// //  Изменение регистра.
// alert(word.toUpperCase())   //  Метод toUpperCase() в JavaScript преобразует все символы строки в верхний регистр (заглавные буквы). Он не изменяет исходную строку, а возвращает новую.
// alert(word.toLowerCase())  // Метод toLowerCase() в JavaScript преобразует все символы строки в нижний регистр (строчные буквы). Как и toUpperCase(), он не изменяет исходную строку, а возвращает новую.


// //  Массивы  Array
// let arr = new Array()
// let arr1 = []

// let arr1 = [1,2,3,4,5,6,7,8,9,10,"Яблоко красное","Яблоко зелёное","Гнилое яблоко"]
// console.log(arr1[12])             //  Гнилое яблоко
// console.log(arr1[arr1.length-1])  //  Гнилое яблоко
// console.log(arr1.at(-2))          //  Яблоко зелёное
// // console.log(arr1)      // 1,2,3,4,5,6,7,8,9,10,"Яблоко красное","Яблоко зелёное","Гнилое яблоко"
// arr1[12] = "Спелое яблоко"
// arr1[13] = "Моё яблоко"
// alert(arr1.length) // 14
// //  В масиве могут хранится элементы любого типа данных.


//  Методы массивов

// pop/push, shift, unshift - Методы масивов
//Коллекция.

// let array = ["Egor, Arseniy, Yaroslav, Marta"]
// array.push("Regina")
// console.log(array)  //  (2) ['Egor, Arseniy, Yaroslav, Marta', 'Regina']

// let lastvalue = array.pop()
// console.log(lastvalue)  //  Regina
// console.log(array)   //  ['Egor, Arseniy, Yaroslav, Marta']

// array.unshift("Ilya")
// console.log(array)    //  (2) ['Ilya', 'Egor, Arseniy, Yaroslav, Marta']
// let myFirsStudent = array.shift()



// let array = ["Egor, Arseniy, Yaroslav, Marta"]
// let MyStudentsInAcademy = array
// // alert(array === MyStudentsInAcademy)  //  true
// MyStudentsInAcademy.push("Robert")
// console.log(MyStudentsInAcademy)    //  (2) ['Egor, Arseniy, Yaroslav, Marta', 'Robert']




// let array = ["Egor", "Arseniy", "Yaroslav", "Marta"]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// console.log("Другой МАССИВ")
// let student = ["Nikita", "Misha", "Maga", "Dima", "Sava"]
// for (stud of student) {
//     console.log(stud)
// }

// for (let value in student) {
//     console.log(student[value])
// }


// let array = new Array(2)  //будет хранить 3(начинается с нуля)


// // Многомерные массивы
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix[1][1])  //  5


// // Задача
// // Давайте произведём 5 операций с массивом.

// // Создайте массив styles с элементами «Джаз» и «Блюз».
// // Добавьте «Рок-н-ролл» в конец.
// // Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// // Удалите первый элемент массива и покажите его.
// // Вставьте Рэп и Регги в начало массива.
 
// // Джаз, Блюз
// // Джаз, Блюз, Рок-н-ролл
// // Джаз, Классика, Рок-н-ролл
// // Классика, Рок-н-ролл
// // Рэп, Регги, Классика, Рок-н-ролл

// let styles = ["Джаз", "Блюз"]
// console.log(styles)
// styles.push("Рок-н-ролл")
// console.log(styles)
// styles[1] = "Классика"
// console.log(styles)
// styles.shift()
// console.log(styles)
// alert( styles.shift() )   // Удалите первый элемент массива и покажите его.
// styles.unshift("Классика")  
// styles.unshift("Рэп", "Регги")
// console.log(styles)





// // Задача
// // Напишите функцию sumInput(), которая:

// // Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// // Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// // Подсчитывает и возвращает сумму элементов массива.
// // P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//     let array = [];

//     while(true) {
//         let i = prompt("Введите число");
//         if (i === "")break; 
//         array.push(+i)
//     }
//     let sum = 0;
//     for (let number of array) {
//         sum += number
//     }
//     return sum
// }

// alert(sumInput)



// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("Введите число", 0);
  
//       // Прекращаем ввод?
//       if (value === ""  value === null  !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );