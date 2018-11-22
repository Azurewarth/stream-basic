const { Readable } = require('stream')

class InStream extends Readable {
    constructor() {
        super()
    }
    _read(size) { 
        this.push(String.fromCharCode(this.currentCharCode++))
        if(this.currentCharCode > 90) {
            this.push(null)
        }
    }
}

const inStream = new InStream()

// inStream.push('ABCDEFG')
// inStream.push('HIJKLMN')

// inStream.push(null)
inStream.currentCharCode = 65

inStream.pipe(process.stdout)

// const { Readable } = require('stream'); 
// const inStream = new Readable({
//   read() {}
// });
// inStream.push('ABCDEFGHIJKLM');
// inStream.push('NOPQRSTUVWXYZ');
// inStream.push(null); // No more data
// inStream.pipe(process.stdout);