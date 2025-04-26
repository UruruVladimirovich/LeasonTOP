//  тема   "DOM" :
//  Document Object Model - обьектная модуль документа,которая представляет всё содержимое страницы в виде обьектов,с которыми мы можем взаимодействовать


// document.body.style.background = "red"


// BOM
// Browser Object Model
// Обьектная модель браузера - доп. обьекты, которые представляет браузер, позволяя работать со всем, кроме документа


// alert(location.href)
// if(confirm("Перейти на ТОП?")) {
//     location.href = "https://journal.top-academy.ru/ru/auth/login/index?returnUrl=%2Fru%2Fmain%2Fdashboard%2Fpage%2Findex"
// }



// Тема  "DOM-дерево":
// В DOM - HTML Tag является обьектом.
// Вложеные теги являются детьми родительского элемента,тега.
// Информация (текст) находится внутрни тега,это тоже обьект!

// document.body.style.background = "red";
// setTimeout(() => document.body.style.background = '', 3000)   // выключит красный цвет через 3000 м/сек


// Существует 12 типов узлов. Но на практике мы в основном работаем с 4 из них:

// document – «входная точка» в DOM.
// узлы-элементы – HTML-теги, основные строительные блоки.
// текстовые узлы – содержат текст.
// комментарии – иногда в них можно включить информацию, которая не будет показана, но доступна в DOM для чтения JS.



// Взаимодействие с консолью 

// document.documentElement    // обратились к тегу HTML

// body = document.body


// for (let i = 0; i < document.body.childNodes.length; i++) {      // хз
//     alert(doc.childNodes[i])
// }

// for (let node of document.body.childNodes) {
//     alert(node)                                         //перебирает элементы в алерт при  ".<script src="main.js"></script>" после <p>Что-нибудь</p>
// }



// // родителем <body> является <html>
// alert( document.body.parentNode === document.documentElement ); // выведет true

// // после <head> идёт <body>
// alert( document.head.nextSibling ); // HTMLBodyElement

// // перед <body> находится <head>
// alert( document.body.previousSibling ); // HTMLHeadElement



// let element = document.getElementById(`element`)
// element.style.background = "red"
// element.style.width = "500px"                                     //  <div id="element">123</div>
// element.style.height = "1000px"




// let element = document.querySelectorAll(`ul > li:last-child`)          
// for (let el of element) {           // <ul> <li>1</li> <li>2</li> </ul>  <ul> <li>пройден</li> <li>полностью</li> </ul>
//     alert(el.innerHTML)             // выдаст 2 и полностью
// }



//  matches
// for (let elem of document.body.children) {       //    <a href="https://youtube.com">1</a>
//                                                  //    <a href="https://yandex.ru">2</a>
//     if (elem.matches('a[href$="yandex.ru"]')) {
//         alert("Ссылка на Яндекс" + elem.href)                // Проверяем на наличие ссылки "yandex.ru" (matches)
//     }
// }


// // closest
// let chapter = document.querySelector(".chapter")            
// alert(chapter.closest(".book"))      // Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору.
// alert(chapter.closest(".contents"))  //  Сам элемент также включается в поиск.
// alert(chapter.closest(".h1"))