//    Конструктор, оператор "new" :



//   Функция-конструктор :

// 1.  Функция-конструктор должно начинаться с большой буквы.
// 2.  Всегда выполняться с помощью оператора "new".


// function Car (brand,model,number,color) {
//     this.brand = brand    //  свойства конструктора
//     this.model = model    //  свойства конструктора
//     this.number = number  //  свойства конструктора
//     this.color = color    //  свойства конструктора
// }

// let bmwx6m = new Car ("BMW","X6M","VOR666","black")

// console.log(bmwx6m.brand)
// console.log(bmwx6m)

// //  Когда функция вызывается как new CAR (Конструктор), происходит следующее :
// //  1.Создаёт новый пустой обьект, и он присваивается this/ 
// //  2.Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства. 
// //  3. Возвращается значение this.

// function Car (brand,model,number,color) {
//     // this ={};
//     //добавляем свойства к this
//     this.brand = brand
//     // return this;
// }
// // Таким образом
// // let bmwx6m = new Car ("BMW","X6M","VOR666","black")
// // Представляет из себя как бы мы писали
// // let car = {
// //     brand: "BMW",
// //     model:"X6M"
// // }



// Проверка на вызов в режиме конструктора

// let user = new function() {
//     this.name ="Ururu"
//     this.isAdmin = true
// }

// console.log(user)



// Возвращаем значение конструкции

// function AdminUser() {
//     this.name = "Adm"
//     return {name:"Ururu"}
// }

// console.log(AdminUser().name)



// function CarShowroom(model,brand) {
//     this.model = model
//     this.brand = brand
//     // метод
//     this.Info = function() {
//         alert("Автомобиль на продаже " + this.model + this.brand)
//     }
// }

// // новый обьект представляет из себя автомобиль
// let car1 = new CarShowroom("Mersedes-Benz", "e220")
// car1.Info()






//  Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.


//Решение 1

// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );


//Решение 2

// function Calculator() {
//     this.read = function() {
//         this.i1 = +prompt("Введите первое число:")
//         this.i2 = +prompt("Ведите второе число:")
//     }

//     this.sum = function() {
//         return this.i1 + this.i2
//     }

//     this.mul = function() {
//         return this.i1 * this.i2
//     }
// }

// let calculator = new Calculator()
// calculator.read()

// console.log("sum = " + calculator.sum())
// console.log("mul = " + calculator.mul())






// Создайте new Accumulator

// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений



// Решение1 :



// function Accumulator(startingValue) {
//     this.value = startingValue;
  
//     this.read = function() {
//       this.value += +prompt('Сколько нужно добавить?', 0);
//     };
  
//   }
  
//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   alert(accumulator.value);



// Решение2 :


//   function Accumulator(startingValue) {
//     this.value = startingValue

//     this.read = function() {
//         this.value += +prompt( "добаввьте число")
//     }
//   }

//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   alert(accumulator.value);