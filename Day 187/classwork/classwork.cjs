const emitter = require('events');

class Message extends emitter {
    constructor() {
        super();
        this.on('message', (msg) => {
            console.log(`[Received message]: ${msg}`);
        });
    }
}

const message = new Message();
message.emit('message', 'Hello, World!');


const myEmitter = new emitter();

myEmitter.on('start', () => {
    console.log('Program started ✅');
});

myEmitter.on('data', (num) => {
    console.log(`[Data]: ${num} is ${num % 2 === 0 ? 'even' : 'odd'}`);
});
myEmitter.on('end', () => {
    console.log('Program ended ❌');
});

myEmitter.emit('start');
myEmitter.emit('data', 42);
myEmitter.emit('data', 17);
myEmitter.emit('end');
