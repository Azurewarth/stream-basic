const { Writable } = require('stream')

class OutStream extends Writable {
    constructor(option) {
        super()
        let op = option || {}
        this.encode = op.encode
        this.next = op.next
    }
    _write(chunk, enc = this.encode, next = this.next) {
        console.log(chunk.toString())
        next && next()
    }
}

const outStream = new OutStream({
    encode: 'utf-8',
    next: () => {
        console.log('finish')
    }
})

process.stdin.pipe(outStream)