
// Argumentos de proceso
// process.argv contiene los argumentos de línea de comandos.

export function getArgs() {
  return process.argv.slice(2);
}

export function printArgs() {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
}
