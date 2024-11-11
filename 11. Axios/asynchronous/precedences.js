console.log('Script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
}).then(() => {
    console.log('Promise 2');
});

console.log('Script end');


//Even though setTimeout and Promise.resolve have almost the same delay(virtually 0ms), 
//the Promise callbacks are executed first because they're in the micro-task queue, 
//which gets processed right after the current executing script(a macro - task) 
b//efore moving on to other macro - tasks like setTimeout.