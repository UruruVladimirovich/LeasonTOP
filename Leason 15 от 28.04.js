function changeBackground(color) {
    document.body.style.background = color;                                          // чёрный экран(окно), фон.
 }
 window.addEventListener("load",function() { changeBackground('black') });  
           
/*               //   DZ 
  //  рекурсия 
function isPalidrom(str) {
    let lowerStr = str.replace(/\s+/g, '').toLowerCase()
    if (lowerStr.length <= 1) {
        return 'Палидром'
    }
    if (lowerStr[0] !== lowerStr[lowerStr.length - 1]) {
        return false
    }

    return isPalidrom(lowerStr.slice(1, -1))
}
console.log(isPalidrom('Trololo'))
console.log(isPalidrom('Ururu'))

   //  без рекурсии
function isPalidrome(str) {
    let lowerStr = str.replace(/\s+/g, '').toLowerCase()
    for(let i = 0; i < Math.floor(lowerStr.length / 2); i++) {
        if (lowerStr[i] !== lowerStr[lowerStr.length - 1 - i]) {
            return false
        }
    }
    return 'Палидром'
}

console.log(isPalidrome('Trololo'))
console.log(isPalidrome('Ururu')) */


//  обработка ошибок try catch

/* try {
    alert('Начало блока try')    //  Начало блока try
    let number1 = 2
    let number2 = 1
    alert(number1 + number2)    //  3
    alert('Конец блока')        //  Конец блока
} catch(err) {
    alert('Ошибка')
    console.log(err)
} */


/* let json = '{"1": 30}'

try {
    let user = JSON.parse(json)

    if (!user.age) {
        throw new SyntaxError('Данные не полные. Повторите попытку')
    }
} catch(error) {
    alert('ERROR SERVER' + error.message)     //    ERROR SERVERДанные не полные. Повторите попытку
} */

/* let json = '{"1": 30}'

try {
    let user = JSON.parse(json)

    if (!user.age) {
        throw new SyntaxError('Данные не полные. Повторите попытку')
    }
} catch(error) {
    alert('ERROR SERVER' + error.message)     //    ERROR SERVERДанные не полные. Повторите попытку
} finally {
    alert('Блок finally')
} */


    //   Колбэки

/* function script (src) {
    let script = document.createElement('script')
    script.scr = scr
    document.head.append(script)
}   

script('/my/script.js') */


/* function helloWorld (callback) {
    callback('Hello World')
}

helloWorld((text) => {
    console.log(text)       //  Hello World
}) */

function fetchData(callback) {
    setTimeout(() => {
        let user = {id: 1, name: 'Bob'}
        callback(user)
    }, 3000)
}
fetchDate((result) => {
    console.log('Данные готовы', result)   // не могу найти ошибку
})