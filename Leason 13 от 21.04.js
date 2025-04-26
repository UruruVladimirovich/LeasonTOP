// let sales = {
//     value: 38,
//     value: 16,
//     value: 14
// }

// // Object.keys(user)
// // Object.values(user)
// // Object.entries(user)
// // for (let value of Object.values(user)) {
// //     alert(value)
// // }

// let multiplay = Object.fromEntries(
//     Object.entries(sales).map(([key, value]) => ([key, value / 2]))
// )
// console.log(multiplay)

// Object.entries(obj) - возращает массив пар ключ и значения
// Object.fromEntries - преобразовывает обратно в объект

// let salaries = {
//     "Ilya" : 1000,
//     "Marta" : 900, 
//     "Robert" : 800, 
// };

// function sum_sal(salaries) {
//     let sum = 0 
//     for (let salary of Object.values(salaries)){
//         sum += salary
//     } 
//     return sum 
    
// }

// alert(sum_sal(salaries))


// let user = {
//     name: 'Jonh',
//     age: 30
// }

// function count(user) {
//     return Object.keys(user).length
// }

// console.log(count(user))





// Date and Time
// let time = new Date();
// console.log(time.getMilliseconds())

// let start = Date.now();
// alert("Regina")
// let num = 1

// let sales = {
//     value: 38,
//     value: 16,
//     value: 14
// }

// let multiplay = Object.fromEntries(
//     Object.entries(sales).map(([key, value]) => ([key, value / 2]))
// )
// console.log(multiplay)
// let end = Date.now()
// alert(end - start)


// JSON (JavaScript Object Notation) - формат представления значений и объетов.

// JSON.stringify - преобразовывает объекты в JSON
// JSON.parse - преобразовывает в объект

// let CarList = {
//     brand: "Mersedes",
//     mark: "E220",
//     years: "1999"
// }

// let json = JSON.stringify(CarList)
// console.log(typeof json)
// console.log(json)

// console.log(JSON.stringify(true))

// let room = {
//     number: 23
// };

// let meetup = {
//     title: " Conference",
//     participants: [{name: " Jonh"}, {name: "Alice"}],
//     place: room,
//     free: true
// };

// room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup,function replacer(key, value) {
//     console.log(`Value ${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }))


// let user = {
//     nick: "qwerty",
//     dateReg: "now",
//     isAdmin: {
//         owner: false,
//         adm: true
//     }
// }

// console.log(JSON.stringify(user, null, 10, "ABC")) // Для того чтобы красиво выводить данные (*-_-*) 


// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };

//   let newUser = JSON.parse(JSON.stringify(user))
//   console.log(newUser)



// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };
  
//   // цикличные ссылки
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
  
//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value
//   }));