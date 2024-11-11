// Creating the first object directly from Object.prototype
const firstToy = Object.create(Object.prototype);
firstToy.name = "Mega-Toy";
firstToy.sayHello = function () {
    console.log("Hello, I'm the Mega-Toy!");
};

//firstToy is an object with Object.prototype as its prototype.
//We added a name property and a sayHello method to firstToy.

// Testing the first toy
console.log(firstToy.name); // Output: "Mega-Toy"
firstToy.sayHello();        // Output: "Hello, I'm the Mega-Toy!"



//Now, we’ll create another object, secondToy, that uses firstToy as its prototype. 
//This means secondToy will inherit properties and methods from firstToy.

// Creating the second object, inheriting from firstToy
const secondToy = Object.create(firstToy);
secondToy.name = "Little-Toy";


// Testing the second toy
console.log(secondToy.name);        // Output: "Little-Toy" (its own name)
secondToy.sayHello();               // Output: "Hello, I'm the Mega-Toy!"

// Checking the prototype chain
console.log(secondToy.__proto__ === firstToy);         // Output: true
console.log(secondToy.__proto__.__proto__ === Object.prototype); // Output: true

// In this code: secondToy inherits from firstToy, so it has access to sayHello.
// Although secondToy has its own name property("Little-Toy"), it doesn’t have a sayHello method itself.
// Instead, it "borrows" sayHello from firstToy thanks to the prototype chain.
//    secondToy.__proto__ is firstToy, and firstToy.__proto__ is Object.prototype.


// When we call secondToy.sayHello(), JavaScript first looks for sayHello on secondToy.
// It doesn’t find sayHello directly on secondToy, so it moves up the chain to firstToy, where it finds sayHello and executes it.
// This chain continues up to Object.prototype, and if nothing is found, it stops there, returning undefined.
