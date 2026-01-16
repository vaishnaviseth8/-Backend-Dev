const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }

    const words = data.trim().split(/\s+/);
    const wordCount = words.length;

    fs.writeFile('output.txt', `Word Count: ${wordCount}`, (err) => {
        if (err) {
            console.error('Error writing file:', err.message);
            return;
        }
        console.log('Word count written to output.txt');
    });
});


