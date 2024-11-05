/*NASLOV ZADATKA:

Napišite klasu koja omogućava dobijanje i postavljanje parova ključ-vrednost, ali vreme do isteka je povezano sa svakim ključem.
Klasa ima tri javne metode:
set(ključ, vrednost, trajanje): prihvata celobrojni ključ, celobrojnu vrednost i trajanje u milisekundama. Kada istekne vreme, ključ bi trebalo da bude nedostupan. Metoda treba da vrati true ako isti ključ koji nije istekao već postoji i false u suprotnom. I vrednost i trajanje bi trebalo da budu zamenjeni ako ključ već postoji.
get(key): ako postoji ključ koji nije istekao, trebalo bi da vrati pridruženu vrednost. U suprotnom bi trebalo da vrati -1.
count(): vraća broj ključeva koji nisu istekli.

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
The class has three public methods:
set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
count(): returns the count of un-expired keys.
*/

var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

TimeLimitedCache.prototype.set = function (key, value, duration) {
    let found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key).ref);
    this.cache.set(key, {
        value,
        ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
};

TimeLimitedCache.prototype.get = function (key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};