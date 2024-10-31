/** RESENJE ZADATKA:
 * Da bismo memorisali funkciju, možemo kreirati keš objekat koji čuva rezultate prethodnih poziva funkcije. Kad god se funkcija pozove, proveravamo da li keš već ima rezultat za date ulazne parametre. Ako jeste, vraćamo keširani rezultat. U suprotnom, izračunavamo rezultat i čuvamo ga u keš memoriji za buduću upotrebu.
 * 
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
    }
}

const memoizedSum = memoize(function (a, b) {
    return a + b;
});

console.log(memoizedSum(2, 3));
console.log(memoizedSum(2, 3));

