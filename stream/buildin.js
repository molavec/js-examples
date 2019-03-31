const fs = require('fs')
const zlib = require('zlib')

/**
 * Nota para poder utilizar este ejemplo ejecuta 'node big-file-generator'
 */
const file = './big_files/big.csv'

module.exports = () => {

  /**
   * Alternativa 1
   *
   * Muestra el progreso mediante eventos.
   */
  fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .on('data', () => process.stdout.write('.'))
    .pipe(fs.createWriteStream(file + '.zz'))
    .on('finish', () => {
      console.log('Done')
      console.log('File size: ' + fs.statSync(file+'.zz').size)
    })

  /**
   * Alternativa 2
   *
   * Muestra el progreso mediante un transform stream
   */
  /*
  const { Transform } = require('stream')

  const reportProgress = new Transform({
    transform(chunk, encoding, callback) {
      process.stdout.write('.')
      callback(null, chunk)
    }
  })

  fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(reportProgress)
    .pipe(fs.createWriteStream(file + '.zz'))
    .on('finish',() => {
      console.log('Done')
      console.log('File size: ' + fs.statSync(file+'.zz').size)
    })
  */

  /**
   * Ejemplo con encriptación
   */
  /*
  const crypto = require('crypto')
  fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipher('aes192', 'a_secret'))
  .on('data', () => process.stdout.write('.'))
  .pipe(fs.createWriteStream(file + '.zzc'))
  .on('finish', () => {
      console.log('Done')
      console.log('File size: ' + fs.statSync(file+'.zzc').size)
    })
  */

  /**
   * Ejemplo desencriptación
   */
  /*
  const crypto = require('crypto')
  fs.createReadStream(file+'.zzc')
    .pipe(crypto.createDecipher('aes192', 'a_secret'))
    .pipe(zlib.createGunzip())
    .on('data', () => process.stdout.write('.'))
    .pipe(fs.createWriteStream(file.slice(0, -4)+'2.csv'))
    .on('finish', () => {
      console.log('Done')
      console.log('File size: ' + fs.statSync(file.slice(0, -4)+'2.csv').size)
    })
  */
}

