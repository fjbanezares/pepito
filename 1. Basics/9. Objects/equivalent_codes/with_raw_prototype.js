// Without class syntax
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

Person.description = function () {
    return "I'm a person class!";
};

// Creating an instance
const person1 = new Person("Alice", 30);
person1.greet(); // Output: "Hello, my name is Alice"
console.log(Person.description()); // Output: "I'm a person class!"
