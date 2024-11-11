async function asyncWithoutAwait() {
    console.log("Inside async function without await");
    return "Returned value";
}

console.log("Before calling function");
let result = asyncWithoutAwait();
console.log(result);

console.log("After calling function");
result.then(value => console.log(value));
