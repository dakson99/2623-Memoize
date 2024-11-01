/*NASLOV ZADATKA:

Dati funkciju fn, niz argumenata args i vremensko ograničenje t u milisekundama, vratite funkciju otkazivanja cancelFn.
Nakon kašnjenja od cancelTimeMs, vraćena funkcija cancelFn će biti pozvana.
setTimeout(cancelFn, cancelTimeMs)
U početku, izvršenje funkcije fn treba da bude odloženo za t milisekundi.
Ako se, pre kašnjenja od t milisekundi, pozove funkcija cancelFn, ona bi trebalo da poništi odloženo izvršenje fn. U suprotnom, ako se cancelFn ne pozove unutar navedenog kašnjenja t, fn bi trebalo da se izvrši sa navedenim argumentima kao argumentima.

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.
f, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
*/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const cancellabel = function (fn, args, t) {

    const cancelFn = function () {
        clearTimeout(timer);
    }

    const timer = setTimeout(() => {
        fn(...args)
    }, t);

    return cancelFn;
}

