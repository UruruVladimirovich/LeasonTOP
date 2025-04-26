function changeBackground(color) {
    document.body.style.background = color;                                          // чёрный экран(окно), фон.
 }
 window.addEventListener("load",function() { changeBackground('black') });     

//  Методы массивов

// let array = ['Regina', 'Egorka', 'Elia']


//  параметры принимают значения формата ОТ и ДО
// array.splice(0, 1)
// console.log(array);  //  ['Egorka', 'Elia']

// array.splice(1, 2,  "Robert", 'Ururu')
// console.log(array);    //  ['Egorka', 'Robert', 'Ururu']

// let array1 = ['Regina', 'Egorka', 'Elia', 'Ururu']
// console.log(array1.slice(0,2));  //   ['Regina', 'Egorka']
// console.log(array1.slice());   //  ['Regina', 'Egorka', 'Elia', 'Ururu']

// let array2 = ['Regina', 'Egorka', 'Elia', 'Ururu']
// console.log(array2.concat([1,2]));   //   ['Regina', 'Egorka', 'Elia', 'Ururu', 1, 2]


// let array3 = [1,2]
// console.log(array3.concat([3,4]));   //  [1, 2, 3, 4]

// let arr = [1,2]
// let arr1 = [3,4,5,6,7,8,9,10]
// console.log(arr.concat(arr1[0]));  //  (3) [1, 2, 3]
// console.log(arr.concat(2));   //  [1, 2, 2]


/* let array4 = ['Regina', 'Egorka', 'Elia', 'Ururu']
array4.forEach(console.log);                      //'Regina 0 (4) ['Regina', 'Egorka', 'Elia', 'Ururu']
                                                  // Egorka 1 (4) ['Regina', 'Egorka', 'Elia', 'Ururu']
                                                  // Elia 2 (4) ['Regina', 'Egorka', 'Elia', 'Ururu']
                                                  // Ururu 3 (4) ['Regina', 'Egorka', 'Elia', 'Ururu']' */


/* let arr2 = ['Regina', 'Egorka', 'Elia', 'Ururu'].forEach((item, index, arr2) => {      //  У Regina индекс 0, в массиве Regina,Egorka,Elia,Ururu
    console.log(`У ${item} индекс ${index}, в массиве ${arr2}`);                       //  У Egorka индекс 1, в массиве Regina,Egorka,Elia,Ururu
})                                                                                     //  У Elia индекс 2, в массиве Regina,Egorka,Elia,Ururu
                                                                                       //  У Ururu индекс 3, в массиве Regina,Egorka,Elia,Ururu */


// let arr3 = ['Regina', 'Egorka', 'Elia', 'Ururu']
// alert(arr3.indexOf('Ururu'))             //  3


/* let arr4 = ['Regina', 'Egorka', 'Elia', 'Ururu', NaN]
console.log(arr4.indexOf(NaN));   //  -1
console.log(arr4.includes([4]));  //  false */

/* let admin = [
    {id:1, name: 'Regina'},
    {id:2, name: 'Egorka'},
    {id:3, name: 'Ururu'}
];

let find = admin.find(item => item.id == 2);  //  ищет обьект в массиве
alert(find.name)                              //  Egorka
alert(find.id)                                //  2 */



//  map - вызывает функцию для каждого элемента и возвращает масси с результатом выполнения.
//  здесь мы преабразуем каждый элемент массива в его длину(то есть сколько букв в имени)

// let array5 = ['Regina', 'Egorka', 'Elia', 'Ururu', 'Bob', 'Djon']
// let lenght = array5.map(item => item.length)
// console.log(lenght);       //    (6) [6, 6, 4, 5, 3, 4]

// let arrayNumber =[10, 22, 50, 3, 78, 66]
// let sorted = arrayNumber.sort()
// console.log(`Отсортированный массив ЭЛЕМЕНТОВ ${arrayNumber}`);   //   Отсортированный массив ЭЛЕМЕНТОВ 10,22,3,50,66,78


/* let array6 = ['Regina', 'Egorka', 'Elia', 'Ururu', 'Bob', 'Djon']
let target = 'Bob' 
let lenght = array6.map((item, index) =>                                 //  доработать в deepseek чтобы не возвращал весь массив
    item == target ? item.length : alert("Err")
)
console.log(lenght); */


let arr5 = ['Regina', 'Egorka', 'Elia', 'Ururu', 'Bob', 'Djon']
let target = 'bob'

let lowerCase = arr5.map(item => item.toLowerCase())            //  перевели в нижний регистр
console.log(lowerCase);      //  ['regina', 'egorka', 'elia', 'ururu', 'bob', 'djon']
let targetIndex = lowerCase.indexOf(target)                             
console.log(targetIndex);                        //  4  (индекс)


let len = lowerCase.map((item, index) => 
    index === targetIndex ? item.length : undefined
)

console.log(len);     //   [undefined, undefined, undefined, undefined, 3, undefined]
