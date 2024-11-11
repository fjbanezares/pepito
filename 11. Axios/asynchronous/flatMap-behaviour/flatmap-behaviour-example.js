function getData() {
    return Promise.resolve('data');
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data + ' processed');
        }, 1000);
    });
}

getData()
    .then(processData)    // <--- This could create a Promise inside a Promise, but it doesn't.
    .then(console.log);   // Logs "data processed" after 1 second


// just getData resolves a promise with a value, 

//  When you call resolve(someValue), you're telling the promise: 
// "You're done, and your result is someValue". 
// Any.then() chained to that promise will then get called with someValue as its argument.