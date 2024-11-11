// Define a constructor function
function Car(make) {
    this.make = make;
}

// Add a method to the prototype (affects all instances)
Car.prototype.describe = function () {
    console.log(`This is a ${this.make} car.`);
};

// Create instances
const car1 = new Car("Toyota");
const car2 = new Car("Honda");

// car1 and car2 both have describe method because it's on the prototype
car1.describe(); // Output: "This is a Toyota car."
car2.describe(); // Output: "This is a Honda car."

// Adding a method only to car1
car1.startEngine = function () {
    console.log(`The engine of ${this.make} is starting.`);
};

// car1 has startEngine, but car2 does not
car1.startEngine(); // Output: "The engine of Toyota is starting."
// car2.startEngine(); // This would cause an error
