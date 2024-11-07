/* NASLOV ZADATKA

Napišite kod koji poboljšava sve nizove tako da možete pozvati metod arrai.groupBi(fn) na bilo kom nizu i on će vratiti grupisanu verziju niza.

Grupisani niz je objekat gde je svaki ključ izlaz fn(arr[i]), a svaka vrednost je niz koji sadrži sve stavke u originalnom nizu koje generišu taj ključ.

Obezbeđeni povratni poziv fn će prihvatiti stavku u nizu i vratiti ključ niza.

Redosled svake liste vrednosti treba da bude redosled kojim se stavke pojavljuju u nizu. Svaki redosled ključeva je prihvatljiv.

Rešite ga bez lodashove _.groupBi funkcije.

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.
*/

/**
 * @param {Function} fn
 * @return {Array}
 */

Array.prototype.groupBy = function (fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item);
        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(item);
        return grouped;
    }, {});
}

const people = [
    { name: "Ana", age: 20 },
    { name: "Milan", age: 30 },
    { name: "Marko", age: 20 },
    { name: "Jelena", age: 30 }
];

const groupedByAge = people.groupBy(person => person.age);

console.log(groupedByAge);