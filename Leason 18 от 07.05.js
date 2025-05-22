function changeBackground(color) {
    document.body.style.background = color;                                          // чёрный экран(окно), фон.
}
window.addEventListener("load",function() { changeBackground('black') });  

//  Полиморфизм

/* class Cat {
    makeSound() {
        console.log('Мяу')
    }
}

class Dog {
    makeSound() {
        console.log("Гав")
    }
}

function animalSound(animal) {
    animal.makeSound()
}

let animal1Cat = new Cat()
let animal1Dog = new Dog()

animalSound(animal1Cat)              //  Мяу
animalSound(animal1Dog)              //  Гав */




class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
        this.engine = false
    }

    startEngine() {
        throw new Error('Метод должен быть в подклассе')
    }

    stopEngine() {
        this.engine = false;
        console.log(`${this.getInfo()} двигатель выключен`)
    }

    //  Метод ускорения
    acceleration(amount) {
        if (!this.engine) {
            console.log('Сначала запустите двигатель')
            return
        }
        this.speed += amount;
        console.log(`${this.getInfo()} ускоряется до ${this.speed} км/ч`)
    }

    // Метод торможения
    break(amount) {
        this.speed = Math.max(0, this.speed - amount)
        console.log(`${this.getInfo()} замедляется до ${this.speed} км/ч`)
    }

    // Получение инфы об авто
    getInfo() {
        return `${this.brand} ${this.model} ${this.year}`
    }
}

class GasolinerCar extends Vehicle {
    constructor(brand, model, year, fuelCapacity) {
        super(brand, model, year);
        this.fuelCapacity = fuelCapacity;  //  Обьём топливного бака
        this.currentFuel = fuelCapacity;   //  Текущий уровень топлива
    }

    startEngine() {
        if (this.currentFuel <= 0) {
            console.log('Нет топлива! Едь на заправку');
            return false
        }
        this.engine = true;
        console.log(`${this.getInfo()} двигатель запущен (бензин)`)
        return true
    }

    refuel(liters) {
        this.currentFuel = Math.max(this.fuelCapacity, this.currentFuel + liters);
        console.log(`Запрвлено. Топлива ${this.currentFuel} литров. ${this.fuelCapacity}`)
    }

    acceleration(amount) {
        if (!super.startEngine()) return;                  //  (starEngine === false)
        let fuelConsumption = amount * 0.1;     //   Примерный расход топлива
        if (this.currentFuel < fuelConsumption) {
            console.log('Недостаточно топлива')
            return
        }
        this.currentFuel -= fuelConsumption;
        super.acceleration(amount);
        console.log(`Остаток топлива ${this.currentFuel.toFixed(1)} литра`)
    }
}

class ElectricCar extends Vehicle {
    constructor(brand, model, year, battaryCapacity) {
        super(brand,model,year);
        this.battaryCapacity = battaryCapacity;    // Емкость батареи кВт/ч
        this.currentCharge = battaryCapacity;      // Текущий заряд  
    }

    // Полиморфизм, переопределяем метод запуска двигателя для электромобиля
    startEngine() {
        if (this.currentCharge <= 0) {
            console.log('Батарея рязряжена');
            return false;
        }
        this.engine = true;
        console.log(`${this.getInfo()} двигатель запущен`);
        return true
    }

    charge(kwh) {
        this.currentCharge = Math.min(this.battaryCapacity, this.currentCharge + kwh);
        console.log(`Заряжено. Батарея: ${this.currentCharge.toFixed(1)} кВт * ч. из ${this.battaryCapacity} кВч`);
    }

    // Полиморфизм переопределяем ускорение с учетом расхода энергии.
    acceleration(amount) {
        if (!super.startEngine()) return;
        let energyConsumption = amount * 0.05  // Расход примерный
        if (this.currentCharge < energyConsumption) {
            console.log("Недостаточно заряда, едь на станцию");
            ErrorEvent
        }
        this.currentCharge -= energyConsumption;
        super.acceleration(amount);
        console.log(`Остаток заряда: ${this.currentCharge.toFixed(1)} кВт/ч.`)
    }
}   

class HybrdCar extends GasolinerCar {
    constructor(brand, model, year, fuelCapacity, battaryCapacity) {
        super(brand, model, year, fuelCapacity);
        this.battaryCapacity = battaryCapacity;
        this.currentCharge = battaryCapacity;
        this.electricMode = false;
    }

    startEngine() {
        // Пытаемся запустить в электро режиме двигатель
        if (this.currentCharge > 0) {
            this.engine = true;
            console.log(`${this.getInfo()} двигатель запущен (электрический режим)`);
            return true;
        }

        else if (this.currentFuel > 0) {
            this.engine = true;
            this.electricMode = false;
            console.log(`${this.getInfo()} двигатель запущен (бензиновый режим)`);
            return true;
        }
        console.log('Нет заряда и топлива')
        return false
    }

    //Полиморфизм. Переопределяем ускорение для гибрида
    acceleration(amount) {
        if (!this.electricMode) {
            let energyConsumption = amount * 0.04
            if (this.currentCharge < energyConsumption) {
                console.log(`Переключаемся на бензин`);
                this.electricMode = false;
                if (this.currentFuel <= 0 ) {
                    console.log('Бензин закончился');
                    return
                }
            } else {
                this.currentCharge -= energyConsumption;
                super.acceleration(amount);
                console.log(`(Электро) осьаьок заряда: ${this.currentCharge.toFixed(1)} кВт/ч`);
                return
            }
            this.currentFuel -= fuelConsumption;
            super.acceleration(amount);
            console.log(`(Бензин) Остаток топлива ${this.currentFuel.toFixed(1)} литров.`)
        }
    }
}

    // Демонстрация полиморфизма .
    function testDrive (vehicle) {
        console.log('Тест драв для : ', vehicle.getInfo())

        vehicle.startEngine();
        vehicle.acceleration(20);
        vehicle.acceleration(30);
        vehicle.break(15);
        vehicle.acceleration(25);
        vehicle.startEngine()
    }

let gasolineCar = new GasolinerCar('Opel', 'Zafira', 2007, 60)
let ElectricCar = new ElectricCar('Tesla', 'Model X', 2000, 342)
let HybrdCar = new HybrdCar('Prius', 'Toyota', 2021, 50, 4)

testDrive(gasolineCar)
testDrive(ElectricCar)
testDrive(HybrdCar)