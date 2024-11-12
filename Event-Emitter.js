/* NASLOV ZADATKA

Dizajnirajte klasu EventEmitter. Ovaj interfejs je sličan (ali sa nekim razlikama) onom koji se nalazi u Node.js ili interfejsu Event Target DOM-a. EventEmitter treba da omogući pretplatu na događaje i njihovo emitovanje.

Vaša klasa EventEmitter treba da ima sledeće dve metode:

subscribe – Ovaj metod uzima dva argumenta: ime događaja kao string i funkciju povratnog poziva. Ova funkcija povratnog poziva će se kasnije pozvati kada se događaj emituje.
Događaj bi trebalo da ima više slušalaca za isti događaj. Kada emitujete događaj sa više povratnih poziva, svaki treba da bude pozvan redosledom kojim je pretplaćen. Treba vratiti niz rezultata. Možete pretpostaviti da nijedan povratni poziv prosleđen za pretplatu nije referentno identičan.
Metoda pretplate takođe treba da vrati objekat sa metodom za odjavu koja omogućava korisniku da se odjavi. Kada se pozove, povratni poziv treba ukloniti sa liste pretplata i vratiti nedefinisano.
emit – Ovaj metod uzima dva argumenta: ime događaja kao string i opcioni niz argumenata koji će biti prosleđeni povratnom(e) pozivu(ima). Ako nema povratnih poziva pretplaćenih na dati događaj, vratite prazan niz. U suprotnom, vratite niz rezultata svih povratnih poziva redosledom na koji su bili pretplaćeni

Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
*/


class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        const listeners = this.events.get(event);
        listeners.push(cb);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(cb);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    emit(event, args = []) {
        if (!this.events.has(event)) {
            return [];
        }

        const listeners = this.events.get(event);
        const results = [];

        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;
    }
}

const emitter = new EventEmitter();

const greetSub = emitter.subscribe("greet", (name) => `Hello, ${name}!`);

console.log(emitter.emit("greet", ["Alice"]));

greetSub.unsubscribe();

console.log(emitter.emit("greet", ["Bob"]));