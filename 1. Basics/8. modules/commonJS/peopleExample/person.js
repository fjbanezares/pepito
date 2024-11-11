// Define a person object
const person = {
    name: 'Bob',
    age: 30,
    greet: function () {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};

// Define a person object
const person2 = {
    name: 'Boby',
    age: 31,
    greet: function () {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};

// Export the person object
module.exports = { person, person2 };
