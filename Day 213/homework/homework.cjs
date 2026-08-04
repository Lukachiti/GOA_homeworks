const express = require('express');

let PORT = 3000;
let num1 = 10;
let num2 = 20;
let app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});
app.get('/about', (req, res) => {
    res.send('About page');
});
app.get('/contact', (req, res) => {
    res.send({
  "email": "example@gmail.com",
  "phone": "555123456"
})
});
app.get('/user', (req, res) => {
    res.send({
        "id": 1,
        "name": "luka chitidze",
        "age": 20,
        
    });
});
app.get('/sum', (req, res) => {
    let sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 