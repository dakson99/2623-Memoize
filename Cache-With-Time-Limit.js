/*NASLOV ZADATKA:

Napišite klasu koja omogućava dobijanje i postavljanje parova ključ-vrednost, ali vreme do isteka je povezano sa svakim ključem.
Klasa ima tri javne metode:
set(ključ, vrednost, trajanje): prihvata celobrojni ključ, celobrojnu vrednost i trajanje u milisekundama. Kada istekne vreme, ključ bi trebalo da bude nedostupan. Metoda treba da vrati true ako isti ključ koji nije istekao već postoji i false u suprotnom. I vrednost i trajanje bi trebalo da budu zamenjeni ako ključ već postoji.
get(kei): ako postoji ključ koji nije istekao, trebalo bi da vrati pridruženu vrednost. U suprotnom bi trebalo da vrati -1.
count(): vraća broj ključeva koji nisu istekli.

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
The class has three public methods:
set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
count(): returns the count of un-expired keys.
*/