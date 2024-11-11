/* NASLOV ZADATKA

Dati objekat ili niz obj, vratite kompaktni objekat.

Kompaktni objekat je isti kao originalni objekat, osim sa uklonjenim ključevima koji sadrže pogrešne vrednosti. Ova operacija se primenjuje na objekat i sve ugnežđene objekte. Nizovi se smatraju objektima gde su indeksi ključevi. Vrednost se smatra netačnom kada logički(vrednost) vraća netačno.

Možete pretpostaviti da je obj izlaz JSON.parse. Drugim rečima, to je važeći JSON.

Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
*/