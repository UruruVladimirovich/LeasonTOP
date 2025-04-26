// Создать простой список дел, где пользователь может:
// Добавлять задачи (через prompt).
// Выводить список всех задач.
// Удалять задачи по номеру.
// ( используя переменные,объекты и условную конструкцию if else )


// let list = {}
// let registr = +prompt("1 -Добавить задачу. 2 - Удалить. 3 - Посмотреть список дел.")

// if (registr === 1) {
//     let req_key = +prompt("Введите номер задачи")
//     let req_value = prompt("Напишите задачу")
//     list[req_key] = req_value
//     console.log(list)
// }   else if (registr === 2) {
//     let req_delete = +prompt("Введите номер для удаления")
//     delete list[req_delete]
//     console.log(list)
// }   else if (registr === 3) {
//     console.log(list)
// }



// let car = {
//     brand: "Audi",
//     model: "A6 Avant"
// }

// console.log(car)
// // Создание нового ключа и значения
// car.year = "2014"





// function User(name, age) {
//     return {
//         name: name,        // можно просто name,
//         age: age           // можно просто age
//         }
// }
// let user = User("Имя", 20)
// console.log(user)




// //проверяем есть ли ключ
// let user = {}
// console.log(user.Random === undefined)     //проверяем есть ли ключ: если есть false, если нет true




// //проверяем есть ли ключ
// let user = {name: "Yan", age: "123"}
// alert("name" in user)     //true
// alert("abc" in user)      // false





// for (let key in userProfile) {
//     alert(key)
//     alert(userProfile[key])
// }



// let list = {
//     name: "Irina",
//     age: "10",
//     city: "Sochi"
// }
// for (let key in list) {
//     console.log(key)          //  выдаёт все ключи
//     console.log(list[key])    //  выдаёт все значения
// }




//  задача.1

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// решение:

// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;                    // не понятно
//   }





// let books = {
//     list: [
//         {title:"Капитал", author:"Карл Маркс", genre:"Фундаментальная критика капиталистической системы, эксплуатации труда и товарного фетишизма.", rating:5},
//         {title:"Положение рабочего класса в Англии", author:"Фридрих Энгельс", genre:"Описание ужасов промышленного капитализма XIX века.", rating:3},
//         {title:"Накопление капитала", author:"Роза Люксембург", genre:"Анализ империализма как неизбежного следствия капитализма.", rating:4},
//         {title:"Одномерный человек", author:"Герберт Маркузе", genre:"Критика потребительского общества и подавления индивидуальности при капитализме.", rating:5},
//         {title:"Прибыль на людях", author:"Ноам Хомский", genre:"Современная критика неолиберализма и корпоративной власти.", rating:3}
//     ]
// };

// console.log(books.list[3].rating);  





// // Одна функция, разные аргументы
// function drive(speed, direction) {
//     console.log(`Едем ${direction} со скоростью ${speed} км/ч`);
//   }
  
//   drive(60, "на север"); // Аргументы: 60, "на север"
//   drive(90, "на юг");    // Аргументы: 90, "на юг"




// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.