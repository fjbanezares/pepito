const fs = require('fs').promises;

console.log('Script Start');

// Promising a better future (pun intended)!
fs.readFile('file1.txt', 'utf8')
    .then(content1 => {
        console.log(content1);
        // On to the next one, like a promise chain conveyor belt!
        return fs.readFile('file2.txt', 'utf8');
    })
    .then(content2 => {
        console.log(content2);
        // Promises, Promises. It's a chain reaction!
        return fs.readFile('file3.txt', 'utf8');
    })
    .then(content3 => {
        console.log(content3);
    })
    .catch(err => {
        // Oops! A break in the chain. Handle with care!
        console.error(err);
    });

console.log('A promising end! 😉');
