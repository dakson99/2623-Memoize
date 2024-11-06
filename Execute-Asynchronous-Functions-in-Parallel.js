/* NASLOV ZADATKA:

S obzirom na niz funkcija asinhronih funkcija, vratite obećanje novog obećanja. Svaka funkcija u nizu ne prihvata argumente i vraća obećanje. Sva obećanja treba da se izvršavaju uporedo.

obećanje rešava:

Kada su sva obećanja vraćena iz funkcija bila uspešno rešena paralelno. Rešena vrednost obećanja treba da bude niz svih rešenih vrednosti obećanja u istom redosledu kao što su bile u funkcijama. Obećanje bi trebalo da se reši kada sve asinhrone funkcije u nizu završe izvršenje paralelno.
obećanje odbija:

Kada je bilo koje od obećanja vraćenih sa funkcija odbijeno. obećanje takođe treba da odbije sa razlogom prvog odbijanja.
Rešite ga bez korišćenja ugrađene funkcije Promise.all

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
*/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, i) => {
            fn()
                .then(val => {
                    results[i] = val;
                    count++;
                    if (count === functions.length)
                        resolve(results);
                })
                .cache(reason => reject(reason));
        });
    });
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log);