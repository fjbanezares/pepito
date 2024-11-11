// Using class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    static description() {
        return "I'm a person class!";
    }
}

// Creating an instance
const person1 = new Person("Alice", 30);
person1.greet(); // Output: "Hello, my name is Alice"
console.log(Person.description()); // Output: "I'm a person class!"

//the class syntax hides the details of using prototype directly 
//and makes the code look more like traditional class-based languages
// JavaScript is still using prototypes behind the scenes.

