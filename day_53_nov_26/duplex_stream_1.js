const { Duplex } = require('stream');
class myDuplex extends Duplex {
    constructor() {
        super();
    }
    _read(size) { }
    _write(chunk, encoding, callback) {
        let encrypted = btoa(chunk);
        this.push(encrypted);
        callback()
    }
}
let duplexStreamObj = new myDuplex();
duplexStreamObj.on('data', (chunk) => {
    console.log('Encypted:', chunk.toString())
})
duplexStreamObj.write('Helllo, Good Morning!!!')
