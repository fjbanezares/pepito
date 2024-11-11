console.log('Script Start');

async function asyncFunc() {
    console.log('Inside asyncFunc Start');
    await anotherAsyncFunc();
    console.log('Inside asyncFunc End');
}

async function anotherAsyncFunc() {
    console.log('Inside anotherAsyncFunc');
    return "Done";
}

asyncFunc();

console.log('Script End');
