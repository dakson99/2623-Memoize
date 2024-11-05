/*NASLOV ZADATKA:

Date funkciju fn i vreme u milisekundama t, vratite verziju te funkcije bez odbijanja.
Debounced funkcija je funkcija čije je izvršenje odloženo za t milisekundi i čije se izvršenje otkazuje ako se ponovo pozove unutar tog vremenskog perioda. Funkcija debounced takođe treba da primi prosleđene parametre.
Na primer, recimo t = 50ms, a funkcija je pozvana na 30ms, 60ms i 100ms.
Prva 2 poziva funkcije bi bila otkazana, a treći poziv funkcije bi bio izvršen na 150 ms.
Ako bi umesto t = 35ms, prvi poziv bi bio otkazan, drugi bi se izvršio na 95ms, a treći bi bio izvršen na 135ms.
https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-11048-pm.png
Gornji dijagram pokazuje kako će debounce transformisati događaje. Svaki pravougaonik predstavlja 100 ms, a vreme odbijanja je 400 ms. Svaka boja predstavlja drugačiji skup ulaza.
Rešite ga bez upotrebe lodash-ove _.debounce() funkcije.

Given a function fn and a time in milliseconds t, return a debounced version of that function.
A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.
For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.
The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.
If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.
https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-11048-pm.png
The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.
Please solve it without using lodash's _.debounce() function.
*/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

var debounce = function (fn, t) {
    let timeout = null;

    return function (...args) {
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), t);
    }
};

const log = debounce(console.log, 100);
log('Hello');
log('Hello');
log('Hello');
