/**
*  filename:  Promise
*
* Description:
*  Practicando Promises
*
* How execute:
* $ node promise/example14.js
* $ node yarn: filename
*
*/

const printIn1Sec = (function() {

    function setTimeoutPromise(timeout) {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    function printIn1Sec(value, promise) {
        const newPromise = promise
            .then(() => setTimeoutPromise(1000))
            .then(() => console.log(value));

        return {
            printIn1Sec(value) {
                return printIn1Sec(value, newPromise);
            },
        };
    }

    return value => printIn1Sec(value, Promise.resolve());
}());

printIn1Sec(1)
    .printIn1Sec(2)
    .printIn1Sec(3);