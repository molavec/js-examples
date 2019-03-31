const fs = require('fs')
const serverFile = require('http').createServer()
const serverStream = require('http').createServer()

/**
 * Nota para poder utilizar este ejemplo ejecuta 'node big-file-generator'
 */
const BIG_FILE = './big_files/big.csv'

/**
 * Alternativa 1
 *
 * Poco eficiente. Consume mucha memoria porque lee todo el archivo
 */
const bigFileServer = () =>{

  serverFile.on('request', (req, res) => {
    // lee todo el archivo  lo envia
    fs.readFile(BIG_FILE, (err, data) => {
      if (err) throw err
      console.log("se envia todo el archivo")
      res.end(data)
    })
  })

  serverFile.listen(8000)
  console.log("visita http://localhost:8000")

}


/**
 * Alternativa 2
 *
 * Mucho más eficiente porque entrega el archivo mediante stream
 *
 */

const streamServer = () =>{

  serverStream.on('request', (req, res) => {
    // crea un stream para ir entregando el archivo de a poco
    const src = fs.createReadStream(BIG_FILE)
    src.pipe(res)
  })

  serverStream.listen(8001)
  console.log("visita http://localhost:8001")

}

module.exports = { bigFileServer, streamServer }