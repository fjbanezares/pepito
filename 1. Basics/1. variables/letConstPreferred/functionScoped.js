





// The 'for' loop begins. 'var i = 0' declares a variable 'i' in the function scope (or global scope if no function is present).
// 'i' is not block-scoped, so it persists across the entire function or script.
// As 'i' increments in each iteration, the 'setTimeout' function captures the same 'i' reference.
for (var i = 0; i < 3; i++) {

    // setTimeout schedules a callback function to be executed after 100 milliseconds.
    // The callback function inside setTimeout will be executed after the loop has already completed.
    // This function "closes over" the current reference to 'i'—but here's the tricky part:
    // Since 'var' is function-scoped, the value of 'i' continues to change as the loop runs,
    // but all the scheduled functions are referencing the same 'i' in memory.
    setTimeout(function () {

        // By the time this callback runs (after 100ms), the 'for' loop has already finished,
        // and 'i' has been incremented to 3 (which is the value that caused the loop to stop).
        // Since all the callbacks are referencing the same 'i', they will all output 3,
        // because 'i' has been incremented to 3 by the time any of the callbacks execute.
        console.log(i);  // Outputs: 3, 3, 3 (not 0, 1, 2 as one might expect)

    }, 100);
}

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        // Now, because 'let' is block-scoped, each iteration of the loop has its own copy of 'i'.
        // Each callback captures the value of 'i' that existed during that particular iteration.
        // This means the callbacks will output 0, 1, 2 as expected.
        console.log(i);  // Outputs: 0, 1, 2
    }, 100);
}
