function asyncTask(callback) {
    console.log("Starting async task...");

    setTimeout(() => {
        console.log("Async task completed.");
        callback("Result of the async task");
    }, 1000);
}

function main() {
    console.log("Before calling asyncTask.");

    asyncTask((result) => {
        console.log("Callback received result:", result);
    });

    console.log("After calling asyncTask.");
}

main();
