
// Array.prototype.join()
// El método join() une todos los elementos de un array (o un objeto similar a un array)
// en una cadena y devuelve esta cadena.

export function basicJoin(arr, separator) {
  // Si el separador se omite, los elementos del array son separados con una coma.
  // Si el separador es una cadena vacía, los elementos son unidos sin ningún caracter entre ellos.
  return arr.join(separator);
}

// Ejemplo complejo: Capitalizar palabras
// Este ejemplo combina split, map y join para transformar un string.
export function capitalizeWords(str) {
  if (!str) return '';
  return str.split(' ')
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
}
