// --- var Example ---
function varExample() {
    if (true) {
        // This variable is function-scoped, not block-scoped.
        // So, it's available throughout the entire function.
        var functionScopedVar = "I'm function-scoped!";
    }

    console.log(functionScopedVar); // Outputs: "I'm function-scoped!"
}

varExample();

try {
    // This will throw an error since functionScopedVar was declared inside the function
    console.log(functionScopedVar);
} catch (error) {
    console.log('functionScopedVar is not accessible outside the function.'); // This will be printed
}

// --- let Example ---
function letExample() {
    if (true) {
        // This variable is block-scoped, so it's only available within this block.
        let blockScopedLet = "I'm block-scoped!";
        console.log(blockScopedLet); // Outputs: "I'm block-scoped!"
    }
    //console.log(functionScopedVar); // Error: "not defined"


    try {
        console.log(blockScopedLet);
    } catch (error) {
        console.log('blockScopedLet is not accessible outside the block.'); // This will be printed
    }
}

letExample();

// --- const Example ---
function constExample() {
    const immutableValue = "I can't be changed!";
    console.log(immutableValue); // Outputs: "I can't be changed!"

    try {
        immutableValue = "Trying to change me?";
    } catch (error) {
        console.log("Error:", error.message); // Outputs an error indicating assignment to constant variable.
    }
}

constExample();

// --- Global Scope ---
let globalLet = "I'm globally scoped!";
const globalConst = "I'm also globally scoped!";

console.log(globalLet);   // Outputs: "I'm globally scoped!"
console.log(globalConst); // Outputs: "I'm also globally scoped!"

// Note: These global variables created by 'let' and 'const' won't be properties of the global object.
// So, in a browser, `window.globalLet` and `window.globalConst` would be undefined.
