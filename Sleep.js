/*NASLOV ZADATKA:
Dat je pozitivan ceo broj miliseka, napišite asinhronu funkciju koja spava u milisekundi. Može da reši bilo koju vrednost.

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Moramo da napišemo asinhronu funkciju koja spava za dati broj milisekundi, a zatim rešava bilo koju vrednost

*/
/**
 * @param {number} millis
 * @return {Promise}
 */

// async function sleep(millis) {
//     return new Promise(delayresolve => setTimeout(delayresolve, millis));
// }

// async function sleep(millis) {
//     return new Promise((delayresolve, reject) => {
//         if (typeof millis !== 'number' || isNaN(millis)) {
//             reject(new Error('Invalid argument. Expected a number.'));
//         } else {
//             setTimeout(delayresolve, millis);
//         }
//     });
// }

let t = Date.now();

async function sleep(millis) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, millis);
    });

    let response = await promise;
}

sleep(100).then(() => console.log(Date.now() - t));

// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t))
