/* NASLOV ZADATKA:

Dati funkciju fn, niz argumenata args i interval vremena t, vratite funkciju otkazivanja cancelFn.
Nakon kašnjenja od cancelTimeMs, vraćena funkcija cancelFn će biti pozvana.
setTimeout(cancelFn, cancelTimeMs)
Funkciju fn treba odmah pozvati sa args, a zatim ponovo pozvati svakih t milisekundi dok se cancelFn ne pozove u cancelTimeMs ms

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms
*/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};

let sayHello = (name) => console.log(`Hello, ${name}!`);

let cancel = cancellable(sayHello, ["Alice"], 2000);

setTimeout(cancel, 5000);

// const result = [];

// const fn = (x) => x * 2;
// const args = [4], t = 35, cancelTimeMs = 190;

// const start = performance.now();

// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({ "time": diff, "returned": fn(...argsArr) });
// }

// const cancel = cancellable(log, args, t);

// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//     console.log(result); // [
//     //     {"time":0,"returned":8},
//     //     {"time":35,"returned":8},
//     //     {"time":70,"returned":8},
//     //     {"time":105,"returned":8},
//     //     {"time":140,"returned":8},
//     //     {"time":175,"returned":8}
//     // ]
// }, cancelTimeMs + t + 15)   