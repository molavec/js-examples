/**
*  filename:  Array.prototype.reduce
*
* Description:
*  Suma o concatena los elementos de un arreglo,
*  de par en par. A veces se debe agregar después
*  del callback(function) un elemento 'prev' con una coma ','
*
* How execute:
* $ node array/example34.js 
* $ yarn array:example34
*
*/

const albums = [
    {
        title: 'Holiday in Spain',
        images: ['01.jpg', '02.jpg']
    },
    {
        title: 'House renovation',
        images: ['03.jpg', '04.jpg', '05.jpg']
    }
];

const numImages = albums.reduce((prev, album) => {
    return prev + album.images.length;
}, 0)
console.log(numImages);

const images = albums.reduce((prev, album) => {
    return prev.concat(album.images);
}, []);
console.log(images);
