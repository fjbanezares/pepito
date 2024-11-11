function demoVar() {
    // Declare an empty array to store the functions.
    var funcs = [];

    // Start the for loop.
    for (var i = 0; i < 3; i++) {
        // This logs the current value of i during each iteration.
        console.log(i);

        // Push a new function to the funcs array. 
        // Each function, when called, will log the current value of i.
        // However, since `i` is function-scoped due to the `var` keyword,
        // all the functions will reference the same value of i, which will be 3 after the loop ends.
        funcs.push(function () {
            console.log(i);
        });
    }
    // Return the funcs array with all the functions added.
    return funcs;
}

// Execute the demoVar function and store the returned array of functions in the "functions" variable.
var functions = demoVar();

// New block scope, but note that `var` doesn't respect block scope.
{
    // This re-declaration of `i` is essentially ignored due to hoisting.
    // The value of the global `i` is now set to 4.
    var i = 4;

    // Push a new function to the functions array. 
    // This function will log the value of the outer (global) i, which is currently 4.
    functions.push(function () {
        console.log(i);
    });
}

// Another block scope.
{
    // This overwrites the previous global value of `i` and sets it to 2.
    var i = 2;

    // Push a new function to the functions array. 
    // This function will log the value of the outer (global) i, which is now 2.
    functions.push(function () {
        console.log(i);
    });
}

// Testing the functions stored in the "functions" array:

// The first three functions were added during the for loop in demoVar.
// They all reference the same function-scoped `i`, which has a value of 3 after the loop ends.
functions[0](); // Outputs 3
functions[1](); // Outputs 3
functions[2](); // Outputs 3

// The fourth function was added in the first block scope.
// It references the global `i` which had a value of 4 at that time.
// However, since `i` was later overwritten to 2, this function outputs 2.
functions[3](); // Outputs 2

// The fifth function was added in the second block scope.
// It references the global `i`, which has a value of 2.
functions[4](); // Outputs 2

// As observed, there are two variables with the name `i`.
// One is function-scoped within demoVar, and the other is global-scoped.
console.log(i);
console.log(demovar.i);