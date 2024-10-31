/*NASLOV ZADATKA:
Dat je pozitivan ceo broj miliseka, napišite asinhronu funkciju koja spava u milisekundi. Može da reši bilo koju vrednost.

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Moramo da napišemo asinhronu funkciju koja spava za dati broj milisekundi, a zatim rešava bilo koju vrednost

*/
/**
 * @param {number} millis
 * @return {Promise}
 */

async function sleep(millis) {
    return new Promise(delayresolve => setTimeout(delayresolve, millis));
}
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) 