//  MAP и SET
// MAP - коллекция ключ/значение, как и Object.
// Отличие позволяет использовать ключи любого типа.

// let map = new Map()     // Создаёт коллекцию
// map.set("1", "Тут хранится один")
// // console.log(map);                  //  `Map(1) {'1' => 'Тут хранится один'}
//                                       // [[Entries]]
//                                       //  0:{"1" => "Тут хранится один"}
//                                       //    size:1` 
// map.set("2", "Тут хранится два")
// map.set("3", "Тут хранится три")
// // console.log(map.get("1"));      //  Тут хранится один
// //  get - возвращает значение из массива по ключу. Если ключа нет - возвращает undefined.
// // console.log(map.has(1));   //  map.set("1", "Тут хранится один")
// // has - возвращает true если key есть в коллекции, false - если нет.
// console.log(map);  //  Map(3) {'1' => 'Тут хранится один', '2' => 'Тут хранится два', '3' => 'Тут хранится три'}
// map.delete("2")
// console.log(map);   //  Map(2) {'1' => 'Тут хранится один', '3' => 'Тут хранится три'}

// console.log(map.size);
/* // Создаем Map
const map = new Map();

// Добавляем элементы (ключ → значение)
map.set("яблоко", 100);
map.set("банан", 50);
map.set("апельсин", 80);

// Проверяем размер (количество элементов)
console.log(map.size); // Выведет: 3 */



// let user = {id: "1"}

// let visitCount = new Map()
// visitCount.set(user, 7)
// alert(visitCount.get(user))   //  7


// let user = {id: "1"}
// let userAdmin = {id: "Admin1"}

// let list = {}
                                                         //   ??
// list["1"] = 'Что то'
// list["Admin1"] = 'Что-то'
// alert(list)     //  [object Object]

 

/* let python47 = new Map([
    ["Регина", 12],
    ["Марта", 12],
    ["Элеонора", 12]
]) */

/* for (let value of python47.keys ()) {         //  Регина
    console.log(value);                          //  Марта
}                                                //  Элеонора */

/* for (let value of python47.values ()) {
    console.log(value);                           // 3 12
} */
 
/*  for (let value of python47.entries ()) {         //  (2) ['Регина', 12]
    console.log(value);                           //  (2) ['Марта', 12]
}                                                 //  (2) ['Элеонора', 12]
 */
//  Когда мы осуществляем перебор коллекции.
//  Перебор  осуществляется в том же порядке как и добавляли значения в коллекцию.


/* let object = {
    name: 'Regina',
    age: 14
}

let map = new Map(Object.entries(object))

console.log(map.get("name"));

let python47 = Object.fromEntries([
    ['Regina', 12],
    ['Egorka', 2],
    ['Илья', 0]
])
alert(python47.Regina)  // 12
console.log(python47);  // Regina */



/* let map = new Map()
map.set('Розы', 1)
map.set('Пионы', 2)
map.set('Тюльпаны', 3)
map.set('Орхидея', 4)
map.set('Кактус', 5)

let object = Object.fromEntries(map.entries())
console.log(object);                                 //   {Розы: 1, Пионы: 2, Тюльпаны: 3, Орхидея: 4, Кактус: 5}
                                                     //   Кактус:5
                                                     //   Орхидея:4
                                                     //   Пионы:2
                                                     //   Розы:1
                                                     //   Тюльпаны:3 */

// Object Set - особый вид коллекции: множество значений без ключей, где каждое значение может появляться только один раз.

/* let set = new Set()

let apple = {name: "Яблоко"}
let banana = {name: 'Банан'}
let orange = {name:'Апельсин'}

set.add('Яблоко')
set.add('Банан')
set.add('Апельсин')
set.add('Персик')

alert(set.size)    //  4
console.log(set);  //  Set(4) {'Яблоко', 'Банан', 'Апельсин', 'Персик'}

for (let fruit of set) {                             //  Яблоко
    console.log(fruit);                              //  Банан 
                                                     //  Апельсин 
}                                                    //  Персик */



// WeakMap and WeakSet

// let random = {random: "random1"}
// random = null
// console.log(random);  //  null
//  Обьект полностью удален из памяти

//  Отличие от  Map  в том, что ключи в WeakMap должны быть обьектами, а не примитивами
// let weakMap = new WeakMap()
// let object = {}
// weakMap.set(object, "что-то")
// weakMap.set(1, '1')                     //  Invalid value used as weak map key

// object = null


// let visitCountMap = new Map()
// function countUsers(user) {
//     let count = visitCountMap.get(user)
//     visitCountMap.set(user, count + 1)
// }
/* let egor = {name: "Egorka"}
countUsers(egor)
egor = null      //  удален не полностью */



//  Кэширование
// let cache = new Map()

// function process (obj) {
//     if (!cache.has(obj)) {
//         let result = obj;
//         cache.set(obj, result)
//     }
//     return cache.get(obj)
// }

// //  Другой файл
// let obj = { /* допускаем что у нас есть какой-то обьект */}

// let result1 =process(obj)   //  тут происходит вычисление результата условно
// let result2 = process(obj)  //  какое нибудь другое вычисление результат
// obj = null
// console.log(cache.size);


//  WeakSet
//  Особеностью WeakSet является то что мы можем добавить туда только обьекты ( а не примитивы)
// Обьекты присутсвуют в множестве только пока они где-то доступны







/* // Задачи
// Хранение отметок "не прочитано"
// важность: 5
// Есть массив сообщений:
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.
// Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.
// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.
// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям. */








/* // Хранение времени прочтения
// важность: 5
// Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее. */







/* // Перебираемые ключи
// важность: 5
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

let map = new Map();
map.set("name", "John");
let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал? */