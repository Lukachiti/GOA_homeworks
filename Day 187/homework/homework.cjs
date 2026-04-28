const EventEmitter = require('events');

const myEmitter = new EventEmitter();


myEmitter.on('HW', () => {
    console.log("Hello World");
});


myEmitter.on('H', (name) => {
    console.log(`Hello, ${name}`);
});


myEmitter.on('U', () => {
    console.log("User logged in");
});
myEmitter.on('WB', () => {
    console.log("Welcome back!");
});


myEmitter.on('Sum', (a, b) => {
    console.log(a + b);
});


myEmitter.on('Error', () => {
    console.log("Something went wrong");
});


myEmitter.emit('HW');
myEmitter.emit('H', 'Luka');
myEmitter.emit('U');
myEmitter.emit('Sum', 10, 15);
myEmitter.emit('Error');