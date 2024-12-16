Flight je primitivni tip to je string, dok smo tu vrednost preneli u funkciju dole on je flightNum broj leta koji je kopiran. Flight je flightNum.
A darko objekat u funkciji checkIn je passenger, i onda smo passenger promenili kao i flight ali ovde se darko promenio. Kada promenimo referentni tip funkcije ono sto se kopira je zapravo samo refenenca objekta u memoriskoj gomili, dakle to bi bilo kao da ovo napisemo: passenger = darko. Dakle kada proenimo objekat funckije to je zaista kao kopiranje objeknog objekta i tako sta god da promenimo u kopiji odrazice se u orignalu.
Postoje 2 termina kada se radi o funkcijama to su:
1) Prenos po vrednosti
2) Prenost po referenci
JavaScript nema prelaz po referenci nego samo prolaz po vrednosti.
Zapamti: Za objekte mi u stvari prosledjujemo refencu, dakle memoriska adresa objekta. Medjutim sama ta referenca je i dalje vrednost. To je vrednost koja sadrzi memorijsku adresu. Dakle, u sustini prenosimo referencu na funkciju ali ne prelazimo referencom.