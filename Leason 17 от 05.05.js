function changeBackground(color) {
    document.body.style.background = color;                                          // чёрный экран(окно), фон.
}
window.addEventListener("load",function() { changeBackground('black') });  
           

/* Объектно-ориентированное программирование (ООП) — это подход к написанию программ, при котором всё строится вокруг объектов. Каждый объект — это определённая сущность со своими данными и набором доступных действий. */


/* class Person {
    // name;
    // age;
    // surname;

    constructor( name, age, surname ) {
        this.name = name;
        this.age = age;
        this.surname = surname;
    }

    displayInfo() {
        alert(`Описание человека: \t Имя ${this.name}. Возраст ${this.age}. Фамилия ${this.surname}`)
    }
}

const person1 = new Person('Egor', 14, "Pupkin")
let person2 = new Person('Bob', 16, "Gew")
let person3 = new Person('Ururu', 33, "Pups")
person1.displayInfo()
person2.displayInfo()
person3.displayInfo() */



/* class Person {

    constructor( name, age, surname, nacionality ) {
        this.name = name;
        this.age = age;
        this.surname = surname;
        this.nacionality = nacionality;
    }

    displayInfo() {
        alert(`Описание человека: \t Имя ${this.name}. Возраст ${this.age}. Фамилия ${this.surname}`)
    }

    info() {
        console.log(`Национальность: ${this.nacionality}. Имя ${this.name }`);
        
    }
}

const person1 = new Person('Egor', 14, "Pupkin")
let person2 = new Person('Bob', 16, "Gew", "tatar")
let person3 = new Person('Ururu', 33, "Pups")
// person1.displayInfo()
// person2.displayInfo()
// person3.displayInfo()
person2.info() */





/* Создайте класс который представляет сущность автомобиля.
Атрибуты - марка, модель, л.с., год выпуска, цвет.
Методы: 
    1. Информация про марку и модель
    2. Год выпуска.
    3. л.с.  */


/* class Car {
    constructor(make, model, HP, yearOfManufacture, color) {
        this.make = make;
        this.model = model;
        this.HP = HP;
        this.yearOfManufacture = yearOfManufacture;
        this.color = color;
    }
    infoCar() {
        console.log(`Марка: ${this.make}. Модель: ${this.model}`);       
    };

    infoCar1() {
        console.log(`Год выпуска: ${this.yearOfManufacture}`);
    };
    infoCar2() {
        console.log(`Л.с.: ${this.HP}`);
    }
}    

const swallow  = new Car('Lada', 'Kalina', 99, 2013, 'white')
swallow.infoCar()
swallow.infoCar1()
swallow.infoCar2() */





/* Инкапсуляция — это один из четырех основных принципов объектно-ориентированного программирования (ООП), который означает:
-Сокрытие внутренней реализации объекта
-Объединение данных и методов работы с ними в одной структуре
-Контроль доступа к внутреннему состоянию объекта */

/* Геттеры (getters) и сеттеры (setters) — это специальные методы, которые позволяют контролировать доступ к свойствам объекта, добавляя дополнительную логику при чтении или изменении значений. */


// class Wallet {
//     constructor(money) {
//         this._money = money;               //   _ приватность
//           /*         В JavaScript символ подчеркивания _ перед именем свойства (например, this._money) является соглашением, а не настоящей приватностью. Это просто договоренность между азработчиками, что такое свойство не следует изменять напрямую извне класса. Однако технически доступ к такому свойству всё равно возможен.Разница между _money и настоящими приватными полями (#money)            */
//     }
// }

/* class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }
    //  Гетеры дляя чтения баланса
    get balance() {
        console.log('Получение текущего баланса')
        return this._balance
    }

    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error('Баланс не может быть отрицательным. Повторите попытку')
        }
        console.log(`Изменение баланса с ${this._balance} на  ${newBalance}`)
        this._balance = newBalance
    }

    deposite(amount) {
        this.balance = this._balance + amount   //  Сеттер так же будет работать на этом методе
    }

    // withdraw money
    withdrawMoney(amount) {
        if (amount > this._balance) {
            throw new Error('Недостаточно средств')
        }
        this.balance = this._balance - amount       //  Сеттер используется
    }
}

const myAccount = new BankAccount(500_000)   //  500000
alert(myAccount._balance)
// myAccount.deposite(-600000)    //  Баланс не может быть отрицательным. Повторите попытку 
myAccount.deposite(5000)          //  505000
alert(myAccount._balance)
myAccount.withdrawMoney(7000000)           //   Недостаточно средств
alert(myAccount._balance) */




/* class Player {
    constructor() {
        this.hp = 100;
        this.xp = 0;
        this.level =1
    }
}                   

let player1 = new Player()                     
player1.hp = 10000                  //  не правельно(не должно такого быть)
player1.xp = -100
player1.level = 999 */


/* class Player {
    constructor(hp, xp, level) {
        this._hp = hp;
        this._xp = xp;
        this._level = this.level
    }
//   Геттер 
    get hp() {
        return this._hp
    }
    set hp(newHp) {
        if(newHp < 0 || newHp > 100) {
            throw new Error('Здоровье игрока не может быть отрицательным или больще 100')
        }
        this._hp = newHp
    }

    adminHp(newHp) {
        this.hp = newHp
    }
}  

let player1 = new Player(100, 0, 1)
console.log(player1.hp)                //  100
player1.adminHp(-1)                    //  Здоровье игрока не может быть отрицательным или больще 100 */





class Animal {
    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`${this.name} ест!!!`)
    }

    sleep() {
        console.log(`${this.name} Спит.......ZZZZZZ`)
    }

    walk() {
        console.log(`${this.name} гуляет счастливый`)
    }

    farts() {
        console.log(`${this.name} пукает`)
    }

    swims() {
        console.log(`${this.name} плавает`)
    }
}

// Дочерние классы
class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    meow() {
        console.log(`${this.name} говорит Мяу`)
    }
}

class Сow extends Animal {
    constructor(name, milk) {
        super(name)
        this.milk = milk
    }

    muu() {
        console.log(`${this.name} говорит муу`)
    }
}



class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }

    woof() {
        console.log(`${this.name} очень громко ГАААВ!`)
    }
}

let ram = new Dog('Рем', 'Немецкая овчарка')
ram.sleep()     //  Рем Спит.......ZZZZZZ
ram.eat()       //  Рем ест!!!
ram.woof()      //  Рем очень громко ГАААВ

let prostokvashino = new Cow ('Простоквашено', 'Бурёнка')
prostokvashino.muu()
prostokvashino.eat()
prostokvashino.farts()