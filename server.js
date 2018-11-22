const fs = require('fs')
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    const src = fs.createReadStream('test.file')
    src.pipe(res)
})

server.listen(6000)