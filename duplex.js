const { Duplex } = require('stream')

class IoStream extends Duplex {
    constructor(option) {
        super()
        let op = option || {}
        this.encode = op.encode
        this.next = op.next
    }

    _write(chunk, enc, next) {
        console.log(chunk.toString())
        next && next()
    }

    _read(size) {
        this.push(String.fromCharCode(this.currentCharCode++))
        if(this.currentCharCode > 90) {
            this.push(null)    
        }
    }
}

const iostream = new IoStream({
    encode: 'utf-8',
    next: () => {
        console.log('finish')
    }
})

iostream.currentCharCode = 65

process.stdin.pipe(iostream).pipe(process.stdout)