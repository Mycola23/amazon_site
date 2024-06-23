"use strict"; // extra practice for me
//*17.a || completed

class Car {
    #brand; //*completed 17f add private properties
    #model;
    speed;
    isTrunkOpen;
    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
        this.speed = 0;
        this.isTrunkOpen = false;
    }
    displayInfo() {
        console.log(`${this.#brand} ${this.#model} Speed : ${this.speed} km/h Your trunk is open - ${this.isTrunkOpen}`); // for 17b
    }
    // for 17c
    go() {
        if (this.isTrunkOpen === false) {
            if (this.speed + 5 > 200) {
                this.speed = 200;
            } else {
                this.speed += 5;
            }
        } else {
            console.log("check yuor car back , and close it , bag of bones ");
            this.speed = 0;
        }
    }
    brake() {
        if (this.speed - 5 < 0) {
            this.speed = 0;
        } else {
            this.speed -= 5;
        }
    }
    openTrunk() {
        this.isTrunkOpen = true; // дурна властивість оскільки авто може рухатися з відкритим багажником але ладно
    }
    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

const carDataBase = [
    {
        brand: "Toyota",
        model: "Corolla",
    },
    {
        brand: "BMW",
        model: "X7",
    },
    {
        brand: "Rolls Royce",
        model: "Ghost",
    },
].map((carDetails) => {
    return new Car(carDetails);
});
//console.log(carDataBase);

//*completed 17.b
//add method to class Car and checking it using gooogle console
carDataBase.forEach((car) => {
    //car.displayInfo();
});
//*completed 17c
const superCar = new Car({
    brand: "porsche",
    model: "718 Boxter",
});

for (let i = 0; i <= 18; i++) {
    superCar.go();
}
superCar.brake();

//superCar.displayInfo();

//*completed 17d we will  use our supercar
//superCar.openTrunk(); //хі-хі я відкриваю багажник на швидкості 90кмгод
//superCar.go();
//superCar.displayInfo();
//*17 e completed
let message = "";
class RacerCar extends Car {
    acceleration;
    go() {
        if (this.speed >= 200) {
            message = " You are the fastest firefly on this earth  (: -&)";
        }
        if (this.speed + this.acceleration > 350) {
            this.speed = 350;
        } else {
            this.speed += this.acceleration;
        }
    }
    brake() {
        if (this.speed - this.acceleration < 0) {
            this.speed = 0;
        } else {
            this.speed -= this.acceleration;
        }
    }
    openTrunk() {
        return "";
    }
    closeTrunk() {
        return "";
    }
    displayInfo() {
        console.log(`${this.brand} ${this.model} Speed : ${this.speed} km/h . your acceleration - ${this.acceleration}.
        ${message}`);
    }

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }
}
const racerCar = new RacerCar({
    brand: "ZAZ",
    model: "firefly",
    acceleration: 24,
});

for (let i = 0; i <= 11; i++) {
    racerCar.go();
}
racerCar.displayInfo();
