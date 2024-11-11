const fs = require('fs').promises;

console.log('Script Start');

async function readFiles() {
    try {
        // I'll just "await" over here while you read the file.
        const content1 = await fs.readFile('file1.txt', 'utf8');
        console.log(content1);

        // Patiently awaiting the next file...
        const content2 = await fs.readFile('file2.txt', 'utf8');
        console.log(content2);

        // The final await-ening! 🥁
        const content3 = await fs.readFile('file3.txt', 'utf8');
        console.log(content3);
    } catch (err) {
        // Oh no! An async-tastrophe!
        console.error(err);
    }
}

readFiles();

console.log('End of the async road! Or is it the await of a new journey?');
