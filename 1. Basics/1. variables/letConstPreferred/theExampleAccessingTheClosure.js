function demoVar() {
    var funcs = [];

    for (var i = 0; i < 3; i++) {
        console.log(i);

        funcs.push(function () {
            console.log(i);
        });
    }

    // Getter for the 'i' variable
    function getI() {
        return i;
    }

    // Return the funcs array and the getter
    return {
        funcs: funcs,
        getI: getI
    };
}

var result = demoVar();

// Use the funcs array as before
var functions = result.funcs;

{
    var i = 4;
    functions.push(function () {
        console.log(i);
    });
}

{
    var i = 2;
    functions.push(function () {
        console.log(i);
    });
}

{
    let i = 77;
    functions.push(function () {
        console.log(i);
    });
}



functions[0](); // Outputs 3
functions[1](); // Outputs 3
functions[2](); // Outputs 3
functions[3](); // Outputs 2
functions[4](); // Outputs 2
functions[5](); // Outputs 77 as i belongs to block


// Use the getter to access the 'i' variable from demoVar
console.log(result.getI());  // Outputs 3

// The global 'i'
console.log("now the global i");

console.log(i);  // Outputs 2
