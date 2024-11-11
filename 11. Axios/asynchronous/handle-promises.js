console.log("Script Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve()
    .then(() => console.log("Promise 1 Resolved"))
    .then(() => console.log("Promise 2 Resolved"));

console.log("Script End");
