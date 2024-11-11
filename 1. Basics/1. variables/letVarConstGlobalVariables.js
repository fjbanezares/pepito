var globalVar = "I'm a global variable declared with var";
console.log(globalVar); // Outputs: "I'm a global variable declared with var"
console.log(window.globalVar); // Outputs: "I'm a global variable declared with var"

let globalLet = "I'm a global variable declared with let";
console.log(globalLet); // Outputs: "I'm a global variable declared with let"
console.log(window.globalLet); // Outputs: undefined

const globalConst = "I'm a global variable declared with const";
console.log(globalConst); // Outputs: "I'm a global variable declared with const"
console.log(window.globalConst); // Outputs: undefined
