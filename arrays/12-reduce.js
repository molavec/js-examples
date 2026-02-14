
// Array.prototype.reduce()
// El método reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha)
// para reducirlo a un único valor.

export function sumElements(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

export function countTotalImages(albums) {
  return albums.reduce((acc, album) => acc + album.images.length, 0);
}

export function flattenImages(albums) {
  // Concatena todos los arrays de images en uno solo
  return albums.reduce((acc, album) => acc.concat(album.images), []);
}

export function keyById(users) {
  // Transforma array de usuarios a un objeto indexado por ID
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}
