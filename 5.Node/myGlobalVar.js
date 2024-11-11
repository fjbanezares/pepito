// Accessing the global object directly in a browser
//console.log(window.document); // logs the document object

// Accessing the global object directly in Node.js
console.log(global.Buffer); // logs the Buffer class

// Accessing the global object in a cross-environment way
console.log(globalThis.setTimeout === setTimeout); // logs true

// Accessing the console from globalThis
globalThis.console.log('This is a log message.'); // logs "This is a log message."

// Setting a global variable via globalThis
globalThis.myGlobalVar = 'Hello, global!';
console.log(myGlobalVar); // logs "Hello, global!"
