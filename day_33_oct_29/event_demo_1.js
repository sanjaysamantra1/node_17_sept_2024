const { EventEmitter } = require('events');

const eventEmitterObj = new EventEmitter();

eventEmitterObj.on('customEvent1', () => {
    console.log('customEvent1 fired...')
})
eventEmitterObj.emit('customEvent1')

eventEmitterObj.on('customEvent2', (name, age, add) => {
    console.log(`${name} is ${age} years old, he is from ${add}`)
})
eventEmitterObj.emit('customEvent2', 'sanjay', 50, 'Bangalore')


