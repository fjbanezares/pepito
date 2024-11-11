// Importing the CommonJS module
const message = require('./messageCommonJS');

// Importing the ES6 module
// Note: We're using the dynamic import here, which returns a promise.
// This is because ES6 modules support asynchronous loading.
import('./mathES6.mjs').then(mathModule => {
    console.log(mathModule.add(2, 3)); // Outputs: 5
});

console.log(message.greet('Alice')); // Outputs: Hello, Alice!
