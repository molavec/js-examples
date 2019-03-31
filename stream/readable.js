const { Readable, Writable } = require('stream')

module.exports = () => {

  /**
   * Alternativa 1
   *
   * Alternativa poco eficiente ya que mete todo el contenido en el productor
   * antes de que el consumidor pueda procesarla
   * lo que puede saturar la memoria en caso de mucha información
   */
  const inStream = new Readable({
    read() {}
  })
  inStream.push('ABCDEFGHIJKLM')
  inStream.push('NOPQRSTUVWXYZ')
  inStream.push(null) // No more data
  // TIP: Comenta la siguiente línea y prueba lo que ocurre con el Writable stream con delay
  inStream.pipe(process.stdout)

  /**
   * Alternativa 2
   *
   * Alternativa poco eficiente ya que mete todo el contenido en el productor
   * antes de que el consumidor pueda procesarla
   * lo que puede saturar la memoria en caso de mucha información
   * Realiza un loop hasta que llena el buffer y luego espera a que el consumidor pueda
   * terminar de consumir la información se libere parte del buffer.
   */
  /*
  const inStream = new Readable({
    read(size) {
      console.log("---->" + this.currentCharCode )
      this.push(this.currentCharCode + ': ' + String.fromCharCode(this.currentCharCode++) + ' - \n')
      //TIP: descubre que pasa si eliminas esta condición.
      if (this.currentCharCode > 90) {
        this.push(null)
      }
    }
  })
  inStream.currentCharCode = 65
  // TIP: Comenta la siguiente línea y prueba lo que ocurre con el Writable stream con delay
  inStream.pipe(process.stdout)
  */

  // Alternativa 3
  /**
   * se utilizar una Writable stream que tiene un delay para simular que pasa cuando el
   * el consumidor es más lento que el productor.
   */
  /*
  const outStream = new Writable({
    write(chunk, encoding, callback) {
      setTimeout(() => {
        process.stdout.write(chunk)
        callback()
      }, 1000)

    }
  })
  inStream.pipe(outStream)
  */

}