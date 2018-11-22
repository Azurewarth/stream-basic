const { Transform } = require('stream')

class CommaSplit extends Transform {
    constructor() {
        super({
            readableObjectMode: true,
            writableObjectMode: true
        })
    }
    
    _transform(chunk, enc, next) {
        this.push(chunk.toString().trim().split(','))
        next && next()
    }
}

class ObjToString extends Transform {
    constructor() {
        super({
            readableObjectMode: true,
            writableObjectMode: true
        })
    }
    
    _transform(chunk, enc, next) {
        this.push(JSON.stringify(chunk))
        next && next()
    }
}

const commasplit = new CommaSplit()
const objtostring = new ObjToString()
process.stdin.pipe(commasplit).pipe(objtostring).pipe(process.stdout)