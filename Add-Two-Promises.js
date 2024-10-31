/*NASLOV ZADATKA:
Uz dva obećanja obećanje1 i obećanje2, vratite novo obećanje. obećanje1 i obećanje2 će se rešiti brojem. Vraćeno obećanje treba da se reši zbirom dva broja.

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

pristup:
Koristite metod Promise.all() zajedno sa avait da sačekate da se oba obećanja reše. Kada se reše, njihove vrednosti se preuzimaju i čuvaju u promenljivim vrednost1 i vrednost2. Konačno, vraća se novo obećanje sa zbirom vrednosti1 i vrednosti2*/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

var addTwoPromises = async function (promise1, promise2) {

    const [value1, value2] = await Promise.all(promise1, promise2);

    return value1 + value2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);