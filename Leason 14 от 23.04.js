// Рекурсия — это процесс, при котором функция вызывает саму себя напрямую или через другие функции.

// 2 ** 2 = 4
// Итеративный метод
// function pow(a,b) {
//     let result =1
//     for(let i = 0; i < b; i++){
//         result *= a
//     }
//     return result
// } 

// alert(pow(2,5))



// Рекурсивный метод
// function pow (x,n) {
//     if (n == 1) {     //  база рекурсии
//         return x
//     } else {                                                        // x * x**(n-1)
//         return x * pow(x, n - 1)
//     }
// }

// alert(pow(2,3))

// Шаги рекурсии
// pow(2,3) = 2 * pow(2,3)
// pow(2,3) = 2 * pow(2,2)
// pow(2,2) = 2 * pow(2,1)
// (2,1) = 2



// function factorial(n) {
//     if (n ==1) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }

// console.log(factorial(5))   // 120
// console.log(factorial(3))   // 6


// // Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) 
// function sumTo(n) {
//     if (n == 1) {
//         return 1
//     } else {
//         return n + sumTo(n - 1)
//     }
// }
 
// console.log(sumTo(100))   // 5050




// function fib(n) {
//     if (n <= 1) {
//         return 1
//     } else {
//         return fib(n - 1) + fib(n - 2)
//     }
// }

// console.log(fib(10));   //  89




// let start = Date()
// function fib(x) {
//     return x <= 1 ? x : fib(n - 1) + fib(n - 2) 
// }

// console.log(fib(10));
// console.log(fib(10));
// console.log(fib(10));
// console.log(fib(10));
// console.log(fib(10));
// console.log(fib(10));
// console.log(fib(10));
// console.log(fib(10));
// console.log(fib(10));
// console.log(fib(10));

// let end = Date.now()
// console.log(end - start + "мс");




// Остаточные параметры и оператор расширения
// function sum (a,b) {
//     return a + b
// }

// console.log(sum(2,2,2,3,4,5,6,6,6))  //  4



/* function printName(name, surname, ...title) {
    console.log(name);
    console.log(surname);
    console.log(title[0]);
    console.log(title[1]);
    console.log(title[2]); 
    console.log(typeof(title));       
}
printName('Bob','Ururu', 1,2,3)
//  Остаточные параметры указываюися "..." */


/* function arguments (... args) {
    console.log(args);    
}
arguments('Bob', 'Jo', 'Lee', 'Fi', "Regina", "Marta", "Lada") */

/* // Переменая arguments
function name() {
    console.log(arguments.length);  //  4
    console.log(arguments[0]);      //  Ururu
    console.log(arguments[2]);      //  Regina
    console.log(typeof arguments)   //  object
}
name('Ururu', 'Bob', "Regina", "Stas")
//  Все аргументы функции находятся в псевдомассиве "arguments" под своим индексом */


/* let test = 661
function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + "" + lastName + test
    }
    console.log("Hello " + getFullName());    //  Hello UruruTru 661
    console.log("Hi " + getFullName());       //  Hi UruruTru 661
}
sayHiBye('Ururu ','Tru ') */



function counter() {
    let count = 0
    return function() {
        return count++
    }
}
let cou = counter()
console.log(cou());  // 0
console.log(cou());  // 1
console.log(cou());  // 2
console.log(cou());  // 3
console.log(cou());  // 4
console.log(cou());  // 5
console.log(cou());  // 6
console.log(cou());  // 7