//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends Vehicle {
    constructor(make, model, year, color, mileage, passenger) {
        super(make, model, year, color, mileage, passenger)
        this.maximumPassengers = 5;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    super.start();

    loadPassenger (num) {
        if (num <= this.maximumPassengers) {
            this.passenger = num
            return this.passenger;
        } else {
            console.log("Passengers exceed maximum passengers")
        }
    }

    checkService (milegae) {
        if (this.milegae > 30000) {
            this.scheduleService = true;
            console.log('Time for maintenance')
            return this.scheduleService
        }
    }
}
