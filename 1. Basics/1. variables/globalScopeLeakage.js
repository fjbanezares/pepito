// 1. Intentional Global Variable
// This variable is explicitly declared using 'var', 
// making it globally scoped, meaning it can be accessed anywhere in the program.
var globalVar = "I am a global variable";

function displayGlobalVar() {
    // Since 'globalVar' is declared outside any function, 
    // it is accessible here as a global variable.
    console.log(globalVar); // Outputs: "I am a global variable"
}

displayGlobalVar();

// 2. Accidental Global Variable
function setGlobalAccidentally() {
    // Here, the variable 'accidentalGlobal' is being assigned a value,
    // but there is no 'var', 'let', or 'const' keyword. 
    // As a result, JavaScript interprets this as a global variable assignment.
    // This is known as "global scope leakage" and can lead to unintended side effects.
    accidentalGlobal = "I am accidentally global";  // No 'var' keyword used!
}

setGlobalAccidentally();
// Since 'accidentalGlobal' was assigned without 'var', it is treated as a global variable.
// Therefore, we can access it outside the function, even though it was created inside.
console.log(accidentalGlobal); // Outputs: "I am accidentally global"

// 3. Potential Side Effects
// This example shows how unintended global variables can create conflicts.

function setVariable() {
    // Here, the assignment of 'someValue' without 'var' makes it a global variable.
    // This can accidentally overwrite or conflict with other variables in the global scope.
    someValue = 10;  // Accidentally global
}

function anotherFunction() {
    // In this function, 'someValue' is declared using 'var', meaning it is local 
    // to this function. However, since there is already a global 'someValue' variable
    // (from the 'setVariable' function), this local variable will shadow the global one.
    var someValue = 20;  // Local to this function, shadows the global 'someValue'
    console.log(someValue); // Outputs the local 'someValue', which is 20.
}

setVariable();
anotherFunction(); // Outputs: 20 (local 'someValue' inside anotherFunction)

// After calling 'anotherFunction', the global 'someValue' remains unchanged by 
// 'anotherFunction' (because 'var' created a local scope), 
// but the global value was previously set to 10 in 'setVariable'.
console.log(someValue);  // Outputs: 10 (global 'someValue' from 'setVariable')
// By using let or const, you can avoid these pitfalls, since these keywords provide block-scoping rather than function-scoping, and prevent accidental global variable creation.