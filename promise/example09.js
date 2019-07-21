const { normalTask, delayTask, callbackTask, callbackDelayTask, asyncTaskPromise, asyncTaskAwait } = require('./tasks')
/**
 * Ejemplos para gestionar Errores
 * https://til.hashrocket.com/posts/aucwkd8b36-asyncawait-unhandledpromiserejectionwarning
 *
 */

promise13 = () => {
  return new Promise((resolve, reject) => { reject(13)})
}

(async () => {
  let num = await promise13(); // UnhandledPromiseRejectionWarning
  console.log('num', num);
})();

(async () => {
  try {
    let num = await promise13();
    console.log('num', num);
  } catch(e) {
    console.log('Error caught');
  }
})();

(async () => {
  let num = await promise13().catch((err) => console.log('caught it'));
  console.log('num', num);
})();


console.log('--> Final')
