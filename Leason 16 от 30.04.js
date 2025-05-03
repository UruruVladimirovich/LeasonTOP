/* console.log("start")

function setTimeout2sec() {
    console.log("Таймер на 2 секунды")
}

window.setTimeout(function() {                                    //   start
    console.log("Функция выполнится через 2 секунды")             //   end                                                                                                                                                                                                                                                                                          
}, 2000                                                           //   Функция выполнится через 2 секунды   
)                                                                 //   Таймер на 2 секунды                          

setTimeout(setTimeout2sec, 2000)

console.log("end")  */


//  Промисы 

/* let = promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, когда будет вызваться new Promise
    setTimeout(() => resolve("Done!"), 2000)
})

promise.then(alert)                               //  Done!
promise.then(result => console.log(result));      //  Done!  

/* promise
    .then(result => {
        console.log(result);
        return result; // для последующих .then()
    }); */ 


/* let = promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, когда будет вызваться new Promise
    setTimeout(() => reject(new Error ("Ошибка")), 2000)
})

promise.then(
    result => alert(result),
    error => alert(error)         //   Error: Ошибка
) */



/* function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}    

delay(3000).then(() => alert('выполнится через 3 секунды'))     //  выполнится через 3 секунды */


//                                                    Цепочка промисов

/* let helloPromise = new Promise(function(resolve) {
    resolve("Hello (успешное выполнение)")
})

let worldPromise = helloPromise.then(function(value) {
    // возвращать новое значение
    return value + " World"
})

let academy = worldPromise.then(function(value) {
    return value + " academy"
})

academy.then(function(finalValue) {
    // здесь получаем финальное значение
    console.log(finalValue)                     //  Hello (успешное выполнение) World academy
}) */


/* new Promise(resolve => resolve('Hello'))
.then(value => value + "World")
.then(value => value + "academy")
.then(final => console.log(final))       //  HelloWorldacademy               */


//         Обработка ошибок cathc()


//  функция parseInt() в JavaScript. Она принимает в качестве аргумента строковое значение и возвращает целое число, которое соответствует указанному основанию системы счисления.
// У метода есть некоторые ограничения: строка должна начинаться с числа, возвращается только первое число, дробное число будет округлено до ближайшего целого значения. Если значение не может быть преобразовано, возвращается NaN. 


/* function generateNumber(str) {
    return new Promise ((resolve, reject) => {
        let parsed = parseInt(str)
        if (isNaN(parsed)) reject('no number')
        else resolve(parsed)   
    })
}
function printNumber(str) {
    generateNumber(str)
    .then(value => console.log(value))              //  3
    .catch(error => console.log(error))             //  no number
}
printNumber("abc")
printNumber("3") */

//   Функция  generateNumber(str) возвращает промис, в котором мы получаем извне значение, далле мы пытаемся его конвертировать в число. В функции printNumber(str), вызываем эту функцию и у полученного промиса создаем небольшую цепочку из методов then и catch.

//   Если конвертация строки в число в промисе прошла успешно, то распарсинное число передается в функцию resolve    