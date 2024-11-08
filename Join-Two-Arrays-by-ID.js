/* NASLOV ZADATKA

Uz dva niza arr1 i arr2, vratite novi niz joinedArrai. Svi objekti u svakom od dva niza ulaza će sadržati id polje koje ima celobrojnu vrednost. 

joinedArrai je niz formiran spajanjem arr1 i arr2 na osnovu njihovog id ključa. Dužina joinedArrai-a treba da bude dužina jedinstvenih vrednosti id-a. Vraćeni niz treba sortirati u rastućem redosledu na osnovu id ključa.

Ako dati ID postoji u jednom nizu, ali ne i u drugom, jedan objekat sa tim ID-om treba da bude uključen u niz rezultata bez izmene.

Ako dva objekta dele ID, njihova svojstva treba da se spoje u jedan objekat:

Ako ključ postoji samo u jednom objektu, taj jedan par ključ-vrednost treba da bude uključen u objekat.
Ako je ključ uključen u oba objekta, vrednost u objektu iz arr2 treba da nadjača vrednost iz arr1.

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
*/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function (arr1, arr2) {
    const result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            for (const key in arr2[i])
                result[arr2[i].id][key] = arr2[i][key];
        } else {
            result[arr2[i].id] = arr2[i];
        }
    }

    return Object.values(result);
}

let arr1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let arr2 = [
    { id: 2, age: 30 },
    { id: 3, name: "Chuck", age: 25 },
    { id: 4, name: "David", age: 40 }
];
console.log(join(arr1, arr2));

/*RESULT:
[
    { id: 1, name: "Alice" },                 // Preuzet iz arr1
    { id: 2, name: "Bob", age: 30 },          // Spojeno iz arr1 i arr2
    { id: 3, name: "Chuck", age: 25 },        // Spojeno iz arr1 i arr2 (name promenjen u "Chuck")
    { id: 4, name: "David", age: 40 }         // Preuzet iz arr2 (novi objekat)
]
*/
