console.log("Script Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

// Create an async function
async function handlePromises() {
    // We can use await here since it's an async function
    await Promise.resolve();
    console.log("Promise 1 Resolved");

    await Promise.resolve();
    console.log("Promise 2 Resolved");
}

// Invoke the async function
handlePromises();

console.log("Script End");

//  With async / await, the asynchronous code appears and reads much like synchronous code.You can more clearly see the sequence of operations, without diving into chains of.then() calls.