// function double(a) {
//     return a * 2
// }
// let result1 = double(4)
// alert(result1)

// function isPositive(a) {
//     if (a > 0) {
//         return true 
//     } else {
//         return false
//     }
// }
// let result2 = isPositive(5)
// alert(result2)

//Function Expression

//Function Declaration

// function helloWorld() {
//     alert("Привет")
// }
// helloWorld();

// let world = function() {
//     alert("Привет")
// }

// world();


// let world = function() {
//     alert("Академия Топ")
// }

// let func = world;

//CallBakc Function

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no()
// }

// function showOk() {
//     alert("Вы согласны.")
// }

// function showCancel() {
//     alert("Отмена")
// }

// ask("Вы согласны?", showOk, showCancel)
 

// let age = prompt("Сколько вам лет?")

// if (age < 18) {
//     welcome = function() {
//         alert("Привет")
//     }
// } else {
//     welcome = function() {
//         alert("Здравствуйте")
//     }
// }
// welcome()


//.................................Практическое задание.................................

// // Создайте функцию sayHello, которая выводит в консоль сообщение "Привет!", используя function expression.
// let sayHello = function() {
//     console.log("Привет")
// }
// let say = sayHello()


// Создайте функцию doSomething, которая принимает callback-функцию и вызывает её. В качестве callback-функции передайте простую функцию, которая выводит в консоль "Я callback!".
// function doSomething() {
//     console.log("Я callback!")
// }
// doSomething()


// Создайте функцию multiply, которая принимает два числа и возвращает их произведение, используя function expression.
// let multiply = function(a, b) {
//     return a + b
// }
// console.log(multiply)


// Создайте функцию calculate, которая принимает два числа и callback-функцию. Callback-функция должна выполнить какую-то операцию с этими числами (например, сложение) и вернуть результат.

// let calculator = function(a,b,callback) {
//     return callback(a, b)
// }

// let add = function(x, y) {
//     return x * y
// }

// console.log(calculator(8,8,add))


// Простой callback
// Создайте функцию askQuestion, которая принимает callback-функцию и вызывает её, передавая строку "Как дела?". Callback-функция должна вывести эту строку в консоль.

// let askQuestion = function(callback) {
//     callback("Как дела?")
//     alert("Как делы?")
// }

// let showQuestion = function(question) {
//     console.log(question)
// }

// askQuestion(showQuestion)


//Стрелочные функции
//ArrowFunc

// let sum = (a,b) => a + b
// alert(sum(1,2))

// let sum = a => a + 10
// alert(sum(1,2))

// let age = prompt("Сколько вам лет?")
// let welcom1e = (age < 18) ?
//     () => alert("Привет!"):
//     () => alert("Хай");



//Многострочные стрелочные функции

// let sum = (a,b) => {
//     let result = a + b;
//     return result
// }
// alert(sum(1,2))


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   )
    