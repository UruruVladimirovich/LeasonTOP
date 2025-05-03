// // Функция calculate принимает два числа и колбэк
// function calculate(a,b,callback) {
//     return callback(a,b)
// }


// //колбэк для сложения (Function Expression)
// const sum = function(x,y) {
//     return x + y
// }


// //Использование
// const result = calculate(2,3,sum)
// console.log(result)





// Тема урока:
//  Копирование обьектов и ссылки



// let message = Привет
// let pharse = message

// let user = {
//     name: "Ururu"
// }

// let admin = user
// console.log(admin)  // Выводит {name: 'Ururu'}

// admin.name = "Что-то другое"
// console.log(admin)  // Выводит {name: 'Что-то другое'}



// let a = {}
// let b = a     // копирование ссылки

// alert(a === b)  // выведет true




// //  Клонирование и объединение



// let user = {
//     name: "Ururu",
//     age: 40
// }

// let clone = {}   // новый пустой объект

// // давайте скопируем все свойства user в него
// for (let key in user) {
//     clone[key] = user[key]
// }

// // теперь clone это полностью независимый объект с тем же содержимым
// console.log(clone)






// let user = {
//     name: "Ururu",
//     age: 40
// }

// let user1 = {
//     name: "Trololo",
//     age: 20
// }

// let target = {}
// Object.assign(target, [user,user1])
// console.log(target)




// Вложенное клонирование


// let user = {
//     name:"bIX",
//     sizes: {
//         height: 300,
//         width: 100
//     }
// }

// let clone = Object.assign({},user)   //  {} - для clone   

// //   Object.assign() — это метод в JavaScript, который копирует все перечисляемые собственные свойства из одного или нескольких исходных объектов в целевой объект. Он возвращает изменённый целевой объект.

// console.log(clone)





// тема : Методы объекта, "this"



// let person = {
//     eyes: "blue",
//     hair: "long"
// }

// // Метод1 вариант написания
// person.Description = function () {
//     alert("Hi")
// }

// person.Description()

// // Метод2 вариант написания
// person = {
//     Description() {
//         alert("Hello world")
//     }
// }



// // Ссылочный тип

// let person = {
//     eyes: "blue",
//     hair: "long",

//     Description() {                    // можно так
//         alert(this.hair)
//     }
// }

// person.Description1 = function() {    // а можно так
//     alert(this.eyes)
// }

// person.Description()    // для вызова алерт
// person.Description1()   // для вызова алерт




// // задача

// let BMW = {
//     length: 6,
//     width: 2,
//     Description() {
//         console.log(this.length,this.width)
//     }    
// }

// let AUDI = {
//     length:5,
//     width:3,
//     Description1() {
//         console.log(this.length,this.width)
//     }  
// }

// BMW.Description()
// AUDI.Description1()