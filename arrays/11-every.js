
// Array.prototype.every()
// El método every() comprueba si todos los elementos del array cumplen con la condición
// implementada por la función proporcionada. Retorna true o false.

export function allLessThan(arr, value) {
  return arr.every(x => x < value);
}

export function areAllStrings(arr) {
  return arr.every(x => typeof x === 'string');
}

export function areAllVideosViewed(videos) {
  // Verifica si todos los videos han sido vistos completamente (viewed === length)
  return videos.every(x => x.viewed === x.length);
}
