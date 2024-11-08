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