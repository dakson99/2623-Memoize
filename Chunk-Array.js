/* NASLOV ZADATKA

Dati niz arr i veličinu komada, vratite niz podeljen na komade.
umesto [1,2,3,4,5] ide [1,2], [3,4], [5,6]
Niz u komadima sadrži originalne elemente u arr, ali se sastoji od podnizova veličine dužine. Dužina poslednjeg podniza može biti manja od veličine ako arr.length nije ravnomerno deljiva veličinom.

Možete pretpostaviti da je niz izlaz JSON.parse. Drugim rečima, to je važeći JSON.

Rešite ga bez upotrebe lodash-ove _.chunk funkcije.

Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function (arr, size) {
    const chunkedArray = [];

    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size));
    }

    return chunkedArray;
}

console.log(chunk([1, 2, 3, 4, 5, 6], 2)); // [[1, 2], [3, 4], [5, 6]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]