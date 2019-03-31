const { Writable } = require('stream');

/**
 * Obtiene contenido de stdin y lo muestra en pantalla
 */

module.exports = () => {

  // Alternativa 1
  //process.stdin.pipe(process.stdout);

  // Alternativa 2
  const outStream = new Writable({
    write(chunk, encoding, callback) {
      console.log(chunk.toString());
      callback();
    }
  });
  process.stdin.pipe(outStream);

}
