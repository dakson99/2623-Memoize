# 2623. Memoize

__Definišite funkciju pod nazivom memoize koja uzima funkciju fn kao svoj parametar.
Kreirajte prazan objekat koji se zove keš za čuvanje prethodno izračunatih rezultata.
Vrati novu funkciju koja uzima bilo koji broj argumenata koristeći sintaksu širenja.
Koristite JSON.stringifi() da pretvorite argumente u string koji će se koristiti kao ključ za objekat keša
Proverite da li ključ već postoji u objektu keša. Ako jeste, vratite keširanu vrednost.
Ako ključ ne postoji u kešu, pozovite originalnu funkciju fn koristeći appli() da biste prosledili argumente i sačuvali rezultat u objektu keša koristeći ključ kao ime svojstva.
Na kraju, vratite izračunati rezultat__ 