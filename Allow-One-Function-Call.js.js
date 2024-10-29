/*NASLOV ZADATKA:
Ako je data funkcija fn, vratite novu funkciju koja je identična originalnoj funkciji osim što osigurava da se fn pozove najviše jednom.
Prvi put kada se pozove vraćena funkcija, trebalo bi da vrati isti rezultat kao i fn.
Svaki sledeći put kada se pozove, trebalo bi da se vrati nedefinisano

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

Intuicija
Problem je što od nas traži da vratimo novu funkciju koja se ponaša drugačije u zavisnosti od toga da li je ranije pozvana. Ako nije ranije pozvana, trebalo bi da pozove originalnu funkciju i vrati njen rezultat. Ako je ranije pozvana, trebalo bi da se vrati nedefinisana bez ponovnog pozivanja originalne funkcije

Pristup
Da bismo rešili ovaj problem, možemo da vratimo novu funkciju koja prati da li je ranije pozvana. To možemo da uradimo korišćenjem zatvaranja za čuvanje logičke zastave koja je inicijalno postavljena na false. Prvi put kada se pozove nova funkcija, pozivamo originalnu funkciju i postavljamo zastavicu na true. Takođe čuvamo rezultat originalne funkcije. Naknadni pozivi nove funkcije jednostavno se vraćaju nedefinisani bez ponovnog pozivanja originalne funkcije

*/

/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function (fn) {
    let useOne = false;
    let result;
    return function (...args) {
        if (!useOne) {
            result = fn(...args);
            useOne = true;
            return result;
        }
        return undefined;
    }
}

function greet(name) {
    return `Hello, ${name}!`;
}

let greetOnce = once(greet);

console.log(greetOnce("Ana"));
console.log(greetOnce("Marko"));
