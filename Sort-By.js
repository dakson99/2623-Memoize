/* NASLOV ZADATKA

Dati niz arr i funkciju fn, vratite sortirani niz sortedArr. Možete pretpostaviti da fn vraća samo brojeve i da ti brojevi određuju redosled sortiranja sortedArr-a. sortedArr mora biti sortiran u rastućem redosledu prema fn izlazu.

Možete pretpostaviti da fn nikada neće duplirati brojeve za dati niz.

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.
*/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

const numbers = [-5, 3, -2, 1, -8];
const sortedByAbsolute = sortBy(numbers, Math.abs);

console.log(sortedByAbsolute);