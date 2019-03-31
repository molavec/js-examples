const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
  //Usado en el Ejemplo 1
  normalTask(){
    let i = 0
    /*
    while(i < 10 * 1000){
      console.log(i)
      i++
    }
    */
    return 'normalTask'
  },
  //Usado en el Ejemplo 2
  delayTask(delaySeconds) {
    setTimeout( () => {
      let taskName = 'delayTask'
      console.log('Ejemplo 2: Se imprime el task name desde el interior de la función "delayTask": ' + taskName)
      return taskName;
    }, delaySeconds * 1000)
  },
  //Usado en el Ejemplo 3
  callbackTask(callback){
    let taskName = 'callbackTask'
    callback(taskName)
    return taskName
  },
  //Usado en el Ejemplo 4
  callbackDelayTask(delaySeconds, callback){
    let taskName = 'callbackDelayTask'
    setTimeout( () => callback(taskName), delaySeconds * 1000)
    return taskName
  },
  //Usado en el Ejemplo 5 y 6
  async asyncTaskPromise(delaySeconds) {
    let taskName = 'asyncTaskPromise'
    return new Promise((resolve) => {
      setTimeout( () => resolve(taskName), delaySeconds * 1000)
    })
  },
  //Usado en el Ejemplo 7 y 8
  /**
   * En este ejemplo se utiliza una conversión de la función 'setTimeout'
   * en una promesa mediante require('util').promisify(setTimeout) con lo
   * que se puede utlizar una función "sleep" que retorna una promesa directamente.
   */
  async asyncTaskAwait(delaySeconds) {
    let taskName = 'asyncTaskAwait'
    await sleep(delaySeconds * 1000)
    return taskName;
  }
}