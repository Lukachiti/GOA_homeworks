const fs = require('fs');


fs.writeFile('homework.txt', 'This is my homework.', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    
    } else {
    console.log('File created successfully.');
    }
});

fs.readFile('homework.txt', 'utf8', (err, data) => {
    if (err) {  
        console.error('Error reading file:', err);
    } else {
        console.log(data);
    }
});
fs.appendFile('homework.txt', 'additional text', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('File appended successfully.');
    }   
});
fs.writeFile('homework2.txt', JSON.stringify({ name: 'luka', age: 15}), (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('File created successfully.');
    }
});
fs.rename('homework2.txt', 'homework3.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully.');
    }

});

fs.unlink('homework3.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully.');
    }
});



