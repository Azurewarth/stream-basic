const { Transform } = require('stream')

class MyTransform extends Transform {
    constructor() {
        super()
    }

    _transform(chunk, enc, next) {
        this.push(chunk.toString().toUpperCase())
        next && next()
    }
}

const mytransfrom = new MyTransform()

process.stdin.pipe(mytransfrom).pipe(process.stdout)