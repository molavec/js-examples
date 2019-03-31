const fs = require('fs');

const BIG_FILES_DIR = './big_files'
const BIG_FILE = 'big.csv'

const MAX_LINE = 100000
const MAX_COL = 100

//let MAX_LINE = 100
//let MAX_COL = 10

module.exports = () => {

  //1.- Verifica que la carpeta exista. En caso contrario la crea.
  if(!fs.existsSync(BIG_FILES_DIR)){
    fs.mkdirSync(BIG_FILES_DIR)
  }

  //versión con callback
  /*
  fs.exists(BIG_FILES_DIR, (exists) => {
    if(!exists){
      fs.mkdir(BIG_FILES_DIR, (err)=> {
        if (err)
          console.error("No es posible crear la carpeta")
      })
    }
  })
  */

  // 2.- Envia datos al archivo
  const file = fs.createWriteStream(`${BIG_FILES_DIR}/${BIG_FILE}`);
  file.write('col1,col2,col3,col4,col5\n');
  for(let i=0; i<= MAX_LINE; i++) {
    let line = ''
    for(let j=0; j<= MAX_COL; j++) {
      line += `data_${i}_${j},`
    }
    file.write(`${line.substr(0,line.length-1)}\n`);
  }

  // 3.- Cierra el stram y muestra el tamaño del archivo
  file.end(() => {
    fs.stat(`${BIG_FILES_DIR}/${BIG_FILE}`, (err, stat) => {
      if(err){
        console.error(err)
      }
      console.log(`Ejemplo 1 - Tamaño del archivo: ${stat.size/1000000.0}M`)
    })
  });
}

