/* NASLOV ZADATKA

Dati objekat ili niz obj, vratite kompaktni objekat.

Kompaktni objekat je isti kao originalni objekat, osim sa uklonjenim ključevima koji sadrže pogrešne vrednosti. Ova operacija se primenjuje na objekat i sve ugnežđene objekte. Nizovi se smatraju objektima gde su indeksi ključevi. Vrednost se smatra netačnom kada logički(vrednost) vraća netačno.

Možete pretpostaviti da je obj izlaz JSON.parse. Drugim rečima, to je važeći JSON.

Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
*/



//Proverite da li je obj null. Ako jeste, vratite null.
//Proverite da li je obj niz.
//Ako je tako, prvo možemo koristiti funkciju filtera. U ovom problemu treba koristiti obj.filter(Boolean).
//Proverite da li obj nije objekat. Ako nije return obj.
//Ako prethodna tri koraka nisu uradila ništa, to znači da obj nije null, niz ili nije objekat. Dakle, to je objekat, i mi ga tako tretiramo.
//Napravite praznu promenljivu. Ovde će se zvati zbijeno.
//Iterirajte svaki ključ u obj. Za svaki ključ pozivamo compactObject na odgovarajućoj vrednosti ključa, tako da možemo ukloniti sve pogrešne vrednosti u svim potencijalnim podnizovima ili podobjektima u vrednosti. Ako je rezultat toga istinit, sabijenom objektu dodajemo ključ i vrednost. U suprotnom, ne radite ništa, ne želimo da dodamo ključnu i lažnu vrednost.
//Nakon ponavljanja kroz ceo obj, vratite sabijeno

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function (obj) {
    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (value) compacted[key] = value;
    }

    return compacted;
};

const originalObject = {
    a: 1,
    b: 0,
    c: null,
    d: {
        e: 2,
        f: null
    },
    g: [1, 0, 3, null]
};

const compactedObject = compactObject(originalObject);

console.log(compactedObject);