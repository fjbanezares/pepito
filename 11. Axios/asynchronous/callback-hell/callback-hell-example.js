const fs = require('fs');

console.log('Script Start');

// Once upon a time in callback land...
fs.readFile('file1.txt', 'utf8', (err, content1) => {
    if (err) throw err;
    console.log(content1);

    // Deeper we go into the pyramid...
    fs.readFile('file2.txt', 'utf8', (err, content2) => {
        if (err) throw err;
        console.log(content2);

        // Where's my mummy? Oh wait, wrong pyramid.
        fs.readFile('file3.txt', 'utf8', (err, content3) => {
            if (err) throw err;
            console.log(content3);
        });
    });
});

console.log('Script End... or is it just the beginning?');
