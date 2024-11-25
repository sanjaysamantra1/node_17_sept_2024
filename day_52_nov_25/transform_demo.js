const { Transform } = require('stream');

// create a transform stream
const uppercasetransformStream = new Transform({
    transform(chunk, encoding, callback) {
        // transform the received chunk data to uppercase
        const transformedData = chunk.toString().toUpperCase();

        // push the transformed data to the stream
        this.push(transformedData);

        callback();
    }
})

uppercasetransformStream.on('data', (chunk) => {
    console.log('received transformed data', chunk.toString())
})

uppercasetransformStream.write('Hello,Hiiii, Good MOrning!!!')
